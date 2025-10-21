import React from 'react'
import Pizza from '@/components/Pizza'

export const metadata = {
  title: 'Pizzas Augusto - Artisanales, Prêtes en 2 Minutes | Proxi Étang Saint-Leu 97436',
  description: 'Découvrez nos pizzas artisanales Augusto : Margherita, Reine, 3 Fromages, Montagnarde, All Pollo, Fermière. Prêtes en seulement 2 minutes au four. Livraison et à emporter à Étang Saint-Leu 97436.',
  keywords: [
    'pizzas Augusto',
    'pizza artisanale',
    'pizza Margherita',
    'pizza Reine',
    'pizza 3 Fromages',
    'pizza Montagnarde',
    'pizza All Pollo',
    'pizza Fermière',
    'pizza halal',
    'pizza prête en 2 minutes',
    'pizza livraison Étang Saint-Leu',
    'pizza à emporter',
    'Étang Saint-Leu 97436',
    'pâte artisanale',
    'sauce tomate origan',
    'mozzarella',
    'jambon',
    'basilic',
    'crème fraîche',
    'raclette',
    'champignons',
    'poulet rôti',
    'sauce BBQ'
  ],
  authors: [{ name: 'Proxi Étang Saint-Leu' }],
  creator: 'Proxi Étang Saint-Leu',
  publisher: 'Proxi Étang Saint-Leu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://proxi-etang-saint-leu.com'),
  alternates: {
    canonical: '/pizza',
  },
  openGraph: {
    title: 'Pizzas Augusto Artisanales - Prêtes en 2 Minutes | Proxi Étang Saint-Leu',
    description: 'Savourez nos pizzas artisanales Augusto : classiques et signatures, prêtes en seulement 2 minutes. Livraison et à emporter à Étang Saint-Leu 97436.',
    url: 'https://proxi-etang-saint-leu.com/pizza',
    siteName: 'Proxi Étang Saint-Leu',
    images: [
      {
        url: '/images/pizza/Margherita.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Margherita Augusto',
      },
      {
        url: '/images/pizza/Reine.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Reine Augusto',
      },
      {
        url: '/images/pizza/3-fromages.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza 3 Fromages Augusto',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizzas Augusto - Artisanales, 2 Minutes | Étang Saint-Leu',
    description: 'Pizzas artisanales Augusto prêtes en 2 minutes : Margherita, Reine, 3 Fromages et plus. Livraison à Étang Saint-Leu 97436.',
    images: ['/images/pizza/Margherita.jpg'],
    creator: '@ProxiEtangStLeu',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function pizza() {
    return (
        <div className='mt-20'>
            <Pizza />
        </div>
    )
}

