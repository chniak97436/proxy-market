# Intégration de l'API Facebook pour Afficher les Posts et Commentaires

Ce guide détaille comment intégrer l'API Facebook Graph pour afficher les posts d'une page Facebook ou les commentaires sur votre site web Next.js.

## Prérequis

### 1. Compte Développeur Facebook
- Créez un compte sur [Facebook for Developers](https://developers.facebook.com/).
- Vérifiez votre compte avec une carte de crédit ou numéro de téléphone.

### 2. Créer une Application Facebook
1. Allez dans "My Apps" > "Create App".
2. Choisissez "Consumer" ou "Business" selon votre usage.
3. Donnez un nom à votre app (ex: "Proxy Market Website").
4. Notez l'**App ID** (visible dans les paramètres de l'app).

### 3. Obtenir un Access Token
1. Dans votre app, allez dans "Tools & Support" > "Graph API Explorer".
2. Sélectionnez votre app.
3. Cliquez sur "Generate Access Token".
4. Choisissez les permissions nécessaires :
   - `pages_read_engagement` : Pour lire les posts de la page
   - `pages_show_list` : Pour lister les pages
   - `pages_read_user_content` : Pour les commentaires
5. Copiez le **User Access Token** (valide 1 heure) ou générez un **Page Access Token** pour une page spécifique.

### 4. ID de la Page Facebook
- Trouvez l'ID de votre page Facebook via [Find My Facebook ID](https://findmyfbid.com/).
- Ou utilisez l'API : `GET /me/accounts` pour lister vos pages.

## Configuration dans Next.js

### 1. Variables d'Environnement
Ajoutez dans un fichier `.env.local` (ne pas commiter) :
```
NEXT_PUBLIC_FACEBOOK_APP_ID=votre_app_id
FACEBOOK_ACCESS_TOKEN=votre_access_token
FACEBOOK_PAGE_ID=votre_page_id
```

### 2. Installation des Dépendances
```bash
npm install axios
```

## Implémentation

### Afficher les Posts d'une Page

Créez un composant `FacebookPosts.jsx` :

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID}/posts`,
          {
            params: {
              access_token: process.env.FACEBOOK_ACCESS_TOKEN,
              fields: 'id,message,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true)',
              limit: 10
            }
          }
        );
        setPosts(response.data.data);
      } catch (err) {
        setError('Erreur lors du chargement des posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="facebook-posts">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          {post.full_picture && (
            <img src={post.full_picture} alt="Post image" />
          )}
          <p>{post.message}</p>
          <div className="post-meta">
            <span>{new Date(post.created_time).toLocaleDateString('fr-FR')}</span>
            <span>{post.likes?.summary?.total_count || 0} likes</span>
            <span>{post.comments?.summary?.total_count || 0} commentaires</span>
          </div>
          <a href={post.permalink_url} target="_blank" rel="noopener noreferrer">
            Voir sur Facebook
          </a>
        </div>
      ))}
    </div>
  );
};

export default FacebookPosts;
```

### Afficher les Commentaires d'un Post Spécifique

Pour afficher les commentaires d'un post particulier :

```jsx
const FacebookComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v18.0/${postId}/comments`,
          {
            params: {
              access_token: process.env.FACEBOOK_ACCESS_TOKEN,
              fields: 'id,message,created_time,from{name,picture}',
              limit: 50
            }
          }
        );
        setComments(response.data.data);
      } catch (err) {
        console.error('Erreur commentaires:', err);
      }
    };

    if (postId) fetchComments();
  }, [postId]);

  return (
    <div className="comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.from.picture.data.url} alt={comment.from.name} />
          <div>
            <strong>{comment.from.name}</strong>
            <p>{comment.message}</p>
            <span>{new Date(comment.created_time).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
```

## Utilisation dans les Pages

Ajoutez le composant dans une page, par exemple `app/social/page.js` :

```jsx
import FacebookPosts from '@/components/FacebookPosts';

export default function SocialPage() {
  return (
    <div>
      <h1>Nos Posts Facebook</h1>
      <FacebookPosts />
    </div>
  );
}
```

## Sécurité et Bonnes Pratiques

### 1. Gestion des Tokens
- **Ne jamais exposer les tokens côté client** : Utilisez des API routes Next.js pour les appels serveur.
- Exemple d'API route (`app/api/facebook/posts/route.js`) :

```js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v18.0/${process.env.FACEBOOK_PAGE_ID}/posts`,
      {
        params: {
          access_token: process.env.FACEBOOK_ACCESS_TOKEN,
          fields: 'id,message,created_time,full_picture',
          limit: 5
        }
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur API' }, { status: 500 });
  }
}
```

Puis dans le composant :
```jsx
useEffect(() => {
  fetch('/api/facebook/posts')
    .then(res => res.json())
    .then(data => setPosts(data.data));
}, []);
```

### 2. Gestion des Erreurs
- Gérez les erreurs d'API (token expiré, permissions insuffisantes).
- Affichez des messages d'erreur user-friendly.

### 3. Rate Limiting
- Facebook limite les appels API. Cachez les données si possible.
- Utilisez `next/cache` pour la mise en cache.

### 4. Permissions et Confidentialité
- Demandez seulement les permissions nécessaires.
- Informez les utilisateurs sur l'utilisation des données Facebook.

## Dépannage

### Token Expiré
- Régénérez le token dans Graph API Explorer.
- Pour la production, utilisez des tokens de longue durée ou un système de refresh.

### Erreur de Permissions
- Vérifiez que votre app a les bonnes permissions.
- Assurez-vous que vous êtes administrateur de la page.

### CORS Issues
- Si vous faites des appels côté client, configurez CORS dans votre app Facebook.

## Ressources Supplémentaires

- [Documentation Facebook Graph API](https://developers.facebook.com/docs/graph-api/)
- [Guide de démarrage rapide](https://developers.facebook.com/docs/facebook-login/quick-start/)
- [Référence des champs Post](https://developers.facebook.com/docs/graph-api/reference/post/)

## Coûts

- L'API Facebook est gratuite pour un usage personnel/modéré.
- Pour un usage élevé, consultez les [prix de l'API Marketing](https://developers.facebook.com/docs/marketing-api/).
