/**
 * Ronit Manjarly — Portfolio Interactive Engine
 * GitHub Pages Ready • Pure ES6 Vanilla JavaScript
 */

// ==========================================================================
// 1. Projects Data Manifest (Complete 10 Featured Case Studies, 32 Artworks)
// ==========================================================================
const PROJECTS_DATA = [
  {
    id: 'amul-cheese-packaging',
    title: 'Amul Pure Cheese — Packaging Architecture & 3D Prototyping',
    category: 'packaging',
    categoryName: 'Packaging & 3D',
    badge: 'FMCG & Industrial',
    year: '2025',
    client: 'Commercial Dairy Packaging',
    role: 'Packaging Designer & 3D Visualist',
    description: 'End-to-end commercial packaging design for Amul Cheese: developed from precise vector dielines with accurate bleed margins, locking tabs, and regulatory nutrition panels to photorealistic 3D corrugated mailer boxes and master corrugated shipping cartons with custom branded tape.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', '3Ds Max', 'Dieline Prepress'],
    cover: 'assets/portfolio/mailer_box_mockup_1.webp',
    coverThumb: 'assets/portfolio/mailer_box_mockup_1_thumb.webp',
    coverJpg: 'assets/portfolio/mailer_box_mockup_1.jpg',
    gallery: [
      { src: 'assets/portfolio/mailer_box_mockup_1.webp', caption: 'Amul Pure Cheese Corrugated Mailer Box — Isometric 3D Rendering' },
      { src: 'assets/portfolio/mailer_box_mockup_2.webp', caption: 'Front Elevation & Structural Locking Flaps' },
      { src: 'assets/portfolio/taped_cardboard_box_mockup_3.webp', caption: 'Master Logistics Shipping Box with Custom Branded Tape' },
      { src: 'assets/portfolio/packeging_design.webp', caption: 'Technical Dieline Vector Layout with Nutrition Specification' }
    ]
  },
  {
    id: 'up-revelation-branding',
    title: 'Up Revelation — Brand Identity & Corporate Stationery Suite',
    category: 'branding',
    categoryName: 'Brand Identity',
    badge: 'Featured Identity',
    year: '2026',
    client: 'Up Revelation Travel Agency',
    role: 'Lead Visual Designer',
    description: 'Complete visual identity system for Up Revelation travel agency created at M.A.D Communications. Comprises modern aerodynamic monogram emblems, luxury embossed business cards, tactile hang tags, corporate envelopes, and employee identification cards.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Identity', 'Stationery Design'],
    cover: 'assets/portfolio/logo_1.webp',
    coverThumb: 'assets/portfolio/logo_1_thumb.webp',
    coverJpg: 'assets/portfolio/logo_1.jpg',
    gallery: [
      { src: 'assets/portfolio/logo_1.webp', caption: 'Up Revelation Primary Wordmark & Modern Travel Emblem' },
      { src: 'assets/portfolio/logo_2.webp', caption: 'Up Revelation Emblem Silhouette & Geometric Form' },
      { src: 'assets/portfolio/logo_3.webp', caption: 'Monochrome Logo Variations & Grid Geometry' },
      { src: 'assets/portfolio/business_card_mockup_2.webp', caption: 'Embossed Luxury Business Cards (Angle View)' },
      { src: 'assets/portfolio/business_card_mockup_3.webp', caption: 'Floating Stationery Card Mockup Suite' },
      { src: 'assets/portfolio/free_business_card_mockup_1.webp', caption: 'Foil Stamped Executive Business Card' },
      { src: 'assets/portfolio/free_business_card_mockup_2.webp', caption: 'Modern Minimalist Vertical Business Card' },
      { src: 'assets/portfolio/cloth_tag_mockup_1.webp', caption: 'Tactile Apparel Brand Hang Tag with Grommet' },
      { src: 'assets/portfolio/cloth_tag_mockup_2.webp', caption: 'Organic Cotton Fabric Garment Tag Mockup' },
      { src: 'assets/portfolio/envelope_mockup_1.webp', caption: 'Corporate Correspondence Envelope & Letterhead' },
      { src: 'assets/portfolio/plastic_id_card_mockup_22.webp', caption: 'Corporate Employee RFID Identification Badge' }
    ]
  },
  {
    id: 'kali-yuga-editorial',
    title: 'Kali-Yuga — Hardcover Book Design & Typographic Spreads',
    category: 'editorial',
    categoryName: 'Editorial & Books',
    badge: 'Publication Design',
    year: '2025',
    client: 'Literary & Mythological Anthology',
    role: 'Editorial Typographer',
    description: 'Artistic book design exploring ancient mythological chronicles through a modern dystopian lens. Features bespoke hardcover dust jackets with dark foil typography, thoughtful grid architecture, and refined double-page interior typographic spreads.',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Editorial Grid Systems', 'Prepress'],
    cover: 'assets/portfolio/book_mockup_1.webp',
    coverThumb: 'assets/portfolio/book_mockup_1_thumb.webp',
    coverJpg: 'assets/portfolio/book_mockup_1.jpg',
    gallery: [
      { src: 'assets/portfolio/book_mockup_1.webp', caption: 'Hardcover Perspective & Gold-Embossed Spine Art' },
      { src: 'assets/portfolio/book_mockup_2.webp', caption: 'Typographic Title Page & Chapter Opening Layout' },
      { src: 'assets/portfolio/book_mockup_3.webp', caption: 'Editorial Double-Page Spread with Column Grid Hierarchy' },
      { src: 'assets/portfolio/book_mockup_5.webp', caption: 'Minimalist Dark Foil Embossed Hardcover Dust Jacket' },
      { src: 'assets/portfolio/book_mockup_6.webp', caption: 'Interior Reading Typography & Heading Proportions' }
    ]
  },
  {
    id: 'be-cool-poster',
    title: '“BE COOL” — Liquid Pop-Art Chromatic Typography',
    category: 'posters',
    categoryName: 'Posters & Art',
    badge: 'Art Direction',
    year: '2024',
    client: 'Visual Art Exploration',
    role: 'Art Director & Typographer',
    description: 'High-energy visual exploration fusing fluid chromatic lettering, iridescent metallic refraction, and a vibrant pop-art palette. Designed to capture playful rebellion and optimistic energy in a large-format print poster.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Custom Lettering', 'Color Grading'],
    cover: 'assets/portfolio/pster.webp',
    coverThumb: 'assets/portfolio/pster_thumb.webp',
    coverJpg: 'assets/portfolio/pster.jpg',
    gallery: [
      { src: 'assets/portfolio/pster.webp', caption: '“BE COOL” — Fluid Chromatic Lettering Pop-Art Poster' }
    ]
  },
  {
    id: 'soul-double-exposure',
    title: '“SOUL” — Surrealist Silhouette & Double Exposure Poster',
    category: 'posters',
    categoryName: 'Posters & Art',
    badge: 'Fine Art Poster',
    year: '2024',
    client: 'Cinematic Conceptual Art',
    role: 'Digital Matte Artist',
    description: 'Cinematic key visual blending human contemplation with towering mountain landscapes through layered double-exposure photography, ambient mist textures, and stark evocative typography.',
    tools: ['Adobe Photoshop', 'Matte Painting', 'Composition', 'Atmospheric Lighting'],
    cover: 'assets/portfolio/soul.webp',
    coverThumb: 'assets/portfolio/soul_thumb.webp',
    coverJpg: 'assets/portfolio/soul.jpg',
    gallery: [
      { src: 'assets/portfolio/soul.webp', caption: '“SOUL” — Surrealist Mountain Double Exposure Poster' }
    ]
  },
  {
    id: 'citrus-orange-juice',
    title: 'Pure Citrus Orange Juice — Beverage Packaging & Dieline',
    category: 'packaging',
    categoryName: 'Packaging & 3D',
    badge: 'Beverage Branding',
    year: '2025',
    client: 'Fresh Farm Juice Co.',
    role: 'Packaging Designer',
    description: 'Fresh cold-pressed orange juice glass bottle packaging featuring crisp vector fruit illustrations, vibrant sun-kissed palette, and full regulatory nutritional dieline artwork ready for cylinder press production.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', '3D Mockups', 'Production Dieline'],
    cover: 'assets/portfolio/orange_juice_bottle_mockup_3_bott.webp',
    coverThumb: 'assets/portfolio/orange_juice_bottle_mockup_3_bott_thumb.webp',
    coverJpg: 'assets/portfolio/orange_juice_bottle_mockup_3_bott.jpg',
    gallery: [
      { src: 'assets/portfolio/orange_juice_bottle_mockup_3_bott.webp', caption: 'Glass Juice Bottle with Realistic Condensation Mockup' },
      { src: 'assets/portfolio/pa2.webp', caption: 'Technical Label Dieline & Nutrition Information Vector Artwork' }
    ]
  },
  {
    id: 'fanta-citrus-campaign',
    title: 'Fanta Citrus Blast — Commercial Advertising Campaign',
    category: 'advertising',
    categoryName: 'Commercial & Motion',
    badge: 'Ad Campaign',
    year: '2026',
    client: 'Commercial Ad Concept (M.A.D Comm)',
    role: 'Visual Campaign Designer',
    description: 'High-octane advertising campaign visuals developed for Fanta citrus beverages. Features dynamic liquid splashes, floating orange slices, ice shards, and vibrant punchy typography designed for billboard and social media exhibits.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Campaign Art Direction', 'Photo Manipulation'],
    cover: 'assets/portfolio/test1.webp',
    coverThumb: 'assets/portfolio/test1_thumb.webp',
    coverJpg: 'assets/portfolio/test1.jpg',
    gallery: [
      { src: 'assets/portfolio/test1.webp', caption: 'Fanta Citrus — “Burst of Refreshment” Splash Campaign' },
      { src: 'assets/portfolio/test2.webp', caption: '“Wanta Fanta?” Kinetic Liquid Fruit Blast Ad' },
      { src: 'assets/portfolio/test_3.webp', caption: 'Fanta Can Splash & Ice Shards Campaign Visual' }
    ]
  },
  {
    id: 'fathers-day-tribute',
    title: 'Manjarly Studio — Father’s Day Editorial Tribute',
    category: 'posters',
    categoryName: 'Posters & Art',
    badge: 'Editorial Graphic',
    year: '2024',
    client: 'Manjarly Studio',
    role: 'Typographer & Designer',
    description: 'Heartfelt typographic tribute celebrating paternal devotion, combining golden sunrise tones, heartfelt editorial hierarchy, and warm geometric framing.',
    tools: ['Adobe Illustrator', 'Typography Design', 'Vector Illustration'],
    cover: 'assets/portfolio/fd11.webp',
    coverThumb: 'assets/portfolio/fd11_thumb.webp',
    coverJpg: 'assets/portfolio/fd11.jpg',
    gallery: [
      { src: 'assets/portfolio/fd11.webp', caption: 'Manjarly Studio — Father’s Day Warm Editorial Tribute' }
    ]
  },
  {
    id: 'spain-panos-id',
    title: 'SpainPaños — Corporate Badge & Credential System',
    category: 'branding',
    categoryName: 'Brand Identity',
    badge: 'Corporate Identity',
    year: '2024',
    client: 'SpainPaños Corporate',
    role: 'Identity Specialist',
    description: 'Staff security ID credentials and lanyard badge design for SpainPaños, engineered with clean corporate typography, bold identification bands, and high-visibility hierarchy.',
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Print Production'],
    cover: 'assets/portfolio/id_card_2.webp',
    coverThumb: 'assets/portfolio/id_card_2_thumb.webp',
    coverJpg: 'assets/portfolio/id_card_2.jpg',
    gallery: [
      { src: 'assets/portfolio/id_card_2.webp', caption: 'SpainPaños Employee Lanyard ID Badge' },
      { src: 'assets/portfolio/plastic_id_card_mockup_22.webp', caption: 'Plastic Proximity Access Card Mockup' }
    ]
  }
];

