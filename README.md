# proxi Market

Site web pour **proxi Market**, votre commerce de proximité à Étang Saint-Leu, 97436 La Réunion.

Découvrez nos produits locaux : pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et bien plus.

## Technologies utilisées

- **Next.js 15** : Framework React pour le rendu côté serveur et statique.
- **Tailwind CSS v4** : Framework CSS utilitaire pour le styling.
- **shadcn/ui** : Composants UI réutilisables (Button, Sheet).
- **Lucide React** : Icônes modernes.
- **ESLint** : Linting du code.

## Installation

1. Clonez le repository :
   ```bash
   git clone https://github.com/chniak97436/proxi-market.git
   cd proxi-market
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement (pour l'intégration Facebook) :
   ```bash
   cp .env.local.example .env.local
   # Éditez .env.local avec vos tokens Facebook
   ```

## Utilisation

### Développement
Lancez le serveur de développement :
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3500](http://localhost:3500).

### Build
Pour construire l'application pour la production :
```bash
npm run build
```

### Linting
Vérifiez le code avec ESLint :
```bash
npm run lint
```

## Structure du projet

- `app/` : Pages et layout Next.js App Router.
  - `layout.js` : Layout principal avec NavBar et Footer.
  - `page.js` : Page d'accueil.
  - `about/page.js` : Page À propos.
  - `contact/page.js` : Page Contact.
  - `social/page.js` : Page Social avec intégration Facebook.
- `components/` : Composants réutilisables.
  - `NavBar.jsx` : Barre de navigation responsive avec logo cliquable et menu hamburger.
  - `Footer.jsx` : Pied de page avec liens et informations de contact.
  - `FacebookPosts.jsx` : Composant pour afficher les posts Facebook.
  - `ui/` : Composants shadcn/ui (button, sheet).
- `lib/` : Utilitaires.
- `public/` : Images et fichiers statiques.
- `next.config.mjs` : Configuration Next.js (cross-origin, etc.).

## Fonctionnalités

- **Navigation responsive** : Menu hamburger sur mobile avec effet de flou sur le background, navigation classique sur desktop.
- **Logo cliquable** : Le logo redirige vers la page d'accueil.
- **Police Roboto** : Utilisation de la police Roboto extrabold pour les liens de navigation.
- **Design responsive** : Optimisé de l'iPhone 5 au desktop.
- **Pizzas interactives** : Section pizzas avec effet hover (changement d'image et zoom) pour une expérience utilisateur améliorée.
- **SEO** : Métadonnées optimisées pour les moteurs de recherche.
- **Performances** : Score Lighthouse de 73/100 (LCP: 3.2s, FCP: 0.8s, Speed Index: 1.6s, CLS faible, TBT faible).
- **Accessibilité** : Score Lighthouse de 100/100.
- **Bonnes pratiques** : Score Lighthouse de 100/100.
- **Documents légaux** : PDFs des mentions légales, CGU et plan du site générés automatiquement.

## Déploiement

Le site peut être déployé sur **Vercel** (recommandé pour Next.js) ou tout autre plateforme supportant Node.js.

Pour Vercel :
1. Importez le repository GitHub.
2. Déployez automatiquement.
3. URL de déploiement : https://proxy-gqmokyaoe-urbaniaks-projects.vercel.app/

## Auteur

Créé par chniak97436.

## Licence

Tous droits réservés © 2024 proxi Market.
