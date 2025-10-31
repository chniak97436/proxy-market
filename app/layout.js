import { Dancing_Script, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MenuProvider } from "../components/MenuContext";
import MobileMessage from "../components/MobileMessage";
import Script from "next/script";

const ds = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400","600","700","800","900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Proxi Étang Saint-Leu",
  description: "Découvrez proxi à Étang Saint-Leu: pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et produits locaux frais. Commerce de proximité à Étang Saint-Leu 97436.",
  icons: {
    icon: [
      { url: '/images/logo/Logo-proxi.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/Logo-proxi.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://ubkdev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Proxi Étang Saint-Leu - Pizzas Augusto, PMU, Commerce de Proximité',
    description: 'Pizzas artisanales Augusto prêtes en 2 minutes, PMU, tabacs, gaz et produits frais à Étang Saint-Leu 97436. Découvrez notre équipe et nos services.',
    url: 'https://ubkdev.com',
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
    nocache: false,
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <body
        className={`${ds.variable} ${roboto.variable} antialiased w-screen bg-black`}
      >
        <MobileMessage />
        <MenuProvider>
          <NavBar />
          <main className="w-screen duration-300 bg-black transition-filter">{children}</main>
          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
