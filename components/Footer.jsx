export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Proxy Market</h3>
            <p className="text-sm text-muted-foreground">
              Votre commerce de proximité à Étang Saint-Leu, 97436 La Réunion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Accueil</a></li>
              <li><a href="/about" className="hover:underline">À propos</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Étang Saint-Leu, 97436<br />
              La Réunion<br />
              Téléphone: +262 XX XX XX XX
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Proxy Market. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
