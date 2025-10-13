export default function Footer() {
  return (
    <footer className="text-white border-t bviolet">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">proxi Market</h3>
            <p className="text-sm text-muted-foreground">
              Votre commerce de proximité à Étang Saint-Leu, 97436 La Réunion.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Accueil</a></li>
              <li><a href="/about" className="hover:underline">À propos</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Étang Saint-Leu, 97436<br />
              La Réunion<br />
              Téléphone: +262 XX XX XX XX
            </p>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t text-muted-foreground">
          © 2025 proxi Market. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
