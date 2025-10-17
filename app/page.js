import Image from "next/image";
import Pizza from "@/components/Pizza";
export default function Home() {
  return (
    <div className="w-full">
      <Image
        src="/images/vitrine.jpg"
        alt="proxi market étang st Leu 97436"
        className="w-full h-[80vh] object-cover"
        width={1920}
        height={1080}
        priority/>
      <div className="w-full p-6 mx-auto mb-6 shadow-lg bviolet border border-[#b0ca0b]">
        <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-2xl lg:text-3xl">Bienvenue chez proxi Étang Saint-Leu</h1>
        <p className="mb-8 text-sm text-center text-white md:text-base lg:text-lg">Découvrez nos pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et produits locaux.</p>
      </div>
      <div className="w-full p-6 mx-auto m-0 shadow-lg bviolet border border-[#b0ca0b]">
        <h2 className="mb-4 text-xl font-bold text-center text-white md:text-2xl lg:text-3xl">Nos Spécialités</h2>
      </div>
      <Pizza/>
    </div>
  );
}
