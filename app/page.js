import Image from "next/image";
import Caroussel from "@/components/Caroussel";

export const metadata = {
  title: 'Proxi Étang Saint-Leu - Commerce de Proximité, Pizzas Augusto, PMU, Tabacs | Étang Saint-Leu 97436',
  description: 'Votre commerce de proximité à Étang Saint-Leu 97436 : pizzas artisanales Augusto prêtes en 2 minutes, PMU, tabacs, gaz, glaces italiennes, pains bouchons, produits frais locaux. Services complets pour les habitants de Saint-Leu.',
  keywords: [
    'Proxi Étang Saint-Leu',
    'commerce proximité Étang Saint-Leu',
    'pizzas Augusto Étang Saint-Leu',
    'pizza artisanale livraison',
    'PMU Étang Saint-Leu',
    'tabacs Étang Saint-Leu',
    'gaz Étang Saint-Leu',
    'glaces italiennes Étang Saint-Leu',
    'pains bouchons Étang Saint-Leu',
    'produits frais locaux',
    'Étang Saint-Leu 97436',
    'pizza livraison Saint-Leu',
    'point chaud proximité',
    'application Phenix anti gaspillage',
    'viennoiseries fraîches',
    'magasin alimentation générale',
    'services locaux Saint-Leu',
    'commerce familial Étang Saint-Leu',
    'produits du quotidien',
    'épicerie proximité'
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
    canonical: '/',
  },
  openGraph: {
    title: 'Proxi Étang Saint-Leu - Pizzas Augusto, PMU, Commerce de Proximité',
    description: 'Pizzas artisanales Augusto prêtes en 2 minutes, PMU, tabacs, gaz et produits frais à Étang Saint-Leu 97436. Découvrez notre équipe et nos services.',
    url: 'https://proxi-etang-saint-leu.com',
    siteName: 'Proxi Étang Saint-Leu',
    images: [
      {
        url: '/images/vitrine.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitrine Proxi Étang Saint-Leu',
      },
      {
        url: '/images/pizza-page.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizzas Augusto Proxi Étang Saint-Leu',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proxi Étang Saint-Leu - Pizzas Augusto, PMU',
    description: 'Pizzas artisanales Augusto, PMU, tabacs et produits frais à Étang Saint-Leu 97436.',
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

export default function Home() {
  return (
    <div className="w-full">
      <Image
        src="/images/vitrine.jpg"
        alt="Proxi étang st Leu 97436"
        className="w-full h-[80vh] object-cover"
        width={1920}
        height={1080}
        priority />
      <div className="w-full p-6 mx-auto mb-6 shadow-lg bviolet border border-[#b0ca0b]">
        <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-2xl lg:text-3xl">Bienvenue chez proxi Étang Saint-Leu</h1>
        <p className="mb-8 text-sm text-center text-white md:text-base lg:text-lg">Commerce de proximité, produits d’alimentation générale, PMU, tabacs, gaz, point chaud, pizza Augusto.</p>
      </div>
      <div className="flex justify-center mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg bg-white border-t border-r border-b border-[#b0ca0b]">
          <Image src="/images/equipe.jpg" alt="personel proxi étang st-leu 97436 width={1920}
        height={1080}
        priority "width={1920}
            height={1080}
            priority />
        </div>
        <div className="w-[100%] p-2  m-0 shadow-lg   bviolet border border-[#b0ca0b]">
          <h2 className="items-center font-semibold text-white text-md ">Notre Équipe :</h2>
          <p className="font-semibold text-white text-md">Notre équipe sera ravis de vous accueillir dans votre commerce Proxi Étang St-Leu.</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg  bviolet border border-[#b0ca0b]">
          <h2 className="text-lg font-semibold text-center text-white text-items-center md:text-2xl lg:text-3xl">Ce que nous vous proposons</h2>
        </div>
      </div>
      <div className="flex justify-center mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg   bviolet border border-[#b0ca0b]">
          <p className="font-semibold text-white text-md">Venez découvrir ces délicieuses pizza Augusto, artisanales, PRÊTES EN SEULEMENT 2 MINUTES AU FOUR !
            </p>
        </div>
        <div className="w-[100%] p-2  m-0 shadow-lg bg-white border-t border-r border-b border-[#b0ca0b]">
          <Image src="/images/pizza-page.jpg" alt="Pizza Augusto proxi étang st-leu 97436"
          className="mt-[8%]"
            width={1920}
            height={1080}
            priority />
        </div>
      </div>
      <div className="flex justify-center mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg bg-white border-t border-r border-b border-[#b0ca0b]">
          <Image src="/images/pmu-interieur.jpg" alt="PMU Proxi étang st-leu 97436"
            width={1920}
            height={1080}
            priority />
        </div>
        <div className="w-[100%] p-2  m-0 shadow-lg  bviolet border border-[#b0ca0b]">
          <Image src="/images/logo/pmu.png" alt="PMU Proxi étang st-leu 97436"
            className="rounded-lg"
            width={1920}
            height={1080}
            priority />
          <p className="mt-4 font-semibold text-center text-white text-md">Venez jouer vos paris hippiques dans votre Proxi Etang Saint Leu</p>
        </div>
      </div>
      <div className="flex justify-center mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg  bviolet border border-[#b0ca0b]">
          <Image src="/images/logo/phenix-svg.png" alt="application Phenix proxi étang st-leu 97436"
            className="rounded-lg"
            width={1020}
            height={680}
            priority />
          <p className="mt-4 font-semibold text-center text-white text-md">En fin de journée, lorsqu’il nous reste des viennoiseries invendues du jour, nous les proposerons sous forme de panier à shopper sur l’<span className="text-lg font-semibold uppercase">application Phenix</span> ! A prix réduit dans une démarche anti gaspille . N’hésitez pas à télécharger l’application !
            N’hésitez pas à nous ajouter en commerçant favoris pour ne pas rater les offres !
          </p>
        </div>
      </div>
      <Caroussel/>
    </div>
  );
}
