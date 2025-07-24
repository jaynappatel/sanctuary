# 🕊️ Sanctuary Austin

A mobile-first web application connecting people and animals in Austin, TX to local support resources including food banks, shelters, healthcare, legal aid, and pet services.

## 🌟 Features

- **Resource Directory**: Browse and search through categorized community resources
- **Interactive Map**: Find resources near you with location-based search
- **Emergency Resources**: Quick access to crisis hotlines and emergency shelters
- **Community Support**: Request help or offer assistance to neighbors
- **Legal Toolkit**: Know your rights with guides and free legal aid resources
- **Real-time Updates**: Live data powered by Supabase
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 8+
- Supabase account (free tier works fine)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanctuary-austin/website.git
   cd sanctuary-austin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   - Get Supabase credentials from your [Supabase dashboard](https://supabase.com/dashboard)
   - Optional: Add Google Maps API key for map functionality

4. **Set up the database**
   - Copy the SQL from `database/schema.sql`
   - Run it in your Supabase SQL editor
   - This creates all tables, policies, and sample data

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
sanctuary/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── browse/            # Resource browsing page
│   │   ├── emergency/         # Emergency resources page
│   │   ├── legal/             # Legal toolkit page
│   │   ├── get-involved/      # Community support page
│   │   ├── submit/            # Submit resource form
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx         # Main navigation
│   │   ├── Footer.tsx         # Site footer
│   │   └── ResourceCard.tsx   # Resource display component
│   └── lib/
│       └── supabase.ts        # Database client & utilities
├── database/
│   └── schema.sql             # Database schema & sample data
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Colors
- **Navy** (#2F4156): Primary text and navigation
- **Teal** (#5C7C8D): Buttons and interactive elements
- **Sky Blue** (#CBD5DE): Tags and accents
- **Light Blue** (#C7D9E5): Card backgrounds
- **Beige** (#EFE8E3): Container backgrounds
- **Off White** (#F4EFEB): Main background

### Typography
- **Jacques Francois**: Logo and brand elements
- **Poppins**: Headers and body text
- **Prata**: Category labels and special text

### Components
All components follow accessibility guidelines and include proper ARIA labels, semantic HTML, and keyboard navigation support.

## 🗄️ Database Schema

The application uses Supabase (PostgreSQL) with the following main tables:

- **resources**: Community organizations and services
- **community_posts**: Help requests and offers
- **emergency_hotlines**: Crisis support contacts
- **charities**: Local organizations for donations
- **resource_submissions**: User-submitted resources pending review

Row Level Security (RLS) is enabled for data protection.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Import your GitHub repo to Vercel
   - Vercel will auto-detect Next.js settings

2. **Add environment variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.local.example`

3. **Deploy**
   - Push to main branch to trigger deployment
   - Your site will be live at `https://your-app.vercel.app`

### Other Platforms

This Next.js app can deploy to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Any platform supporting Node.js

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier
npm test             # Run tests
```

### Code Style

- **TypeScript**: Strictly typed for better developer experience
- **ESLint**: Configured with Next.js and accessibility rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Clear commit message format

### Adding New Resources

1. **Via UI**: Use the Submit Resource form (requires admin approval)
2. **Via Database**: Add directly to `resources` table with `verified: true`
3. **Via Script**: Create a data seeding script for bulk imports

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test on mobile devices

## 📱 Mobile-First Approach

This app is designed mobile-first since many users in crisis situations primarily access services via mobile devices:

- Touch-friendly interface with large tap targets
- Optimized for one-handed use
- Fast loading on slower connections
- Works offline for critical information
- Emergency floating action button on mobile

## ♿ Accessibility

Sanctuary meets WCAG 2.1 AA standards:

- **Semantic HTML**: Proper heading structure and landmarks
- **Screen Reader Support**: ARIA labels and descriptions
- **Keyboard Navigation**: Full functionality without mouse
- **Color Contrast**: Meets minimum contrast requirements
- **Focus Management**: Clear focus indicators
- **Alternative Text**: Images have descriptive alt text

## 🔒 Security & Privacy

- **No Personal Data Storage**: We don't store user personal information
- **Secure Contact Forms**: Use third-party services for email
- **HTTPS Only**: All connections encrypted
- **Content Security Policy**: Prevents XSS attacks
- **Regular Updates**: Dependencies updated for security patches

## 📊 Analytics & Monitoring

- **Privacy-Friendly Analytics**: No personal data tracking
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Reporting**: Automated error detection
- **Uptime Monitoring**: Ensure 99.9% availability

## 🌟 Roadmap

### Phase 1 (Current)
- [x] Basic resource directory
- [x] Emergency resources page
- [x] Community support board
- [x] Legal toolkit
- [x] Mobile-responsive design

### Phase 2 (Next)
- [ ] Interactive map with resource markers
- [ ] User accounts and saved resources
- [ ] SMS notifications for emergency alerts
- [ ] Progressive Web App (PWA) capabilities
- [ ] Spanish language support

### Phase 3 (Future)
- [ ] Admin dashboard for resource management
- [ ] API for other organizations to integrate
- [ ] Analytics dashboard for impact tracking
- [ ] Expansion to other Texas cities

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Austin Community**: For the inspiration and need for this platform
- **Open Source Community**: For the amazing tools and libraries
- **Local Organizations**: For their tireless work helping our community
- **Volunteers**: Who help maintain and improve this resource

## 📞 Support

- **Technical Issues**: [GitHub Issues](https://github.com/sanctuary-austin/website/issues)
- **General Questions**: support@sanctuaryaustin.org
- **Resource Updates**: Use the Submit Resource form on the website

---

**Built with ❤️ for the Austin community**

*If this platform has helped you or someone you know, consider [donating](https://sanctuaryaustin.org/donate) to help keep it running and growing.*