// ==========================================================================
// 2. Sound Effects Engine (Subtle Web Audio API - Zero External Assets)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio context may be restricted before gesture
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.05, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================================================
// 3. Application State & Elements Cache
// ==========================================================================
let currentFilter = 'all';
let searchQuery = '';
let currentModalProject = null;
let currentModalImageIndex = 0;

// ==========================================================================
// 4. Initialization on DOMContentLoaded
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSoundToggle();
  initCustomCursor();
  renderPortfolioGrid();
  initFilters();
  initSearch();
  initModalListeners();
  initContactForm();
  initCopyEmail();
  initStatsObserver();
  initMobileMenu();
  initSmoothScrollSpy();
});

// ==========================================================================
// 5. Theme Management (Light Soothing Sun / Midnight Velvet)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      sfx.playClick();
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === 'dark' ? 'Midnight Velvet' : 'Soothing Warm'} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (iconSpan) {
    iconSpan.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;
  updateSoundIcon(sfx.enabled);

  soundBtn.addEventListener('click', () => {
    const isEnabled = sfx.toggle();
    if (isEnabled) sfx.playClick();
    updateSoundIcon(isEnabled);
    showToast(isEnabled ? 'Sound effects enabled' : 'Sound effects muted');
  });
}

function updateSoundIcon(enabled) {
  const soundIcon = document.getElementById('soundIcon');
  if (soundIcon) {
    soundIcon.innerHTML = enabled
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  }
}

