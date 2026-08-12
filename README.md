# Portfolio

A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases projects, skills, experience, and contact information in a polished single-page experience.

## Features

- Responsive portfolio layout
- Smooth scrolling and animated transitions
- Project showcase with detail pages
- Skills and experience sections
- Custom cursor and background effects
- SEO-friendly metadata and sitemap support

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- Lenis
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open http://localhost:3000 in your browser.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm svgr:icons
```

## Project Structure

```bash
.
├── app/
│   ├── _components/
│   ├── projects/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── icons/
│   └── ...
├── lib/
├── public/
├── types/
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Deployment

This app can be deployed to any platform that supports Next.js applications, including Vercel, Netlify, or a Node.js server environment.

## License

This project is for personal portfolio use.
