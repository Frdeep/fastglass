# 📄 Sections — Fastglass75

## 1. Hero Section

### Structure

```html
<section class="hero">
  <div class="hero-content">
    <div class="hero-badge">
      <span class="badge-icon">✓</span>
      Agréé toutes assurances
    </div>
    <h1>
      Remplacement de vitrage
      <span class="hero-highlight">à domicile</span>
      en Île-de-France
    </h1>
    <p class="hero-subtitle">
      Intervention rapide, 0€ de franchise et un cadeau jusqu'à 300€. 
      Service professionnel garanti.
    </p>
    <div class="hero-cta">
      <a href="#contact" class="btn-primary btn-lg">
        Prendre rendez-vous
        <svg><!-- chevron --></svg>
      </a>
      <a href="tel:0123456789" class="btn-secondary">
        <svg><!-- phone --></svg>
        01 23 45 67 89
      </a>
    </div>
    <div class="hero-trust">
      <div class="trust-item">
        <strong>500+</strong>
        <span>Interventions/mois</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <strong>4.9/5</strong>
        <span>Note clients</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <strong>24h</strong>
        <span>Délai intervention</span>
      </div>
    </div>
  </div>
  <div class="hero-visual">
    <img src="hero-car.jpg" alt="Technicien remplaçant un pare-brise">
    <div class="hero-floating-card card-gift">
      <div class="gift-icon">🎁</div>
      <div>
        <strong>Cadeau offert</strong>
        <span>Jusqu'à 300€</span>
      </div>
    </div>
  </div>
</section>
```

### Contenu

| Élément | Texte |
|---------|-------|
| Badge | "✓ Agréé toutes assurances" |
| Titre | "Remplacement de vitrage **à domicile** en Île-de-France" |
| Sous-titre | "Intervention rapide, 0€ de franchise et un cadeau jusqu'à 300€. Service professionnel garanti." |
| CTA primaire | "Prendre rendez-vous" |
| CTA secondaire | "01 23 45 67 89" |

---

## 2. Avantages (3 Cards)

### Structure

```html
<section class="section-avantages">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Nos engagements</span>
      <h2>Pourquoi choisir Fastglass75 ?</h2>
    </div>
    <div class="avantages-grid">
      <!-- Card 1 -->
      <div class="card-avantage">
        <div class="avantage-icon">💰</div>
        <span class="avantage-badge">Garanti</span>
        <h3>0€ à payer</h3>
        <p>Prise en charge totale par votre assurance. Aucun frais caché.</p>
      </div>
      <!-- Card 2 -->
      <div class="card-avantage card-featured">
        <div class="avantage-icon">🎁</div>
        <span class="avantage-badge badge-gift">Exclusif</span>
        <h3>Cadeau 300€</h3>
        <p>Un cadeau au choix offert pour toute intervention.</p>
      </div>
      <!-- Card 3 -->
      <div class="card-avantage">
        <div class="avantage-icon">🏠</div>
        <span class="avantage-badge">Pratique</span>
        <h3>À domicile</h3>
        <p>On vient chez vous, au bureau ou où vous voulez.</p>
      </div>
    </div>
  </div>
</section>
```

### Contenu des 3 Cards

| # | Icône | Badge | Titre | Description |
|---|-------|-------|-------|-------------|
| 1 | 💰 | Garanti | 0€ à payer | Prise en charge totale par votre assurance. Aucun frais caché. |
| 2 | 🎁 | Exclusif | Cadeau 300€ | Un cadeau au choix offert pour toute intervention. |
| 3 | 🏠 | Pratique | À domicile | On vient chez vous, au bureau ou où vous voulez. |

---

## 3. Services (3 Cards)

### Structure

```html
<section id="services" class="section-services">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Nos services</span>
      <h2>Tous types de vitrages</h2>
      <p>Remplacement professionnel, pièces certifiées</p>
    </div>
    <div class="services-grid">
      <!-- Cards -->
    </div>
  </div>
</section>
```

### Contenu des 3 Cards

| # | Image | Tag | Titre | Description |
|---|-------|-----|-------|-------------|
| 1 | pare-brise.jpg | Le plus demandé | Pare-brise | Remplacement complet de votre pare-brise avec calibrage des capteurs ADAS si nécessaire. |
| 2 | vitre-laterale.jpg | Toutes marques | Vitre latérale | Vitres avant et arrière, électriques ou manuelles. Intervention en moins de 2h. |
| 3 | lunette-arriere.jpg | Expertise | Lunette arrière | Remplacement avec dégivrage intégré. Travail soigné et garanti. |

---

## 4. Comment ça marche (3 Steps)

### Structure

