# proxi Market

Site web pour **proxi Market**, votre commerce de proximité à Étang Saint-Leu, 97436 La Réunion.

Découvrez nos produits locaux : pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et bien plus.

## Technologies utilisées

- **Next.js 15** : Framework React pour le rendu côté serveur et statique.
- **Tailwind CSS v4** : Framework CSS utilitaire pour le styling.
- **next-themes** : Gestion des thèmes sombre/clair.
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

## Utilisation

### Développement
Lancez le serveur de développement :
```bash
npm run dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

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
  - `layout.js` : Layout principal avec ThemeProvider, NavBar et Footer.
  - `page.js` : Page d'accueil.
  - `about/page.js` : Page À propos.
  - `contact/page.js` : Page Contact.
- `components/` : Composants réutilisables.
  - `NavBar.jsx` : Barre de navigation responsive avec thème et menu hamburger.
  - `Footer.jsx` : Pied de page avec liens et informations de contact.
  - `ui/` : Composants shadcn/ui (button, sheet).
- `lib/` : Utilitaires.
- `public/` : Images et fichiers statiques.

## Fonctionnalités

- **Navigation responsive** : Menu hamburger sur mobile, navigation classique sur desktop.
- **Thème sombre/clair** : Bascule entre les modes avec icônes Soleil/Lune.
- **Design responsive** : Optimisé de l'iPhone 5 au desktop.
- **SEO** : Métadonnées optimisées pour les moteurs de recherche.

## Déploiement

Le site peut être déployé sur **Vercel** (recommandé pour Next.js) ou tout autre plateforme supportant Node.js.

Pour Vercel :
1. Importez le repository GitHub.
2. Déployez automatiquement.

## Auteur

Créé par chniak97436.

## Licence

Tous droits réservés © 2024 proxi Market.
