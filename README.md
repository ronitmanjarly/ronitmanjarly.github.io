# ✦ Ronit Manjarly — Portfolio Website

A modern, highly interactive, and soothing minimalist portfolio website designed for **Ronit Manjarly** (Graphic Designer / Brand Identity, Packaging & Motion Visualist).

Built specifically for seamless 1-click deployment on **GitHub Pages** (`https://<username>.github.io` or `https://<username>.github.io/<repo-name>/`) with zero build steps or server dependencies.

---

## 🌟 Highlights & Features

- **Soothing & Positive Aesthetics**: Warm Japanese cream canvas (`#FAF7F2`), coral tangerine (`#FF5E3A`), warm amber gold (`#E69D2C`), and meadow sage (`#387A68`), paired with editorial serif and modern geometric typography (`Plus Jakarta Sans` & `Instrument Serif`).
- **Interactive Portfolio Archive**:
  - 10 comprehensive case studies showcasing all 32 original artworks from `portfolio_images/`.
  - Categories: *Brand Identity, Packaging & 3D, Editorial & Books, Posters & Art, Commercial & Motion*.
  - Live instant search filter by title, discipline, or software tool.
- **Interactive Lightbox Modal**:
  - Full-resolution artwork previews.
  - Multi-shot thumbnail navigation strip.
  - Complete project case notes, tools used, client context, and role.
  - Keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
- **Web-Optimized Performance**:
  - Generated WebP and retina-optimized assets in `assets/portfolio/`, reducing file weights from 22MB raw PNGs to crisp 40-150KB files for sub-second page loads.
- **Interactive Contact Form**:
  - Form validation with animated feedback banner.
  - Direct email trigger (`ronitmanjarly@gmail.com`) with prefilled inquiry message.
  - One-click "Copy Email" button with toast alert.
  - Direct links to Behance, Instagram, Tumblr, and LinkedIn.
- **Interactive Micro-Experiences**:
  - Ambient glowing background mesh lights.
  - Custom magnetic trailing cursor.
  - Web Audio API subtle click & success audio effects (with instant mute toggle).
  - Dark Mode toggle (*Midnight Velvet* vs *Soothing Warm*).
  - Animated stats counters on scroll.
  - Direct download link to Ronit’s Resume PDF (`assets/Ronit_Manjarly_Resume.pdf`).

---

## 🚀 Deploying to GitHub Pages (Step-by-Step)

### Option A: User Page (`<your-username>.github.io`)
1. Create a new repository on GitHub named:
   ```
   <your-username>.github.io
   ```
   *(For example: `ronitmanjarly.github.io`)*

2. In your terminal inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Launch Ronit Manjarly portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. Your website will be live automatically at:
   ```
   https://<your-username>.github.io/
   ```

---

### Option B: Project Repository (`github.com/<your-username>/portfolio`)
1. Create a repository on GitHub (e.g. `portfolio`).
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Launch Ronit Manjarly portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** > **Pages** (in the left sidebar).
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live in 1-2 minutes at:
   ```
   https://<your-username>.github.io/portfolio/
   ```

---

## 📁 Repository Structure

```
├── index.html                  # Semantic, accessible HTML5 single-page application
├── styles.css                  # Custom design system with light/dark variables & responsive layout
├── script.js                   # Interactive logic, project manifest, modal, search, audio FX
├── README.md                   # Documentation and deployment instructions
├── assets/
│   ├── images/
│   │   ├── ronit.webp          # High-res profile portrait
│   │   └── ronit.jpg
│   ├── portfolio/              # Web-optimized WebP & JPG artworks + thumbnails (93 files)
│   ├── projects.json           # JSON backup of project metadata
│   └── Ronit_Manjarly_Resume.pdf # Downloadable resume
└── portfolio_images/           # Original full-resolution source graphics & resume
```

---

## 🛠 Adding or Editing Projects

To add new artwork:
1. Place your image in `assets/portfolio/`.
2. Open `script.js` and add an entry to the `PROJECTS_DATA` array:
   ```javascript
   {
     id: 'my-new-project',
     title: 'Project Title',
     category: 'branding', // 'branding' | 'packaging' | 'editorial' | 'posters' | 'advertising'
     categoryName: 'Brand Identity',
     badge: 'Featured',
     year: '2026',
     client: 'Client Name',
     role: 'Lead Designer',
     description: 'Detailed description of the design case...',
     tools: ['Adobe Illustrator', 'Adobe Photoshop'],
     cover: 'assets/portfolio/my_image.webp',
     coverThumb: 'assets/portfolio/my_image_thumb.webp',
     gallery: [
       { src: 'assets/portfolio/my_image.webp', caption: 'Front View' }
     ]
   }
   ```
3. Save and push to GitHub — your site will update automatically!