```html
<section class="section-process">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Simple et rapide</span>
      <h2>Comment ça marche ?</h2>
    </div>
    <div class="process-timeline">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Prenez rendez-vous</h3>
          <p>Par téléphone ou formulaire, choisissez le créneau qui vous convient.</p>
        </div>
      </div>
      <div class="process-connector"></div>
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>On intervient</h3>
          <p>Notre technicien vient chez vous avec tout le matériel nécessaire.</p>
        </div>
      </div>
      <div class="process-connector"></div>
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Recevez votre cadeau</h3>
          <p>Choisissez votre cadeau jusqu'à 300€ parmi notre sélection.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Contenu des 3 Étapes

| # | Titre | Description |
|---|-------|-------------|
| 1 | Prenez rendez-vous | Par téléphone ou formulaire, choisissez le créneau qui vous convient. |
| 2 | On intervient | Notre technicien vient chez vous avec tout le matériel nécessaire. |
| 3 | Recevez votre cadeau | Choisissez votre cadeau jusqu'à 300€ parmi notre sélection. |

---

## 5. Zones d'intervention

### Structure

```html
<section id="zones" class="section-zones">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Île-de-France</span>
      <h2>Zones d'intervention</h2>
      <p>Nous intervenons dans toute la région parisienne</p>
    </div>
    <div class="zones-grid">
      <div class="zone-card">
        <span class="zone-code">75</span>
        <span class="zone-name">Paris</span>
      </div>
      <div class="zone-card">
        <span class="zone-code">92</span>
        <span class="zone-name">Hauts-de-Seine</span>
      </div>
      <!-- etc. -->
    </div>
    <div class="zones-cta">
      <p>Vous n'êtes pas sûr d'être dans notre zone ?</p>
      <a href="tel:0123456789" class="btn-secondary">
        Appelez-nous
      </a>
    </div>
  </div>
</section>
```

### Liste des Départements

| Code | Nom |
|------|-----|
| 75 | Paris |
| 77 | Seine-et-Marne |
| 78 | Yvelines |
| 91 | Essonne |
| 92 | Hauts-de-Seine |
| 93 | Seine-Saint-Denis |
| 94 | Val-de-Marne |
| 95 | Val-d'Oise |

---

## 6. Témoignages (3 Cards)

### Contenu

| # | Note | Texte | Nom | Lieu |
|---|------|-------|-----|------|
| 1 | ★★★★★ | "Service impeccable ! Technicien ponctuel et professionnel. Mon pare-brise a été remplacé en moins d'une heure. Et j'ai reçu mon cadeau le lendemain !" | Marie D. | Paris 15e |
| 2 | ★★★★★ | "Vraiment 0€ à débourser, j'étais sceptique mais c'est vrai ! Ils se sont occupés de tout avec mon assurance. Je recommande à 100%." | Thomas L. | Boulogne |
| 3 | ★★★★★ | "Intervention à domicile super pratique. Le technicien était sympa et le travail est nickel. Merci Fastglass75 !" | Sophie M. | Créteil |

---

## 7. FAQ (6 Items)

### Contenu

| # | Question | Réponse |
|---|----------|---------|
| 1 | Est-ce vraiment gratuit ? | Oui ! Si vous avez une assurance auto avec bris de glace, nous prenons en charge le remplacement. Vous n'avez rien à payer. |
| 2 | Comment fonctionne le cadeau ? | Après l'intervention, vous choisissez un cadeau parmi notre sélection (high-tech, électroménager, bon d'achat...). Il est expédié sous 48h. |
| 3 | Combien de temps dure l'intervention ? | En moyenne 1 à 2 heures selon le type de vitrage et la complexité (calibrage ADAS, etc.). |
| 4 | Travaillez-vous avec toutes les assurances ? | Oui, nous sommes agréés par toutes les compagnies d'assurance (Axa, Maif, Macif, Matmut, etc.). |
| 5 | Quelles zones couvrez-vous ? | Toute l'Île-de-France : Paris et les départements 77, 78, 91, 92, 93, 94, 95. |
| 6 | Les pièces sont-elles d'origine ? | Nous utilisons des vitrages certifiés, équivalents aux pièces d'origine. Garantie 2 ans. |

---

## 8. CTA Final

### Structure

```html
<section class="section-cta">
  <div class="container">
    <div class="cta-card">
      <div class="cta-content">
        <span class="cta-badge">🎁 Offre limitée</span>
        <h2>Prêt à remplacer votre vitrage ?</h2>
        <p>Bénéficiez de notre offre exclusive : 0€ à payer + cadeau jusqu'à 300€</p>
        <div class="cta-buttons">
          <a href="#contact" class="btn-primary btn-lg">
            Prendre rendez-vous
          </a>
          <a href="tel:0123456789" class="btn-ghost">
            ou appelez le 01 23 45 67 89
          </a>
        </div>
      </div>
      <div class="cta-visual">
        <img src="gift-box.png" alt="">
      </div>
    </div>
  </div>
</section>
```

---

## 9. Formulaire Contact

### Champs

| Champ | Type | Placeholder | Required |
|-------|------|-------------|----------|
| Nom | text | Votre nom complet | ✓ |
| Téléphone | tel | 06 12 34 56 78 | ✓ |
| Email | email | votre@email.com | ✗ |
| Ville | text | Paris, Boulogne... | ✓ |
| Type de vitrage | select | Pare-brise / Vitre / Lunette | ✓ |
| Message | textarea | Décrivez votre besoin... | ✗ |

---

## 10. Footer

### Structure

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="footer-logo">Fastglass75</a>
        <p>Votre spécialiste du remplacement de vitrage automobile à domicile en Île-de-France.</p>
        <div class="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Navigation</h4>
        <a href="#services">Services</a>
        <a href="#zones">Zones</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-links">
        <h4>Légal</h4>
        <a href="#">Mentions légales</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">CGV</a>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <a href="tel:0123456789">01 23 45 67 89</a>
        <a href="mailto:contact@fastglass75.fr">contact@fastglass75.fr</a>
        <p>Lun-Sam : 8h-20h</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Fastglass75. Tous droits réservés.</p>
    </div>
  </div>
</footer>
```
