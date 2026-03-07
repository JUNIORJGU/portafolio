# My Coding Showcase

A personal portfolio website showcasing my coding projects, skills, and experience.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── *.tsx        # Feature components (Hero, About, Projects, etc.)
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── lib/             # Utility functions
├── assets/          # Static assets
├── App.tsx          # Main App component
└── main.tsx         # Entry point
```

## Building for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

## License

This project is created and maintained by me.
