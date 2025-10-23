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
