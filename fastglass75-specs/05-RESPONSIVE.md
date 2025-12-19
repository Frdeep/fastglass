# 📱 Responsive Design — Fastglass75

## Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
}

@media (min-width: 1280px) {
  .container {
    padding: 0 60px;
  }
}
```

---

## Navbar

### Mobile (< 768px)

```css
@media (max-width: 767px) {
  .navbar {
    top: 10px;
    width: calc(100% - 20px);
    padding: 10px 16px;
  }
  
  .navbar-links {
    display: none; /* Caché sur mobile */
  }
  
  .navbar-phone {
    display: none;
  }
  
  .navbar-actions .btn-primary {
    padding: 10px 16px;
    font-size: 13px;
  }
  
  /* Menu hamburger */
  .navbar-toggle {
    display: flex;
  }
}
```

### Menu Mobile Overlay

```html
<div class="mobile-menu">
  <div class="mobile-menu-content">
    <a href="#services">Services</a>
    <a href="#zones">Zones</a>
    <a href="#faq">FAQ</a>
    <a href="#contact" class="btn-primary">Rendez-vous</a>
    <a href="tel:0123456789" class="mobile-phone">
      📞 01 23 45 67 89
    </a>
  </div>
</div>
```

```css
.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: var(--z-overlay);
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  position: absolute;
  top: 80px;
  right: 10px;
  width: calc(100% - 20px);
  max-width: 320px;
  background: white;
  border-radius: var(--radius-2xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: translateY(-20px);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

.mobile-menu.open .mobile-menu-content {
  transform: translateY(0);
  opacity: 1;
}
```

---

## Hero Section

### Desktop

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 160px 0 100px;
}

.hero h1 {
  font-size: 56px;
}
```

### Tablet (768px - 1024px)

```css
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
    padding: 120px 0 60px;
  }
  
  .hero h1 {
    font-size: 40px;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-visual {
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .hero-trust {
    justify-content: center;
  }
}
```

### Mobile (< 768px)

```css
@media (max-width: 767px) {
  .hero {
    padding: 100px 0 40px;
  }
  
  .hero h1 {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-cta .btn-primary {
    width: 100%;
  }
  
  .hero-trust {
    flex-direction: column;
    gap: 16px;
  }
  
  .trust-divider {
    display: none;
  }
  
  .hero-floating-card {
    display: none;
  }
}
```

---

## Grilles

### Avantages (3 colonnes → 1 colonne)

```css
.avantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .avantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .avantages-grid {
    grid-template-columns: 1fr;
  }
}
```

### Services (3 colonnes → 1 colonne)

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .card-service {
    max-width: 400px;
    margin: 0 auto;
  }
}
```

### Zones (8 colonnes → 4 → 2)

```css
.zones-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 768px) {
  .zones-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Témoignages (Slider sur mobile)

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

/* Alternative : scroll horizontal sur mobile */
@media (max-width: 640px) {
  .testimonials-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 16px;
    padding-bottom: 20px;
  }
  
  .testimonials-grid .card-testimonial {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }
}
```

---

## Process Timeline

### Desktop (Horizontal)

```css
.process-timeline {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
}

.process-connector {
  flex: 1;
  max-width: 100px;
  height: 2px;
  background: var(--color-border-light);
  margin-top: 24px;
}
```

### Mobile (Vertical)

```css
@media (max-width: 768px) {
  .process-timeline {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
  
  .process-step {
    display: flex;
    gap: 20px;
    padding: 24px 0;
  }
  
  .process-connector {
    width: 2px;
    height: 40px;
    margin: 0 0 0 19px;
  }
}
```

---

## FAQ

### Desktop

```css
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

### Mobile

```css
@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Section Spacing

```css
.section {
  padding: 100px 0;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 40px 0;
  }
}
```

---

## Typographie Responsive

```css
h1 {
  font-size: clamp(32px, 5vw, 56px);
}

h2 {
  font-size: clamp(28px, 4vw, 40px);
}

h3 {
  font-size: clamp(20px, 3vw, 24px);
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
}
```

---

## Footer

```css
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-social {
    justify-content: center;
  }
}
```

---

## Touch Considerations

```css
/* Targets tactiles plus grands sur mobile */
@media (max-width: 768px) {
  .btn-primary,
  .btn-secondary {
    min-height: 48px;
  }
  
  .navbar-links a,
  .footer-links a {
    padding: 12px 0;
  }
  
  .faq-header {
    padding: 20px;
  }
}
```
