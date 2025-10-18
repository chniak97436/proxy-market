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
        priority />
      <div className="w-full p-6 mx-auto mb-6 shadow-lg bviolet border border-[#b0ca0b]">
        <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-2xl lg:text-3xl">Bienvenue chez proxi Étang Saint-Leu</h1>
        <p className="mb-8 text-sm text-center text-white md:text-base lg:text-lg">Découvrez nos pizzas artisanales Augusto, glaces à l'italienne, pains bouchons et produits locaux.</p>
      </div>
      <div className="flex justify-center mb-6  flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg   bviolet border border-[#b0ca0b]">
          <h2 className="items-center text-lg font-semibold text-white md:text-2xl lg:text-3xl">Notre Équipe :</h2>
          <p className="font-semibold text-white text-md">Notre équipe sera ravis de vous accueillir dans votre commerce Proxi Étang St-Leu.</p>
        </div>
        <div className="w-[100%] p-2  m-0 shadow-lg bg-white border-t border-r border-b border-[#b0ca0b]">
          <Image src="/images/equipe.jpg" alt="personel proxi étang st-leu 97436 width={1920}
        height={1080}
        priority "width={1920}
            height={1080}
            priority />
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg  bviolet border border-[#b0ca0b]">
          <h2 className="text-lg font-semibold text-center text-white text-items-center md:text-2xl lg:text-3xl">Ce que nous vous proposons</h2>
        </div>
      </div>
      <div className="flex justify-center mb-6 flex-row w-[100%] md:flex-col md:text-center">
        <div className="w-[100%] p-2  m-0 shadow-lg bg-white border-t border-r border-b border-[#b0ca0b]">
          <Image src="/images/pmu-interieur.jpg" alt="PMU Proxi étang st-leu 97436"
            width={1920}
            height={1080}
            priority />
        </div>
        <div className="w-[100%] p-2  m-0 shadow-lg  bviolet border border-[#b0ca0b]">
          <Image src="/images/logo/pmu.png" alt="PMU Proxi étang st-leu 97436"
            className="rounded-lg"
            width={1920}
            height={1080}
            priority />
          <p className="mt-4 font-semibold text-center text-white text-md">Venez jouer vos paris hippiques dans votre Proxi Etang Saint Leu</p>
        </div>
      </div>
    </div>
  );
}
