# Jeeb Website

A modern landing page built with React, TypeScript, and Vite featuring a custom hand-drawn logo and interactive animations.

## Features

- 🎨 Custom hand-drawn star logo
- ⚡ Built with Vite for fast development
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Clean, modern UI with Tailwind CSS
- 🔥 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pvssynmusic/Jeeb-website.git
cd Jeeb-website
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── generated/
│       └── LandingPage.tsx    # Main landing page component
├── assets/                    # Static assets
├── lib/                      # Utility functions
└── main.tsx                  # App entry point
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is automatically deployed to GitHub Pages at [jeeb.app](https://jeeb.app) using GitHub Actions.

### Custom Domain Setup

The site uses a custom domain configured through:
- `public/CNAME` file containing `jeeb.app`
- GitHub repository settings with custom domain enabled
- Automatic deployment via GitHub Actions workflow

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the contents of `dist/` to your hosting provider

## License

MIT License - feel free to use this project for your own purposes!
