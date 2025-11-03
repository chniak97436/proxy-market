import Image from "next/image";
import { PhoneIcon, MapPinIcon, FacebookIcon } from "@heroicons/react/24/outline";



export default function Footer() {
  return (
    <footer className="text-white bg-[radial-gradient(circle_at_bottom,_#801c54_0%,_#801c54_90%,_#b0ca0b_100%)] border-t border-t-[#b0ca0b]">
      <div className="container px-2 py-2 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-row items-center justify-between ">

            <Image
              src="/images/logo/phenix-svg.png"
              alt="Logo application Phenix Proxi étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain rounded-full"
            />
            <Image
              src="/images/logo/pmu.png"
              alt="Logo PMU Proxi étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain rounded-full"
            />
            <Image
              src="https://augusto-pizza.fr/wp-content/themes/augustoTheme/img/logo-augusto-white.svg"
              alt="Logo pizza Augusto"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <a href="tel:0263009983" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-white">
                <PhoneIcon className="w-4 h-4" />
                <span>02 63 00 99 83</span>
              </a>
            </div>
            <div className="flex items-center mt-1 space-x-2 ">
              <a href="https://www.google.com/maps/dir/?api=1&destination=715+A+Chemin+Dubuisson,+Saint-Leu,+La+Réunion" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-white">
                <MapPinIcon className="w-4 h-4" />
                <span>715 A Chemin Dubuisson, Saint-Leu, La Réunion</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 text-sm text-center border-t border-t-[#b0ca0b] text-muted-foreground">
          © 2025 Proxi Étang St-Leu. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