// ==========================================================================
// 6. Interactive Custom Cursor
// ==========================================================================
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover detection
  const interactiveSelector = 'a, button, input, textarea, select, .project-card, .stack-card, .clickable';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

// ==========================================================================
// 7. Portfolio Grid Rendering & Live Search/Filter
// ==========================================================================
function renderPortfolioGrid() {
  const grid = document.getElementById('portfolioGrid');
  const emptyState = document.getElementById('portfolioEmpty');
  if (!grid) return;

  const filtered = PROJECTS_DATA.filter((p) => {
    const matchCategory = currentFilter === 'all' || p.category === currentFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchQuery = !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query) ||
      p.tools.some((t) => t.toLowerCase().includes(query));

    return matchCategory && matchQuery;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  filtered.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View project: ${project.title}`);

    const toolsHTML = project.tools.slice(0, 3).map((t) => `<span class="tool-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img 
          src="${project.coverThumb}" 
          alt="${project.title}" 
          loading="lazy" 
          width="400" 
          height="300"
          onerror="this.src='${project.coverJpg}'"
        />
        <div class="card-badge-pill">${project.badge}</div>
        ${project.gallery.length > 1 ? `
          <div class="card-gallery-count">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            ${project.gallery.length} Shots
          </div>` : ''}
      </div>
      <div class="card-content">
        <div class="card-category-row">
          <span class="card-category">${project.categoryName}</span>
          <span class="card-year">${project.year}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-footer">
          <div class="card-tools">${toolsHTML}</div>
          <span class="card-action-link">
            Explore 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      sfx.playClick();
      openModal(project);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sfx.playClick();
        openModal(project);
      }
    });

    grid.appendChild(card);
  });
}

