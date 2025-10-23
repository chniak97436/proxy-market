import FacebookPosts from '@/components/FacebookPosts';

export const metadata = {
  title: 'Réseaux Sociaux - Proxi Étang Saint-Leu | Actualités et Événements Locaux',
  description: 'Suivez Proxi Étang Saint-Leu sur les réseaux sociaux : découvrez nos actualités, promotions, événements locaux et interactions avec la communauté de Saint-Leu 97436.',
  keywords: [
    'réseaux sociaux Proxi Étang Saint-Leu',
    'Facebook Proxi Étang Saint-Leu',
    'actualités commerce proximité',
    'promotions locales Saint-Leu',
    'événements Étang Saint-Leu',
    'communauté Saint-Leu 97436',
    'posts Facebook Proxi',
    'interactions sociales',
    'nouvelles locales',
    'engagement communautaire'
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
    canonical: '/social',
  },
  openGraph: {
    title: 'Réseaux Sociaux - Proxi Étang Saint-Leu',
    description: 'Découvrez nos actualités et événements sur les réseaux sociaux à Étang Saint-Leu 97436.',
    url: 'https://proxi-etang-saint-leu.com/social',
    siteName: 'Proxi Étang Saint-Leu',
    images: [
      {
        url: '/images/vitrine.jpg',
        width: 1200,
        height: 630,
        alt: 'Réseaux Sociaux Proxi Étang Saint-Leu',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Réseaux Sociaux - Proxi Étang Saint-Leu',
    description: 'Actualités et événements locaux à Étang Saint-Leu 97436.',
    images: ['/images/vitrine.jpg'],
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

export default function Social() {
  return (
    <div className='mt-14'>
      <h1>Nos Réseaux Sociaux</h1>
      <FacebookPosts />
    </div>
  );
}
