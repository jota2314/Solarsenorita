# n8n Automated Consultation Booking Setup Guide

## 🚀 Overview
This system automatically:
1. Receives consultation requests from your website
2. Checks your Google Calendar for availability
3. Books the next available appointment
4. Creates a Google Meet link
5. Sends SMS confirmation with meeting details
6. Sends email confirmation with calendar invite

## 🛠️ Required Services

### 1. n8n Cloud Account
- Sign up at [n8n.cloud](https://n8n.cloud)
- Choose a plan (Starter plan works for this automation)

### 2. Google Workspace Account
- Gmail account for sending emails
- Google Calendar for scheduling
- Google Meet for video calls

### 3. Twilio Account (for SMS)
- Sign up at [twilio.com](https://twilio.com)
- Purchase a phone number
- Get Account SID and Auth Token

## ⚙️ Setup Steps

### Step 1: Import n8n Workflow
1. Log into your n8n dashboard
2. Click "Create New Workflow"
3. Copy the contents of `n8n-workflow-template.json`
4. Click "Import from JSON" and paste the content
5. Save the workflow as "Solar Consultation Automation"

### Step 2: Configure Webhook
1. Click on the "Consultation Webhook" node
2. Copy the webhook URL (it should look like: `https://your-n8n-instance.com/webhook/consultation`)
3. Add this URL to your environment variables as `NEXT_PUBLIC_N8N_WEBHOOK_URL`

### Step 3: Connect Google Calendar
1. Click on "Check Available Times" node
2. Click "Create New Credential" 
3. Choose "Google Calendar API"
4. Follow OAuth setup to connect your Google account
5. Set Calendar ID to "primary" (your main calendar)

### Step 4: Connect Google Calendar for Event Creation
1. Click on "Create Calendar Event" node
2. Use the same Google Calendar credential
3. Enable "Conference Data" to auto-create Google Meet links

### Step 5: Connect Twilio (SMS)
1. Click on "Send SMS Confirmation" node
2. Click "Create New Credential"
3. Enter your Twilio Account SID and Auth Token
4. Set your Twilio phone number in the workflow variables

### Step 6: Connect Gmail (Email)
1. Click on "Send Email Confirmation" node
2. Create Gmail credential
3. Use OAuth to connect your Gmail account

### Step 7: Set Environment Variables in n8n
Go to Settings > Variables and add:
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number (e.g., +15551234567)

### Step 8: Test the Workflow
1. Click "Execute Workflow" with test data:
```json
{
  "phone": "+15551234567",
  "email": "test@example.com",
  "submittedAt": "2025-01-15T10:00:00Z",
  "source": "website"
}
```

## 🌐 Website Integration

### Environment Variables
Add to your `.env.local` file:
```bash
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/consultation
```

### Netlify Environment Variables
In your Netlify dashboard, add:
- `NEXT_PUBLIC_N8N_WEBHOOK_URL`: Your n8n webhook URL

## 📱 SMS Message Template
The system sends this automated SMS:

```
🌟 Solar Señorita Consultation Confirmed!

📅 Tuesday, January 16, 2025 at 10:00 AM EST
🎥 https://meet.google.com/abc-defg-hij

Hi! This is Jenni, your Solar Señorita. I'm excited to show you how solar can save you money!

Questions? Reply to this text or call (781) 426-6300

See you soon! ☀️
```

## 📧 Email Template
Customers receive a professional HTML email with:
- Meeting details and Google Meet link
- What to expect during consultation
- Preparation checklist
- Contact information for rescheduling

## 🔧 Customization Options

### Business Hours
Edit the "Find Available Slot" function to change:
- Business hours (currently 9 AM - 5 PM)
- Available days (currently Monday - Friday)
- Time zone (currently EST)

### SMS Message
Modify the "Format SMS Message" function to customize:
- Message tone and content
- Company branding
- Contact information

### Email Template
Update the "Send Email Confirmation" node to customize:
- Email design and branding
- Content and messaging
- Company information

## 🚨 Testing Checklist
- [ ] Webhook receives form submissions
- [ ] Google Calendar integration works
- [ ] Available time slots are found correctly
- [ ] Calendar events are created with Google Meet links
- [ ] SMS messages are sent successfully
- [ ] Email confirmations are delivered
- [ ] Website displays success message

## 🔍 Troubleshooting

### Common Issues:
1. **Webhook not receiving data**
   - Check webhook URL in environment variables
   - Verify n8n workflow is active

2. **Google Calendar errors**
   - Ensure OAuth permissions are granted
   - Check calendar ID is correct

3. **SMS not sending**
   - Verify Twilio credentials
   - Check phone number format (+1XXXXXXXXXX)

4. **Email not sending**
   - Check Gmail OAuth permissions
   - Verify sender email address

### Debug Mode:
Enable debug mode in n8n to see detailed execution logs for troubleshooting.

## 📊 Analytics
The workflow captures:
- Form submission data
- Appointment booking success rate
- Customer contact information
- Source tracking (website, page URL, etc.)

## 🔐 Security Notes
- All credentials are encrypted in n8n
- Webhook uses HTTPS for secure data transmission
- Customer data is processed according to privacy policies
- No sensitive data is logged permanently

## 📞 Support
For technical support with this automation:
- n8n Documentation: [docs.n8n.io](https://docs.n8n.io)
- Google Calendar API: [developers.google.com/calendar](https://developers.google.com/calendar)
- Twilio SMS API: [twilio.com/docs/sms](https://twilio.com/docs/sms)

---

**🎉 Once configured, customers will receive automated SMS confirmations within 15 minutes of submitting the consultation form!**