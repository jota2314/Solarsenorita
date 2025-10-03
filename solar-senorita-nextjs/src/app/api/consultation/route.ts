import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, email, projectType, address, urgency } = body;

    // Validate required fields
    if (!phone || !email || !projectType || !address || !urgency) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Prepare email content
    const urgencyLabels: Record<string, string> = {
      'asap': 'ASAP - Ready to move forward',
      '1-3months': 'Within 1-3 months',
      '3-6months': 'Within 3-6 months',
      '6-12months': 'Within 6-12 months',
      'just-exploring': 'Just exploring options'
    };

    const emailContent = {
      to: [
        process.env.CONTACT_EMAIL || 'jenny@solarsenorita.com',
        'jorgebetancurfx@gmail.com',
        'jennymart1707@gmail.com'
      ],
      subject: `New ${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Solar Lead - ${urgency === 'asap' ? 'URGENT' : 'Standard Priority'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Solar Lead - ${projectType.charAt(0).toUpperCase() + projectType.slice(1)} Project</h2>

          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h3>Project Details</h3>
          <p><strong>Project Type:</strong> ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}</p>
          <p><strong>Property Address:</strong> ${address}</p>
          <p><strong>Timeline:</strong> ${urgencyLabels[urgency] || urgency}</p>

          <h3>Lead Information</h3>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Source:</strong> Website Form</p>
          <p><strong>Priority:</strong> ${urgency === 'asap' ? 'HIGH PRIORITY - Contact within 15 minutes' : 'Standard - Contact within 24 hours'}</p>
        </div>
      `,
      text: `
🌞 NEW SOLAR LEAD - ${projectType.toUpperCase()} PROJECT

📞 CONTACT INFO:
Phone: ${phone}
Email: ${email}

🏠 PROJECT DETAILS:
Type: ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}
Address: ${address}
Timeline: ${urgencyLabels[urgency] || urgency}

📊 LEAD INFO:
Submitted: ${new Date().toLocaleString()}
Source: Website Form
Page: ${body.pageUrl || 'N/A'}

⏱️ NEXT STEPS:
${urgency === 'asap' ?
  '🔥 HIGH PRIORITY - Contact within 15 minutes!' :
  'Contact within 24 hours for best conversion rates.'}
      `
    };

    // Try multiple email services for reliability
    let emailSent = false;
    let lastError = null;

    // Option 1: Try Resend (if API key is available)
    if (process.env.RESEND_API_KEY && !emailSent) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: emailContent.to,
            subject: emailContent.subject,
            html: emailContent.html,
          }),
        });

        if (resendResponse.ok) {
          const data = await resendResponse.json();
          emailSent = true;
          console.log('Email sent via Resend:', data.id);
        } else {
          const errorData = await resendResponse.text();
          lastError = errorData;
          console.error('Resend error:', errorData);
        }
      } catch (error) {
        lastError = error;
        console.error('Resend error:', error);
      }
    }

    // Option 2: Try Formspree (if endpoint is available)
    if (process.env.FORMSPREE_ENDPOINT && !emailSent) {
      try {
        const formspreeResponse = await fetch(process.env.FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            phone: phone,
            message: `New consultation request from ${email} (${phone})`,
            _subject: emailContent.subject,
          }),
        });

        if (formspreeResponse.ok) {
          emailSent = true;
          console.log('Email sent via Formspree');
        } else {
          lastError = await formspreeResponse.text();
        }
      } catch (error) {
        lastError = error;
        console.error('Formspree error:', error);
      }
    }

    // Option 3: Try EmailJS (fallback)
    if (process.env.EMAILJS_SERVICE_ID && !emailSent) {
      try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
              to_email: emailContent.to,
              from_name: 'Solar Señorita Website',
              subject: emailContent.subject,
              message: emailContent.text,
              phone: phone,
              email: email,
            },
          }),
        });

        if (emailjsResponse.ok) {
          emailSent = true;
          console.log('Email sent via EmailJS');
        } else {
          lastError = await emailjsResponse.text();
        }
      } catch (error) {
        lastError = error;
        console.error('EmailJS error:', error);
      }
    }

    // Try to send SMS
    let smsSent = false;
    let smsError = null;

    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
      try {
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        // Send SMS to the customer
        const customerMessage = await client.messages.create({
          body: `Thank you for your interest in Solar Señorita! We'll contact you shortly to schedule your free solar consultation. Questions? Reply to this text or call us!`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone
        });

        // Send SMS notification to business owner
        if (process.env.OWNER_PHONE_NUMBER) {
          await client.messages.create({
            body: `New solar lead!\nPhone: ${phone}\nEmail: ${email}\nTime: ${new Date().toLocaleString()}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.OWNER_PHONE_NUMBER
          });
        }

        smsSent = true;
        console.log('SMS sent successfully:', customerMessage.sid);
      } catch (error) {
        smsError = error;
        console.error('SMS error:', error);
      }
    }

    // Return success with status of both email and SMS
    if (emailSent && smsSent) {
      return NextResponse.json({
        success: true,
        message: 'Perfect! Check your phone and email - we just sent you confirmation!'
      });
    } else if (emailSent || smsSent) {
      return NextResponse.json({
        success: true,
        message: 'Consultation request received! We will contact you soon.',
        emailSent,
        smsSent
      });
    } else {
      // Log the submission even if both fail
      console.log('Form submission (email and SMS failed):', { phone, email, timestamp: new Date().toISOString() });

      return NextResponse.json({
        success: true,
        message: 'Request received! We will contact you shortly.',
        warning: 'Automated notifications may be delayed'
      });
    }

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}