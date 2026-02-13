# EQUITTY - RWA Fintech Waitlist Platform

> Production-grade waitlist platform for EQUITTY, built with Next.js 14, PostgreSQL, and Drizzle ORM.

![EQUITTY](./public/equitty_logo.png)

## 🎯 Overview

EQUITTY is a Real-World Asset (RWA) tokenization platform that democratizes access to high-value properties in Latin America. This repository contains the **waitlist phase** application that:

- Captures leads with email + nationality
- Generates unique 8-character referral codes
- Tracks user positions in the waitlist
- Implements rate limiting and bot prevention
- Sends welcome emails with referral links
- Supports bilingual interface (English/Spanish)

## ✨ Features

### Core Functionality
- ✅ **Next.js 14 App Router** - Latest React framework with Server Actions
- ✅ **PostgreSQL + Drizzle ORM** - Type-safe database operations
- ✅ **Referral System** - Unique codes for viral growth
- ✅ **Rate Limiting** - In-memory protection (5 attempts/hour)
- ✅ **Honeypot Anti-Bot** - Silent spam prevention
- ✅ **Email Integration** - Resend API with fallback mock
- ✅ **Bilingual Support** - ES/EN language toggle
- ✅ **Glassmorphism UI** - Modern dark theme with Tailwind CSS
- ✅ **Mobile-First Design** - Responsive on all devices
- ✅ **Accessibility** - Proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Drizzle ORM |
| Validation | Zod |
| Email | Resend |
| Styling | Tailwind CSS |
| Icons | Material Icons |
| Fonts | Alexandria, Inter |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database (Supabase/Neon recommended)
- Resend API key (optional, will mock if not provided)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd equitty-waitlist
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/database

# Email Configuration (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Set up the database**

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
equitty-waitlist/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Navbar.tsx
│   ├── WaitlistForm.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── LanguageProvider.tsx
│   └── Trans.tsx
├── actions/              # Server Actions
│   └── waitlist.ts       # Form submission logic
├── db/                   # Database configuration
│   ├── index.ts          # Drizzle client
│   └── schema.ts         # PostgreSQL schema
├── lib/                  # Utility functions
│   ├── email.ts          # Email sending
│   ├── rateLimit.ts      # Rate limiting
│   ├── referral.ts       # Referral code generation
│   ├── nationalities.ts  # Country list
│   └── translations.ts   # i18n strings
├── public/               # Static assets
│   ├── equitty_logo.png
│   └── equitty_isotipo.png
├── drizzle.config.ts     # Drizzle configuration
├── tailwind.config.js    # Tailwind configuration
├── package.json
└── README.md
```

## 💾 Database Schema

### `users` Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | Primary Key, Auto-generated |
| email | VARCHAR(255) | NOT NULL, UNIQUE, Indexed |
| nationality | VARCHAR(100) | NOT NULL |
| referral_code | VARCHAR(8) | NOT NULL, UNIQUE |
| referred_by | VARCHAR(8) | Nullable, Foreign Key |
| position | INTEGER | NOT NULL, Auto-increment |
| wallet_address | VARCHAR(255) | Nullable (future use) |
| created_at | TIMESTAMP | NOT NULL, Default NOW() |

## 🔌 API Endpoints (Server Actions)

### `joinWaitlist(formData)`

**Purpose:** Register a new user to the waitlist

**Input:**
```typescript
{
  email: string;
  nationality: string;
  referredBy?: string;  // Optional referral code
  honeypot: string;     // Must be empty (bot check)
  language: 'en' | 'es';
}
```

**Process:**
1. Validate input with Zod
2. Check honeypot field
3. Rate limit check (5 attempts per hour)
4. Verify email uniqueness
5. Validate referral code (if provided)
6. Generate unique 8-char referral code
7. Calculate position (total users + 1)
8. Insert into database
9. Send welcome email (async)
10. Return success with position and referral code

**Output:**
```typescript
{
  success: boolean;
  message: string;
  data?: {
    position: number;
    referralCode: string;
    email: string;
  };
}
```

### `getWaitlistCount()`

**Purpose:** Get current total number of users in waitlist

**Output:** `number`

## 🔒 Security Features

1. **Rate Limiting** - In-memory Map-based (5 attempts per email per hour)
2. **Honeypot Field** - Hidden input to catch bots
3. **Zod Validation** - Strict schema validation on all inputs
4. **SQL Injection Protection** - Drizzle ORM parameterized queries
5. **Email Verification** - Regex validation + uniqueness check
6. **Environment Variables** - No hardcoded secrets

## 📧 Email System

### Configuration

The app uses **Resend** for transactional emails. If `RESEND_API_KEY` is not set, it falls back to console logging (mock mode).

### Welcome Email Contents

- Personalized greeting (ES/EN)
- Waitlist position number
- Unique referral code
- Shareable referral link
- Call-to-action button
- Company branding

### Email Template

Located in `lib/email.ts` with full HTML styling matching the brand.

## 🌐 Internationalization (i18n)

### Supported Languages
- 🇬🇧 English (default)
- 🇪🇸 Español

### Implementation

- Client-side language context (`LanguageProvider`)
- Translation object in `lib/translations.ts`
- `<Trans k="key" />` component for dynamic content
- Language toggle in navbar (desktop + mobile)

## 🎨 Design System

### Brand Colors

```css
--brand-blue: #006AD5
--brand-cyan: #00B4C4
--brand-dark: #00346E
--brand-accent: #FFF3C1
--brand-black: #050A14
--brand-surface: #0F172A
```

### Typography

- **Headings:** Alexandria (Display font)
- **Body:** Inter (Sans-serif)
- **Icons:** Material Icons Outlined

### Key UI Patterns

- Glassmorphism cards with backdrop blur
- Gradient text for emphasis
- Animated blob backgrounds
- Floating animations on hover
- Smooth scroll behavior

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project to Vercel
3. Add environment variables in dashboard
4. Deploy automatically

### VPS (Manual)

```bash
# Build the application
npm run build

