# Fastglass75 - Site Web Complet

Site web professionnel pour Fastglass75, service de remplacement et réparation de pare-brise à Paris et Île-de-France.

## Caractéristiques

### Design & UX
- Design moderne et professionnel avec couleur primaire bleue (#0A7AFF)
- 100% responsive (mobile, tablet, desktop)
- Animations fluides avec Framer Motion
- Interface intuitive et navigation claire
- Optimisé pour la conversion (CTA stratégiques)

### Fonctionnalités Principales
- **Homepage complète** avec 11 sections :
  - Hero avec image de technicien
  - Stats bar
  - Services grid (6 services)
  - Formulaire Tally.so intégré
  - How it works (3 étapes)
  - Guarantees (0€ + 300€)
  - Engagements (4 points)
  - Testimonials (carousel)
  - Zone d'intervention
  - FAQ (accordion)
  - CTA final

### Pages
- **Homepage** (/)
- **Devis Gratuit** (/devis-gratuit) - Formulaire Tally.so avec sidebar
- **Nos Services** (/nos-services) - Vue d'ensemble de tous les services
- **5 Pages Services Détaillées** :
  - Remplacement pare-brise
  - Réparation pare-brise
  - Vitre latérale
  - Lunette arrière
  - Custode
- **Notre Concept** (/notre-concept) - Explication de l'offre 0€ + 300€
- **Zone d'Intervention** (/zone-intervention) - Paris & IDF
- **Contact** (/contact) - Coordonnées et formulaire
- **Pages Légales** :
  - Mentions légales
  - Politique de confidentialité
  - CGU

### Composants Réutilisables
- ServiceCard - Carte de service avec image et hover effects
- StatCard - Affichage de statistiques
- TestimonialCard - Témoignage client avec rating
- TallyForm - Wrapper pour formulaire Tally.so
- ServicePageTemplate - Template pour pages de services

### Layout
- **Header** : Navigation responsive avec menu dropdown services
- **Footer** : 4 colonnes avec liens et réseaux sociaux
- **WhatsApp Button** : Bouton flottant avec animation pulse

## Technologies Utilisées

- **Framework** : Next.js 14+ avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS 3.4+
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Formulaires** : Tally.so (intégration iframe)
- **Images** : Next.js Image component (optimisation automatique)

## Structure du Projet

```
project/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx (homepage)
│   │   ├── devis-gratuit/
│   │   ├── nos-services/
│   │   ├── services/
│   │   │   ├── remplacement-pare-brise/
│   │   │   ├── reparation-pare-brise/
│   │   │   ├── vitre-laterale/
│   │   │   ├── lunette-arriere/
│   │   │   └── custode/
│   │   ├── notre-concept/
│   │   ├── zone-intervention/
│   │   ├── contact/
│   │   ├── mentions-legales/
│   │   ├── confidentialite/
│   │   └── cgu/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TallyFormSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── GuaranteesSection.tsx
│   │   ├── EngagementsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ZoneSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── StatCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── TallyForm.tsx
│   └── ServicePageTemplate.tsx
└── public/
    └── images/
        └── (7 images de techniciens)
```

## Images Utilisées

Les 7 images fournies sont utilisées stratégiquement :

1. **-5927063639263218497_121.jpg** : Hero section (logo très visible)
2. **-5927063639263218496_121.jpg** : Service "Remplacement pare-brise"
3. **-5927063639263218489_121.jpg** : Service "Réparation"
4. **-5927063639263218493_121.jpg** : Service "Vitre latérale" + Page concept
5. **-5927063639263218495_121.jpg** : Service "Lunette arrière" + How It Works
6. **-5927063639263218494_121.jpg** : Service "Custode" + CTA final
7. **-5927063639263218488_121.jpg** : Service "Intervention domicile"

## Commandes

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Lint
npm run lint
```

## Configuration

### Variables d'Environnement
Le fichier `.env` contient les variables Supabase (optionnel pour ce projet).

### Tailwind Configuration
- Couleurs personnalisées (primary, secondary)
- Fonts : Plus Jakarta Sans (headings) + Inter (body)
- Animations personnalisées : float, shimmer, pulse-slow
- Breakpoints responsive

### SEO
- Meta tags optimisés sur toutes les pages
- OpenGraph et Twitter Cards
- Structured data (à ajouter si nécessaire)
- Sitemap automatique Next.js

## Formulaire Tally.so

Le formulaire Tally.so est intégré via iframe avec les paramètres :
- `alignLeft=1` : Alignement à gauche
- `hideTitle=1` : Masque le titre
- `transparentBackground=1` : Fond transparent
- `dynamicHeight=1` : Hauteur dynamique

L'ID du formulaire actuel est : `xXj0Yv` (à remplacer par votre vrai ID)

## Contact

**Téléphone** : 06 13 66 76 63
**Email** : contact@fastglass75.fr
**Zone** : Paris & Île-de-France

## Notes Importantes

1. **Images** : Toutes les images sont des photos réelles de techniciens Fastglass75
2. **Formulaire** : Remplacer l'ID Tally.so par le vrai ID de votre formulaire
3. **Téléphone** : Numéro actuel : 06 13 66 76 63 (à vérifier)
4. **WhatsApp** : Configuré avec le même numéro
5. **Responsive** : Testé sur mobile, tablet et desktop
6. **Performance** : Build optimisé, images WebP, lazy loading

## Build Status

✅ Build réussi
✅ Toutes les pages générées statiquement
✅ TypeScript sans erreurs
✅ ESLint configuré

## Prochaines Étapes Recommandées

1. Remplacer l'ID Tally.so par votre vrai formulaire
2. Vérifier le numéro de téléphone
3. Ajouter une adresse physique si applicable
4. Configurer Google Analytics
5. Ajouter les vrais liens réseaux sociaux
6. Tester sur différents navigateurs
7. Optimiser les images (déjà fait avec Next.js Image)
8. Ajouter structured data JSON-LD pour SEO local

---

Développé avec Next.js 14, TypeScript et Tailwind CSS
