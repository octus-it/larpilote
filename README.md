# Larpilote

Site vitrine pour un service de conciergerie digitale : réponse aux voyageurs
et acheteurs, gestion des annonces (Airbnb, Booking.com), mise en relation et
suivi client — construit avec React + Vite + Tailwind CSS + Framer Motion.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Générer la version de production

```bash
npm run build
```

Les fichiers prêts à déployer sont générés dans `dist/`. Ce dossier peut être
déposé tel quel sur Vercel, Netlify, ou tout hébergement statique.

## Structure

```
src/
  data.js              contenu du site (textes, tarifs, témoignages, images)
  App.jsx              assemble toutes les sections
  index.css            styles globaux, texture papier, style "ticket"
  components/
    Nav.jsx            navigation avec effet au scroll
    Hero.jsx           section d'accueil, image plein cadre + animations
    Stats.jsx          compteurs animés
    Marquee.jsx        bandeau défilant des canaux gérés
    Services.jsx       grille de services avec images
    Gallery.jsx        biens pilotés, mise en page masonry
    Process.jsx        étapes "comment ça marche"
    Pricing.jsx        tarifs
    Testimonials.jsx   carrousel de témoignages
    FAQ.jsx            accordéon
    Contact.jsx        formulaire de contact
    Footer.jsx
```

## Images

Toutes les images utilisées (hero, services, galerie, avatars) sont des
**images de démonstration** (Picsum Photos / Pravatar), choisies uniquement
pour montrer la mise en page. Avant la mise en ligne, remplacez les URLs dans
`src/data.js` par vos vraies photos de biens et, si besoin, des photos
d'équipe — en respectant les droits d'usage de chaque image.

## Ce qui reste à brancher

- **Formulaire de contact** (`src/components/Contact.jsx`) : fonctionne côté
  visuel mais n'envoie encore rien. À relier à un service d'envoi d'email
  (Resend, EmailJS) ou à une route sur votre backend NestJS.
- **Contenu réel** : tarifs, témoignages, statistiques et biens en exemple
  sont des textes de démonstration dans `src/data.js`.
- **Nom de domaine et déploiement** : le projet est prêt à être déployé une
  fois buildé (`npm run build`).
