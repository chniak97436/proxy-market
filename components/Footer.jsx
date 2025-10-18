import Image from "next/image";



export default function Footer() {
  return (
    <footer className="text-white bg-[radial-gradient(circle_at_bottom,_#801c54_0%,_#801c54_90%,_#b0ca0b_100%)] border-t border-t-[#b0ca0b]">
      <div className="container px-5 py-2 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-row items-center justify-between ">

            <Image
              src="/images/logo/phenix-svg.png"
              alt="proxi market étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain rounded-full"
            />
            <Image
              src="/images/logo/pmu.png"
              alt="proxi market étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain rounded-full"
            />
            <Image
              src="https://augusto-pizza.fr/wp-content/themes/augustoTheme/img/logo-augusto-black.svg"
              alt="proxi market étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <h4 className="mb-1 font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              715 A Chemin Dubuisson, Saint-Leu, La Réunion</p>
            <p>
              Téléphone: 02 63 00 99 83
            </p>
          </div>
        </div>
        <div className="pt-4 mt-4 text-sm text-center border-t border-t-[#b0ca0b] text-muted-foreground">
          © 2025 proxi Market. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
