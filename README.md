# Adineh Market - Second-Hand Book Landing Page

A static, interactive landing page for selling second-hand books, developed as a technical interview task. Built with a focus on high performance, modern UI (Bento UI & Glassmorphism), and clean Vanilla JavaScript without frameworks.

**[Live Demo](https://aalikhazaee.github.io/adineh-landing-page)**

---

## Key Features

- **API Integration:** Dynamic rendering of product data from the provided endpoint.
- **Fallback Logic:** Automatic 30% discount calculation for used items when the API returns null for the selling price.
- **Bento UI:** Modern category grid architecture with transition animations.
- **Drag-to-Scroll:** Custom horizontal scrolling for the product list on desktop devices using Vanilla JS.
- **Glassmorphism:** Semi-transparent, blur-backdrop design patterns across main components.
- **Responsive Design:** Optimized for all screen sizes, including a native-app-style bottom navigation for mobile devices.

---

## Tech Stack

Developed strictly according to the "Pure & Static" task requirements:

- **Structure & Logic:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Phosphor Icons
- **Typography:** Vazirmatn

---

## How to Run

No build tools are required. To run the project locally:

1. Clone the repository:
```bash
git clone https://github.com/aalikhazaee/adineh-landing-page.git

2. Navigate to the directory:
```bash
cd adineh-landing-page

3. Open index.html in a web browser or use a local development server (e.g., VS Code Live Server).

---

## Project Structure
.
├── index.html      # Main page structure and layout
├── main.js         # DOM manipulation and API integration logic
├── NOTES.md        # Technical decisions, challenges, and design notes
├── TOOLS.md        # Documentation of tools and AI assistants utilized
├── README.md       # Project overview
└── *.png           # Custom design assets and banners