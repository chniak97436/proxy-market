# Roadmap - Proxy Market

## Tâches prioritaires

### 0. Intégration Facebook
- [x] Installer axios et créer la structure de base (page Social, composant FacebookPosts, lien dans NavBar).
- [x] Créer le fichier .env.local.example pour les variables d'environnement Facebook.
- [ ] Configurer l'app Facebook et obtenir les tokens (suivre FACEBOOK_INTEGRATION.md).
- [ ] Implémenter le code dans FacebookPosts.jsx pour récupérer et afficher les posts.
- [ ] Ajouter la gestion des commentaires si nécessaire.
- [ ] Tester l'intégration et gérer la sécurité des tokens.

### 1. Contenu des pages
- [ ] Remplir la page À propos (`app/about/page.js`) avec l'histoire du commerce, mission, équipe.
- [ ] Compléter la page Contact (`app/contact/page.js`) avec formulaire de contact, carte Google Maps, horaires d'ouverture.

### 2. Pages produits
- [ ] Créer une page Produits (`app/products/page.js`) ou sections sur la page d'accueil pour présenter :
  - Pizzas artisanales Augusto
  - Glaces à l'italienne
  - Pains bouchons
  - Produits locaux
- [ ] Ajouter des images haute qualité pour chaque produit (utiliser les images dans `public/images/`).

### 3. Fonctionnalités
- [ ] Implémenter un formulaire de contact fonctionnel (avec validation et envoi d'email via API ou service tiers comme EmailJS).
- [ ] Ajouter une section Menu avec les prix et descriptions.
- [ ] Intégrer les horaires d'ouverture et informations de contact dans le Footer et une page dédiée.

### 4. Optimisations
- [ ] Améliorer le SEO : ajouter des meta tags, structured data pour le commerce local.
- [ ] Optimiser les images (compression, formats modernes comme WebP).
- [ ] Ajouter des animations subtiles avec Framer Motion ou CSS pour améliorer l'expérience utilisateur.

### 5. Tests et déploiement
- [ ] Tester la responsivité sur différents appareils (iPhone 5, iPad, desktop).
- [ ] Vérifier l'accessibilité (contraste, navigation au clavier).
- [ ] Déployer sur Vercel ou Netlify.
- [ ] Configurer un domaine personnalisé si nécessaire.

### 6. Fonctionnalités avancées (optionnelles)
- [ ] Ajouter un système de réservation en ligne pour les pizzas.
- [ ] Intégrer des avis clients (Google Reviews ou widget).
- [ ] Ajouter un blog pour des recettes ou actualités locales.
- [ ] Implémenter le multilingue (français/créole) si pertinent.

## Notes
- Prioriser les tâches 1-3 pour un MVP fonctionnel.
- Utiliser les composants shadcn/ui pour maintenir la cohérence.
- Tester régulièrement avec `npm run dev` et corriger les erreurs ESLint.
