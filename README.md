# Brooklyn Business Club

A bilingual business networking community website connecting entrepreneurs, business owners, and professionals through networking, collaboration, and meaningful business relationships.

Brooklyn Business Club is a modern, responsive website designed to introduce the club, showcase its activities, provide membership information, and connect visitors with the community.

## Overview

The website provides information about the club, its activities, membership process, contact information, and community policies.

### Main Features

- **Homepage** — introduces Brooklyn Business Club, its mission, and networking opportunities.
- **About page** — presents the club, its activities, and networking formats.
- **Membership page** — explains the joining process, membership expectations, and club rules.
- **Contact page** — provides contact information, social media links, and an interactive contact form.
- **Privacy Policy** — explains personal information handling and privacy practices.
- **Terms & Conditions** — defines website usage terms and conditions.
- **Cookie Policy** — describes cookie usage and third-party technologies.
- **Community Guidelines** — establishes standards for respectful communication, professional networking, privacy, and participation.
- **Bilingual interface** — supports English and Russian languages.
- **Responsive design** — optimized for desktop, tablet, and mobile devices.
- **SEO support** — includes page metadata, Open Graph information, robots.txt, and XML sitemap.
- **Social integration** — links to Facebook, Telegram, and WhatsApp.
- **Reusable components** — shared site header, footer, and contact form.

## Website Pages

| Route | Description |
|---|---|
| `/` | English homepage |
| `/ru` | Russian homepage |
| `/about` | About the club |
| `/join` | Membership information |
| `/contact` | Contact information and contact form |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `/cookie-policy` | Cookie Policy |
| `/community-guidelines` | Community Guidelines |

All pages are available in English and Russian. Russian routes use the `/ru` prefix.

## Technology Stack

### Frontend
- [Next.js](https://nextjs.org/) — React framework and application routing.
- [React](https://react.dev/) — component-based user interface.
- [TypeScript](https://www.typescriptlang.org/) — static typing.
- CSS Modules — locally scoped component and page styling.

### Internationalization
- [next-intl](https://next-intl.dev/) — internationalization, translations, and locale-aware navigation.
- JSON translation files — English and Russian language content.

### Forms and Integrations
- [Formspree](https://formspree.io/) — contact form submission and processing.
- Facebook — community group integration.
- Telegram and WhatsApp — direct communication links.

### Build and Deployment
- [Vite](https://vite.dev/) — development and build tooling.
- [Vinext](https://github.com/cloudflare/vinext) — Next.js-compatible application tooling.
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) — deployment infrastructure.
- npm — package management.

### Code Quality
- ESLint — code quality and linting.
- TypeScript — static type checking.

## Project Structure

business-contacts-club/
│
├── app/
│   ├── [locale]/
│   │   ├── about/
│   │   ├── community-guidelines/
│   │   ├── contact/
│   │   ├── cookie-policy/
│   │   ├── join/
│   │   ├── privacy-policy/
│   │   ├── terms-and-conditions/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── page.module.css
│   │
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── contact-form/
│   ├── site-footer/
│   └── site-header/
│
├── i18n/
│   ├── navigation.ts
│   ├── request.ts
│   └── routing.ts
│
├── messages/
│   ├── en.json
│   └── ru.json
│
├── public/
│   └── Static images, logos, and other assets
│
├── cloudflare.config.ts
├── eslint.config.mjs
├── next.config.ts
├── vite.config.ts
├── proxy.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md


## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd business-contacts-club

Install dependencies:
npm install

### Environment Variables

Create a `.env.local` file in the project root.
NEXT_PUBLIC_FACEBOOK_GROUP_URL=https://www.facebook.com/groups/1549833390202202

The Facebook group URL is optional because the application includes a fallback URL.

Do not commit `.env.local` or other files containing private configuration values.

## Available Scripts

### Next.js

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates a Next.js production build |
| `npm run start` | Starts the Next.js production server |
| `npm run lint` | Runs ESLint |

### Vite / Vinext / Cloudflare

| Command | Description |
|---|---|
| `npm run dev:vinext` | Starts the Vite development server on port 3001 |
| `npm run build:vinext` | Builds the application using Vite and Vinext |
| `npm run start:vinext` | Starts the Vite preview server |
| `npm run deploy:vinext` | Deploys the application using Vinext Cloudflare tooling |

The Next.js and Vinext workflows are separate execution and deployment paths.

## Internationalization

The website supports two languages:

- English (`en`) — default language.
- Russian (`ru`) — secondary language.

Language configuration is maintained in:

- `i18n/routing.ts`
- `i18n/request.ts`
- `i18n/navigation.ts`

Translation content is stored in:

- `messages/en.json`
- `messages/ru.json`

The website uses locale-aware navigation and language switching.

## Styling and Design

The visual identity of Brooklyn Business Club is based on a refined, professional aesthetic.

Key design elements include:

- Deep navy and charcoal backgrounds.
- Warm ivory typography.
- Gold accent colors.
- Elegant typography and carefully balanced layouts.
- Photography inspired by Brooklyn and professional networking.
- Responsive layouts and mobile-friendly navigation.
- Subtle animations and interactive visual elements.

CSS Modules are used to isolate component and page styles.

Global styles, typography, and shared design variables are defined in `app/globals.css`.

## SEO and Website Metadata

The website includes:

- Page-specific metadata and descriptions.
- Open Graph metadata.
- Canonical URLs.
- Locale-aware metadata.
- `robots.txt` configuration.
- XML sitemap generation.

SEO configuration is maintained in individual page metadata functions, `app/robots.ts`, and `app/sitemap.ts`.

## Development Guidelines

- Keep page-specific styling in the corresponding CSS Modules.
- Place reusable interface components in the `components` directory.
- Keep translation content in the appropriate JSON files.
- Use locale-aware navigation from `i18n/navigation.ts`.
- Store static images, logos, and other assets in `public`.
- Maintain responsive layouts across desktop, tablet, and mobile.
- Keep website branding consistent across pages, metadata, and documentation.
- Update the README whenever new pages, features, technologies, or deployment configurations are introduced.
- Run ESLint and a production build before deploying changes.
- Do not manually modify generated build files or the `.next` directory.

## License

This project is maintained as the website of Brooklyn Business Club.

No open-source license has been specified.