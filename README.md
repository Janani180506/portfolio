# Janani K — AI Engineer Portfolio

A premium, modern portfolio website for Janani K built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗 Build for Production

```bash
npm run build
```

Output in `dist/` folder — host on Vercel, Netlify, or GitHub Pages.

## ✨ Features

- Dark mode by default with light/dark toggle
- Fully responsive (mobile, tablet, desktop)
- Smooth Framer Motion animations throughout
- Animated skill bars with InView trigger
- Interactive contact form with validation
- Sticky navbar with active section highlighting
- All sections: Hero, About, Education, Experience, Featured Project, Projects, Skills, Interests, Resume, Contact, Footer

## 🎨 Design System

- **Primary**: `#FF5C1A` (brand orange)
- **Accent**: `#FF8C42` (amber)
- **Background**: `#080809` / `#0D0D0F`
- **Card**: `#141416`
- **Font Display**: Space Grotesk
- **Font Body**: Inter
- **Font Mono**: JetBrains Mono

## 📁 Structure

```
src/
  components/    # Navbar, Footer, SectionHeader
  sections/      # Hero, About, Education, Experience, FeaturedProject,
                 # Projects, Skills, Interests, Resume, Contact
  index.css      # Global styles + Tailwind
  App.tsx        # Root with theme state
  main.tsx       # Entry point
```

## 📸 Profile Image

Replace the placeholder avatar in `src/sections/Hero.tsx` by adding an `<img>` tag inside the profile circle div.

## 📄 Resume

Update the `href="#"` on resume download buttons with your actual PDF path.
