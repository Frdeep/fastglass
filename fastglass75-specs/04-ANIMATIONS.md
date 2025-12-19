# ✨ Animations — Fastglass75

## Principes Généraux

### Philosophie
- Subtilité avant tout : les animations soutiennent l'UX, ne la distraient pas
- Performance : privilégier `transform` et `opacity`
- Cohérence : timing et easing uniformes

### Timings Standards

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-scroll: 600ms;
}
```

### Easings

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Animations au Scroll (Reveal)

### Classes d'Animation

```css
/* État initial (caché) */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-scroll) var(--ease-out),
              transform var(--duration-scroll) var(--ease-out);
}

/* État visible */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variantes */
.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
}

.reveal-right {
  opacity: 0;
  transform: translateX(30px);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.95);
}
```

### JavaScript - Intersection Observer

```javascript
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));
```

### Stagger Effect (délai entre éléments)

```css
.stagger > *:nth-child(1) { transition-delay: 0ms; }
.stagger > *:nth-child(2) { transition-delay: 100ms; }
.stagger > *:nth-child(3) { transition-delay: 200ms; }
.stagger > *:nth-child(4) { transition-delay: 300ms; }
```

---

## Hover Effects

### Boutons

```css
.btn-primary {
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out),
              background var(--duration-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary:active {
  transform: translateY(0);
  transition-duration: 50ms;
}
```

### Cards

```css
.card {
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Image zoom dans card */
.card-image img {
  transition: transform var(--duration-slow) var(--ease-out);
}

.card:hover .card-image img {
  transform: scale(1.05);
}
```

### Links

```css
.link-underline {
  position: relative;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width var(--duration-base) var(--ease-out);
}

.link-underline:hover::after {
  width: 100%;
}
```

---

## Micro-interactions

### Input Focus

```css
.input-field {
  transition: border-color var(--duration-base),
              box-shadow var(--duration-base),
              background var(--duration-base);
}

.input-field:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}
```

### Checkbox / Toggle

```css
.toggle-slider {
  transition: transform var(--duration-base) var(--ease-spring);
}

.toggle-input:checked + .toggle-slider {
  transform: translateX(24px);
}
```

### Icon Rotation (FAQ Arrow)

```css
.faq-icon {
  transition: transform var(--duration-base) var(--ease-out);
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}
```

---

## Animations Spéciales

### Floating Card (Hero)

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-floating-card {
  animation: float 4s ease-in-out infinite;
}
```

### Pulse Badge (Nouveau / Promo)

```css
@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.badge-pulse {
  position: relative;
}

.badge-pulse::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: inherit;
  animation: pulse-ring 2s ease-out infinite;
}
```

### Number Counter

```javascript
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out
    
    element.textContent = Math.floor(eased * target);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }
  
  requestAnimationFrame(update);
}
```

---

## Navbar Scroll Effect

```javascript
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
```

```css
.navbar {
  transition: background var(--duration-base),
              box-shadow var(--duration-base),
              padding var(--duration-base);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 8px 24px;
}
```

---

## Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Loading States

### Skeleton Loader

```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-gray) 25%,
    var(--color-bg-light) 50%,
    var(--color-bg-gray) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

### Button Loading

```css
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```
