# AURA | Premium Next.js Beauty Template

**AURA** is a high-performance, luxury e-commerce template built for beauty, fashion, and lifestyle brands. It features cinematic page transitions, physics-based interactions, and a fully responsive design.

![Aura Preview](public/images/hero-bottle.png)

## ✨ Core Features

- **Liquid Page Transitions:** Cinematic blur-and-slide entry animations.
- **Smooth Scrolling:** Integrated `Lenis` for buttery smooth inertia scrolling.
- **Physics Interactions:** Magnetic buttons and draggable product carousels.
- **Atmospheric Visuals:** Custom film grain overlay, vapor trails, and glassmorphism.
- **Preloader:** "Curtain reveal" introduction sequence.
- **9 Complete Pages:** Home, Shop, Product Detail, Collections, About, Journal, Article, Ingredients, Contact.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **State:** React Context API

---

## 🚀 Getting Started

1.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

    _(Note: If you see peer dependency errors, run `npm install --legacy-peer-deps`)_

2.  **Run Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Build for Production:**
    ```bash
    npm run build
    npm start
    ```

---

## 🎨 Customization Guide

### 1. Changing the Brand Name

Go to `components/layout/Header.js` and `components/layout/Footer.js`.
Search for "AURA" and replace it with your brand text.

### 2. Changing Colors

Open `tailwind.config.js`. The entire site uses these CSS variables:

- **Midnight:** The dark background color.
- **Accent:** The highlight color (currently `#a5b4fc` / soft indigo).
- **Glow:** The text hover effect color.

To change them globally, update `app/globals.css`:

```css
:root {
  --accent-rgb: 224, 200, 150; /* Example: Gold */
}
```