function initFilters() {
  updateFilterCounts();
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderPortfolioGrid();
    });
  });
}

function updateFilterCounts() {
  const counts = { all: PROJECTS_DATA.length };
  PROJECTS_DATA.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const filter = btn.getAttribute('data-filter');
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan && counts[filter] !== undefined) {
      countSpan.textContent = counts[filter];
    }
  });
}

function initSearch() {
  const searchInput = document.getElementById('portfolioSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderPortfolioGrid();
  });
}

// ==========================================================================
// 8. Interactive Lightbox Modal System
// ==========================================================================
function openModal(project, imageIndex = 0) {
  currentModalProject = project;
  currentModalImageIndex = imageIndex;

  const modal = document.getElementById('projectModal');
  if (!modal) return;

  updateModalContent();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentModalProject = null;
}

function updateModalContent() {
  if (!currentModalProject) return;

  const project = currentModalProject;
  const currentImage = project.gallery[currentModalImageIndex] || project.gallery[0];

  const modalImg = document.getElementById('modalMainImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalClient = document.getElementById('modalClient');
  const modalYear = document.getElementById('modalYear');
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDescription');
  const modalTools = document.getElementById('modalTools');
  const modalCaption = document.getElementById('modalCaption');
  const galleryStrip = document.getElementById('modalGalleryStrip');

  if (modalImg) {
    modalImg.src = currentImage.src;
    modalImg.alt = currentImage.caption || project.title;
  }
  if (modalCategory) modalCategory.textContent = project.categoryName;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalClient) modalClient.textContent = project.client;
  if (modalYear) modalYear.textContent = project.year;
  if (modalRole) modalRole.textContent = project.role;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalCaption) modalCaption.textContent = currentImage.caption || '';

  if (modalTools) {
    modalTools.innerHTML = project.tools
      .map((t) => `<span class="tool-tag">${t}</span>`)
      .join('');
  }

  // Thumbnail strip
  if (galleryStrip) {
    if (project.gallery.length > 1) {
      galleryStrip.style.display = 'flex';
      galleryStrip.innerHTML = project.gallery
        .map((img, idx) => `
          <div class="modal-thumb ${idx === currentModalImageIndex ? 'active' : ''}" data-index="${idx}">
            <img src="${img.src}" alt="Thumbnail ${idx + 1}" />
          </div>
        `)
        .join('');

      galleryStrip.querySelectorAll('.modal-thumb').forEach((thumb) => {
        thumb.addEventListener('click', (e) => {
          sfx.playClick();
          const idx = parseInt(thumb.getAttribute('data-index'), 10);
          currentModalImageIndex = idx;
          updateModalContent();
        });
      });
    } else {
      galleryStrip.style.display = 'none';
    }
  }
}

