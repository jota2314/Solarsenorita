# Solar Señorita - Next.js SEO-Optimized Website

A high-performance, SEO-optimized Next.js website for Solar Señorita, featuring city-specific pages for Massachusetts locations.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Styled Components** for styling (maintaining original design)
- **SEO Optimized** with metadata, Open Graph, and Twitter cards
- **City-specific pages** for 20 Massachusetts cities
- **Structured data** (JSON-LD) for rich snippets
- **Responsive design** maintained from original
- **Google Calendar integration** for consultations

## SEO Features

### City-Specific Pages
- `/boston` - Boston solar services
- `/worcester` - Worcester solar services  
- `/cambridge` - Cambridge solar services
- And 17 more Massachusetts cities

### Technical SEO
- Dynamic metadata generation
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Open Graph and Twitter card meta tags
- Canonical URLs
- Mobile-responsive design

### Performance
- Static site generation (SSG)
- Optimized images
- Minimal JavaScript bundle
- Fast page loads

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## City Pages

The website automatically generates SEO-optimized pages for these Massachusetts cities:

- Boston, Worcester, Springfield, Lowell, Cambridge
- Newton, Framingham, Quincy, Brockton, Lynn
- Somerville, Lawrence, New Bedford, Fall River, Malden
- Medford, Peabody, Revere, Waltham, Taunton

Each city page includes:
- City-specific title and meta description
- Local keywords optimization
- Structured data with local business information
- Custom content mentioning the city name

## Components

- `AboutSection` - Main hero section with video and consultation form
- `ConsultationForm` - Modal form with Google Calendar integration
- `StructuredData` - JSON-LD structured data for SEO

## Deployment

Build the project for production:

```bash
npm run build
```

The optimized build will be in the `.next` folder, ready for deployment to Vercel, Netlify, or any Node.js hosting platform.

## SEO Benefits

1. **Local SEO**: City-specific pages target local search queries
2. **Structured Data**: Rich snippets in search results
3. **Performance**: Fast loading times improve search rankings
4. **Mobile-First**: Responsive design for mobile search priority
5. **Technical SEO**: Proper meta tags, sitemaps, and crawlability
