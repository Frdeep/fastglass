# 🚗 Fastglass75 — Site Web

Site web one-page moderne pour Fastglass75, spécialiste du remplacement de vitrage automobile à domicile en Île-de-France.

## 📋 Caractéristiques

- **Design moderne** inspiré iOS/app mobile avec coins arrondis et ombres douces
- **Responsive** - Optimisé pour mobile, tablette et desktop
- **Animations au scroll** avec Intersection Observer
- **Navbar flottante** avec effet de transparence
- **FAQ accordion** interactive
- **Formulaire de contact** avec validation
- **SEO optimisé** pour le référencement local

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 avec variables custom (Design System complet)
- JavaScript vanilla (ES6+)
- Google Fonts (Plus Jakarta Sans)
- Icônes SVG inline (Lucide style)

## 📁 Structure du projet

```
/
├── index.html              # Page principale
├── css/
│   └── styles.css          # Tous les styles
├── js/
│   └── main.js             # Animations et interactions
├── fastglass75-specs/      # Documentation design
│   ├── 00-OVERVIEW.md
│   ├── 01-DESIGN-SYSTEM.md
│   ├── 02-COMPONENTS.md
│   ├── 03-SECTIONS.md
│   ├── 04-ANIMATIONS.md
│   ├── 05-RESPONSIVE.md
│   └── 06-ASSETS.md
└── README.md
```

## 🚀 Démarrage rapide

1. Cloner le repository
2. Ouvrir `index.html` dans un navigateur

Ou utiliser un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx)
npx serve
```

## 📐 Sections du site

1. **Navbar flottante** - Navigation sticky avec effet blur
2. **Hero** - Accroche principale avec CTA et indicateurs de confiance
3. **Avantages** - 3 cards (0€, Cadeau 300€, Domicile)
4. **Services** - 3 cards avec images (Pare-brise, Vitre, Lunette)
5. **Process** - Timeline 3 étapes (RDV, Intervention, Cadeau)
6. **Zones** - 8 départements IDF
7. **Témoignages** - 3 avis clients
8. **FAQ** - 6 questions/réponses accordion
9. **CTA Final** - Bannière d'appel à l'action
10. **Contact** - Formulaire + informations
11. **Footer** - Navigation et légal

## 🎨 Design System

### Couleurs principales
- **Primaire (noir):** `#0A0A0A`
- **Accent (bleu):** `#2563EB`
- **Succès (vert):** `#10B981`
- **Cadeau (orange):** `#F59E0B`

### Typographie
- **Font:** Plus Jakarta Sans
- **Poids:** 400, 500, 600, 700, 800

### Breakpoints
- Mobile: < 640px
- Tablette: 640px - 1024px
- Desktop: > 1024px

## ✨ Animations

- **Scroll Reveal** - Éléments apparaissent au scroll
- **Stagger** - Délai progressif sur les grilles
- **Hover Effects** - Cards, boutons, liens
- **Floating Card** - Animation de flottement (Hero)
- **FAQ Accordion** - Ouverture/fermeture fluide

## 📱 Responsive

- Menu hamburger sur mobile
- Grilles adaptatives
- Typographie fluide (clamp)
- Images lazy-loaded

## 🔧 Personnalisation

### Modifier les couleurs
Éditer les variables CSS dans `css/styles.css` :

```css
:root {
    --color-primary: #0A0A0A;
    --color-accent: #2563EB;
    /* ... */
}
```

### Modifier le contenu
Éditer directement `index.html` pour :
- Textes et descriptions
- Numéro de téléphone
- Adresses email
- Témoignages
- Questions FAQ

## 📝 À faire (Production)

- [ ] Remplacer les images Unsplash par des photos personnalisées
- [ ] Ajouter le vrai numéro de téléphone
- [ ] Configurer l'envoi du formulaire (backend)
- [ ] Ajouter Google Analytics / Tag Manager
- [ ] Créer les pages légales (Mentions légales, CGV)
- [ ] Configurer le favicon définitif
- [ ] Ajouter le schema.org pour le SEO local

## 📄 Licence

Projet privé pour Fastglass75.

---

Développé avec ❤️ pour Fastglass75
