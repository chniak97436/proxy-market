import { Dancing_Script, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
  title: "proxi Market",
  description: "Découvrez proxi Market à l'Étang Saint-Leu : pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et produits locaux frais. Commerce de proximité à l'Étang Saint-Leu 97436.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body
        className={`${ds.variable} ${roboto.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
