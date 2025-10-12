# Guide de Déploiement sur Vercel

Ce guide explique comment déployer votre application Next.js sur Vercel.

## Prérequis

- Un compte Vercel (gratuit) : [https://vercel.com](https://vercel.com)
- Votre projet Next.js poussé sur un dépôt Git (GitHub, GitLab, ou Bitbucket)

## Étapes de Déploiement

### 1. Connecter votre dépôt Git à Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous.
2. Cliquez sur "New Project".
3. Importez votre dépôt Git en sélectionnant votre fournisseur (GitHub, etc.) et en autorisant l'accès si nécessaire.
4. Sélectionnez le dépôt contenant votre projet Next.js.

### 2. Configurer le projet

1. Vercel détectera automatiquement que c'est un projet Next.js.
2. Vérifiez les paramètres :
   - **Framework Preset** : Next.js (devrait être détecté automatiquement)
   - **Root Directory** : Laissez vide si le projet est à la racine, sinon spécifiez le chemin (par exemple `app` si votre code est dans un sous-dossier)
   - **Build Command** : `npm run build` ou `yarn build` (défaut pour Next.js)
   - **Output Directory** : `.next` (défaut pour Next.js)
   - **Install Command** : `npm install` ou `yarn install`

### 3. Variables d'environnement (si nécessaire)

Si votre application utilise des variables d'environnement :
1. Dans les paramètres du projet sur Vercel, allez dans "Environment Variables".
2. Ajoutez vos variables (par exemple, clés API, secrets de base de données).

### 4. Déployer

1. Cliquez sur "Deploy".
2. Vercel construira et déploiera votre application automatiquement.
3. Une fois terminé, vous recevrez une URL de déploiement (par exemple, `https://votre-projet.vercel.app`).

## Commandes locales pour tester

Avant de déployer, assurez-vous que votre application fonctionne localement :

```bash
npm run dev
```

Puis ouvrez [http://localhost:3500](http://localhost:3500) dans votre navigateur.

## Mise à jour du déploiement

Chaque push sur la branche principale (généralement `main` ou `master`) déclenchera un nouveau déploiement automatique.

## Dépannage

- **Erreur de build** : Vérifiez les logs de build sur Vercel et assurez-vous que toutes les dépendances sont dans `package.json`.
- **Variables d'environnement manquantes** : Ajoutez-les dans les paramètres du projet sur Vercel.
- **Problème de routage** : Assurez-vous que vos pages sont dans le dossier `app/` (App Router) ou `pages/` (Pages Router).

Pour plus d'informations, consultez la [documentation officielle de Vercel pour Next.js](https://vercel.com/docs/frameworks/nextjs).
