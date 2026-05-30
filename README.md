# Lakshay Manchanda — Portfolio

A production-ready personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or extract the project
cd lakshay-portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Folder Structure

```
lakshay-portfolio/
├── public/
│   └── resume.pdf          ← Add your actual resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css     ← Global styles + Google Fonts
│   │   ├── layout.tsx      ← Root layout with SEO metadata
│   │   └── page.tsx        ← Main page assembling all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx  ← Sticky nav with scroll spy
│   │   │   └── Footer.tsx  ← Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx          ← Hero with typewriter
│   │   │   ├── About.tsx         ← About me + interests
│   │   │   ├── Skills.tsx        ← Skill category cards
│   │   │   ├── Experience.tsx    ← Timeline-based experience
│   │   │   ├── Projects.tsx      ← Filterable project cards
│   │   │   ├── Achievements.tsx  ← Hackathons + milestones
│   │   │   ├── Education.tsx     ← Education timeline
│   │   │   └── Contact.tsx       ← Contact form + links
│   │   └── ui/
│   │       ├── AnimatedText.tsx
│   │       └── SectionHeader.tsx
│   ├── hooks/
│   │   └── useScrollSpy.ts  ← Active nav section tracker
│   └── lib/
│       ├── data.ts          ← All portfolio content
│       └── utils.ts         ← cn() utility
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

All content lives in `src/lib/data.ts`. Edit:
- `personalInfo` — name, bio, links, email
- `skills` — skill categories and items
- `experience` — work history
- `projects` — project cards
- `achievements` — hackathons, certifications
- `education` — degrees

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repo
4. Vercel auto-detects Next.js — click **Deploy**

### Option 3: One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Adding Your Resume

Place your resume PDF at `public/resume.pdf` — the Resume download button in the Hero section links to this file.

## Environment Variables

No environment variables are required for the base portfolio. If you add a contact form backend (e.g., Resend, EmailJS), create `.env.local`:

```env
RESEND_API_KEY=your_key_here
```

## Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Images lazy-loaded
- Fonts loaded via Google Fonts CDN
- Animations use GPU-accelerated transforms

## License

MIT — feel free to adapt for your own portfolio.

Thank You