# Start production server
npm start
```

**Requirements:**
- Node.js 18+
- PostgreSQL accessible from server
- Environment variables configured
- Reverse proxy (Nginx/Caddy) for HTTPS

### Database Setup (Production)

**Supabase:**
1. Create project at [supabase.com](https://supabase.com)
2. Copy connection string (Transaction pool mode)
3. Run `npm run db:push` to create tables

**Neon:**
1. Create project at [neon.tech](https://neon.tech)
2. Copy connection string
3. Run `npm run db:push` to create tables

## 🧪 Testing

### Manual Testing Checklist

- [ ] Email validation (invalid format)
- [ ] Nationality dropdown selection
- [ ] Form submission with valid data
- [ ] Rate limiting (try 6 times)
- [ ] Referral link parameter (`?ref=CODE123`)
- [ ] Language toggle (ES ↔ EN)
- [ ] Mobile responsive design
- [ ] Success dashboard display
- [ ] Referral link copy button
- [ ] FAQ accordion functionality

### Test Referral Flow

1. Sign up as User A
2. Copy referral link from success dashboard
3. Open link in incognito/private window
4. Sign up as User B
5. Verify User B's record has `referred_by` = User A's code

## 👥 Developer Handoff Notes

### Database Access

You have **full control** of the PostgreSQL database. Use any client:

- **TablePlus** (macOS/Windows)
- **DBeaver** (Cross-platform)
- **pgAdmin** (Official tool)
- **Drizzle Studio** (Built-in): `npm run db:studio`

### Source Code Control

All code is yours to:
- Modify as needed
- Deploy to your own infrastructure
- Integrate with existing systems
- Scale horizontally

### No Vendor Lock-In

- Standard PostgreSQL (works with any provider)
- Portable Next.js application
- No proprietary services required
- Can self-host everything

## 🔧 Customization Guide

### Change Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  brand: {
    blue: '#YOUR_COLOR',
    cyan: '#YOUR_COLOR',
    // ...
  }
}
```

### Add New Language

1. Add translations in `lib/translations.ts`
2. Update `Language` type
3. Add toggle option in `Navbar.tsx`

### Modify Email Template

Edit `lib/email.ts` - `sendWelcomeEmail()` function.

### Add Database Fields

1. Update `db/schema.ts`
2. Run `npm run db:generate`
3. Run `npm run db:push`
4. Update TypeScript types

## 📊 Analytics & Monitoring

### Recommended Integrations

- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking
- **Sentry** - Error tracking
- **PostHog** - Product analytics

### Key Metrics to Track

1. Conversion rate (visits → signups)
2. Referral effectiveness (% with referral code)
3. Geographic distribution (nationality data)
4. Language preference (ES vs EN)
5. Time to 10k users

## 🐛 Troubleshooting

### Database Connection Error

```
Error: connect ECONNREFUSED
```

**Solution:** Check `DATABASE_URL` format and network access.

### Build Errors

```
Module not found: Can't resolve '@/...
```

**Solution:** Ensure `tsconfig.json` has correct paths configuration.

### Email Not Sending

**Solution:** Verify `RESEND_API_KEY` is set and valid. Check console for mock emails in development.

## 📝 License

© 2026 EQUITTY - All rights reserved.
Powered by **Soluciones OMEGA**.

## 📞 Support

For technical support:
- Email: info@omegasolutions.sv
- WhatsApp: +503 7207 6611
- Instagram: [@omegasolutions.sv](https://instagram.com/omegasolutions.sv)

---

**Built with ❤️ by OMEGA Solutions**
