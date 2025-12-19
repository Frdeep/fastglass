# 🧩 Composants — Fastglass75

## Boutons

### Primary Button (Noir)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: var(--color-primary);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

**Contenu type :**
- "Prendre rendez-vous" + icône chevron
- "Appeler maintenant" + icône phone
- "Demander un devis"

### Secondary Button (Outline)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: var(--color-primary);
  font-size: 16px;
  font-weight: 600;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-border-medium);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  background: var(--color-bg-light);
}
```

### Ghost Button

```css
.btn-ghost {
  padding: 12px 20px;
  background: transparent;
  color: var(--color-text-secondary);
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.btn-ghost:hover {
  color: var(--color-primary);
}
```

---

## Cards

### Service Card

```html
<div class="card-service">
  <div class="card-image">
    <img src="pare-brise.jpg" alt="">
    <span class="card-tag">Le plus demandé</span>
  </div>
  <div class="card-content">
    <h3>Remplacement pare-brise</h3>
    <p>Intervention rapide à domicile...</p>
    <a href="#" class="card-link">
      En savoir plus
      <svg><!-- chevron --></svg>
    </a>
  </div>
</div>
```

```css
.card-service {
  background: white;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-base);
}

.card-service:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card-hover);
}

.card-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card-service:hover .card-image img {
  transform: scale(1.05);
}

.card-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 16px;
  background: white;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
}

.card-content {
  padding: 24px;
}

.card-content h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-content p {
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--color-primary);
}
```

### Avantage Card

```html
<div class="card-avantage">
  <div class="avantage-icon">
    <svg><!-- icon --></svg>
  </div>
  <span class="avantage-badge">Garanti</span>
  <h3>0€ à payer</h3>
  <p>Prise en charge totale par votre assurance</p>
</div>
```

```css
.card-avantage {
  position: relative;
  padding: 40px 32px;
  background: white;
  border-radius: var(--radius-2xl);
  text-align: center;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border-light);
}

.avantage-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: var(--color-bg-light);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avantage-icon svg {
  width: 32px;
  height: 32px;
  color: var(--color-accent);
}

.avantage-badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-success);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: 16px;
}

.card-avantage h3 {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 8px;
}

.card-avantage p {
  color: var(--color-text-secondary);
}
```

### Testimonial Card

```html
<div class="card-testimonial">
  <div class="testimonial-stars">★★★★★</div>
  <p class="testimonial-text">"Service impeccable..."</p>
  <div class="testimonial-author">
    <img src="avatar.jpg" alt="" class="author-avatar">
    <div>
      <strong>Marie D.</strong>
      <span>Paris 15e</span>
    </div>
  </div>
</div>
```

```css
.card-testimonial {
  padding: 32px;
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-card);
}

.testimonial-stars {
  color: var(--color-gift);
  font-size: 20px;
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author strong {
  display: block;
  font-weight: 600;
}

.testimonial-author span {
  font-size: 14px;
  color: var(--color-text-muted);
}
```

---

## Tags / Pills

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--radius-full);
}

.tag-default {
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
}

.tag-accent {
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-accent);
}

.tag-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.tag-gift {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-gift);
}
```

---

## Inputs

```css
.input-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.input-field {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  font-family: inherit;
  background: var(--color-bg-light);
  border: 2px solid transparent;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.input-field:focus {
  outline: none;
  border-color: var(--color-accent);
  background: white;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.input-field::placeholder {
  color: var(--color-text-muted);
}

textarea.input-field {
  resize: vertical;
  min-height: 120px;
}
```

---

## Navbar Flottante

```html
<nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-logo">
      <span class="logo-icon">🚗</span>
      <span class="logo-text">Fastglass<strong>75</strong></span>
    </a>
    <div class="navbar-links">
      <a href="#services">Services</a>
      <a href="#zones">Zones</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="navbar-actions">
      <a href="tel:0123456789" class="navbar-phone">
        <svg><!-- phone icon --></svg>
        01 23 45 67 89
      </a>
      <a href="#contact" class="btn-primary btn-sm">
        Rendez-vous
      </a>
    </div>
  </div>
</nav>
```

```css
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 1200px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-navbar);
  z-index: var(--z-navbar);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
}

.navbar-logo strong {
  font-weight: 800;
}

.navbar-links {
  display: flex;
  gap: 32px;
}

.navbar-links a {
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.navbar-links a:hover {
  color: var(--color-primary);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}

.btn-sm {
  padding: 12px 24px;
  font-size: 14px;
}
```
