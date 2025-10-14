import Image from "next/image";



export default function Footer() {
  return (
    <footer className="text-white bg-[radial-gradient(circle_at_bottom,_#801c54_0%,_#801c54_90%,_#b0ca0b_100%)] border-t border-t-[#b0ca0b]">
      <div className="container px-5 py-1 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">            
            <Image
              src="/images/logo/Logo-proxi.png"
              alt="proxi market étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Votre commerce de proximité à Étang Saint-Leu.
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
        <div className="pt-8 mt-8 text-sm text-center border-t border-t-[#b0ca0b] text-muted-foreground">
          © 2025 proxi Market. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