function initModalListeners() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sfx.playClick();
      closeModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        sfx.playClick();
        closeModal();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      navigateModal(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      navigateModal(1);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!currentModalProject) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateModal(-1);
    } else if (e.key === 'ArrowRight') {
      navigateModal(1);
    }
  });
}

function navigateModal(direction) {
  if (!currentModalProject) return;

  const totalShots = currentModalProject.gallery.length;
  if (totalShots > 1) {
    currentModalImageIndex = (currentModalImageIndex + direction + totalShots) % totalShots;
    updateModalContent();
  } else {
    // Navigate between projects if project has only 1 shot
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === currentModalProject.id);
    const nextIndex = (currentIndex + direction + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    openModal(PROJECTS_DATA[nextIndex], 0);
  }
}

// ==========================================================================
// 9. Interactive Contact Form & Copy-to-Clipboard
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBanner = document.getElementById('contactSuccessBanner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName')?.value.trim();
    const email = document.getElementById('senderEmail')?.value.trim();
    const service = document.getElementById('projectService')?.value;
    const timeline = document.getElementById('projectTimeline')?.value;
    const message = document.getElementById('senderMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    sfx.playSuccess();

    // Show celebratory success
    form.style.display = 'none';
    if (successBanner) {
      successBanner.style.display = 'block';
    }

    showToast('Thank you! Preparing your direct email client...');

    // Open prefilled mailto as native seamless fallback
    const subject = encodeURIComponent(`Project Inquiry: ${service || 'Graphic Design'} — ${name}`);
    const body = encodeURIComponent(
      `Hello Ronit,\n\nI came across your portfolio and would like to connect!\n\nName: ${name}\nEmail: ${email}\nService: ${service || 'General Inquiry'}\nEstimated Timeline: ${timeline || 'Flexible'}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );

    setTimeout(() => {
      window.location.href = `mailto:ronitmanjarly@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    sfx.playClick();
    const email = 'ronitmanjarly@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied ronitmanjarly@gmail.com to clipboard! ✦');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 2500);
    }).catch(() => {
      showToast('ronitmanjarly@gmail.com');
    });
  });
}

// ==========================================================================
// 10. Toast Notification System
// ==========================================================================
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 11. Animated Stats Counter
// ==========================================================================
function initStatsObserver() {
  const statsRibbon = document.querySelector('.stats-ribbon');
  if (!statsRibbon) return;

  const numbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          numbers.forEach((numEl) => {
            const target = parseInt(numEl.getAttribute('data-count'), 10);
            const prefix = numEl.getAttribute('data-prefix') || '';
            const suffix = numEl.getAttribute('data-suffix') || '';
            animateNumber(numEl, target, prefix, suffix, 1800);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsRibbon);
}

function animateNumber(element, target, prefix, suffix, duration) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quart
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(ease * target);

    element.textContent = `${prefix}${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${prefix}${target}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// 12. Mobile Menu & Smooth Scroll Spy
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    sfx.playClick();
    drawer.classList.toggle('open');
  });

  drawer.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

function initSmoothScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
