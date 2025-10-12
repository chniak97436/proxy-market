import { Dancing_Script, Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Proxy Market",
  description: "Découvrez Proxy Market à Étang Saint-Leu : pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et produits locaux frais. Commerce de proximité à La Réunion 97436.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body
        className={`${dancingScript.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
