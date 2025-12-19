# 🎨 Design System — Fastglass75

## Palette de Couleurs

### Couleurs Principales

```css
:root {
  /* Primary - Noir élégant */
  --color-primary: #0A0A0A;
  --color-primary-hover: #1A1A1A;
  
  /* Accent - Bleu vif */
  --color-accent: #2563EB;
  --color-accent-light: #3B82F6;
  --color-accent-dark: #1D4ED8;
  
  /* Success - Vert */
  --color-success: #10B981;
  --color-success-light: #34D399;
  
  /* Warning - Orange cadeau */
  --color-gift: #F59E0B;
  --color-gift-light: #FBBF24;
}
```

### Couleurs Neutres

```css
:root {
  /* Backgrounds */
  --color-bg-white: #FFFFFF;
  --color-bg-light: #F8FAFC;
  --color-bg-gray: #F1F5F9;
  
  /* Textes */
  --color-text-primary: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #94A3B8;
  
  /* Borders */
  --color-border-light: #E2E8F0;
  --color-border-medium: #CBD5E1;
}
```

### Gradients

```css
:root {
  --gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #1E293B 100%);
  --gradient-accent: linear-gradient(135deg, #2563EB 0%, #3B82F6 100%);
  --gradient-gift: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
  --gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
}
```

---

## Typographie

### Font Family

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --font-primary: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Échelle Typographique

| Élément | Taille | Poids | Line Height |
|---------|--------|-------|-------------|
| H1 Hero | 56px / 3.5rem | 800 | 1.1 |
| H2 Section | 40px / 2.5rem | 700 | 1.2 |
| H3 Card | 24px / 1.5rem | 600 | 1.3 |
| Body Large | 18px / 1.125rem | 400 | 1.6 |
| Body | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 500 | 1.5 |
| Caption | 12px / 0.75rem | 500 | 1.4 |

```css
:root {
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.5rem;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

---

## Spacing System

Base : 4px (0.25rem)

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

---

## Border Radius

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
}
```

---

## Shadows

```css
:root {
  /* Subtle */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  /* Default */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -2px rgba(0, 0, 0, 0.1);
  
  /* Elevated */
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
  
  /* Prominent */
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
  
  /* Cards */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
  
  /* Navbar */
  --shadow-navbar: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

---

## Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-navbar: 500;
  --z-overlay: 600;
  --z-modal: 700;
  --z-toast: 800;
}
```

---

## Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  --transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
