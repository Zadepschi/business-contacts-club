# Brooklyn Bridge

A business networking community website.

Brooklyn Bridge is a community of entrepreneurs built around meaningful connections, professional networking, experience sharing, and collaboration.

This project is a responsive multi-page website designed to introduce the community, present its activities, and guide prospective members through the joining process.

## Overview

The website provides information about the community, its values, meeting formats, and membership guidelines.

### Main Features

- **Community introduction** — an overview of the Brooklyn Bridge community.
- **About page** — information about the club, its activities, and meeting formats.
- **Membership page** — joining process, membership requirements, and community guidelines.
- **Responsive design** — layouts adapted for desktop, tablet, and mobile devices.
- **Social integration** — links to the community's Facebook group.
- **Reusable components** — shared site header and footer.
- **CSS Modules** — locally scoped styles for pages and components.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage introducing the community |
| `/about` | About the club and its activities |
| `/join` | Membership process and community guidelines |

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- CSS Modules — component-level styling
- npm — package management

## Project Structure


business-contacts-club/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── join/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
│
├── components/
│   ├── site-header/
│   │   ├── site-header.tsx
│   │   └── site-header.module.css
│   └── site-footer/
│       ├── site-footer.tsx
│       └── siteFooter.module.css
│
├── public/
│   ├── logo-bridge3.png
│   ├── bridge.webp
│   └── friends.webp
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md


## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- npm

### Installation

Clone the repository:


git clone <repository-url>


Navigate to the project directory:
cd business-contacts-club

Install dependencies:
npm install


### Run Locally

Start the development server:
npm run dev


Open [http://localhost:3000](http://localhost:3000) in your browser.

If port `3000` is already in use, Next.js may start the application on another available port. Check the terminal output for the correct address.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |

## Environment Variables

The project can use an environment variable to configure the Facebook group URL.

Create a `.env.local` file in the project root:
NEXT_PUBLIC_FACEBOOK_GROUP_URL=https://www.facebook.com/groups/1549833390202202


The application also contains a fallback Facebook URL, so this variable is optional when the default group address is used.

Do not commit `.env.local` or other files containing private configuration values.

## Styling and Design

The visual identity of Brooklyn Bridge is based on a refined, professional aesthetic.

Key design elements include:

- Deep navy and charcoal backgrounds
- Warm ivory typography
- Gold accent colors
- Elegant serif and sans-serif typography
- Photography inspired by the Brooklyn Bridge and business community events

The project uses CSS Modules to keep page and component styles isolated and maintainable.

Global styles and shared design variables are defined in `app/globals.css`.

## Development Notes

- Page-specific styles should remain in their corresponding CSS Modules.
- Shared interface elements belong in the `components` directory.
- Public images and other static assets are stored in `public`.
- The `.next` directory is generated automatically by Next.js and should not be edited manually.
- Run a production build before deploying changes.

## License

This project is currently maintained as a portfolio and community website.

No open-source license has been specified.