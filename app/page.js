import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image
        src="/images/vitrine.jpg"
        alt="proxi market étang st Leu 97436"
        className="w-full h-[80vh] object-cover"
        width={1920}
        height={1080}
        priority/>
      <div className="container mx-auto p-6 bviolet mt-6 rounded-md md:rounded-lg lg:rounded-xl shadow-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tvert text-center mb-4">Bienvenue chez proxi Étang Saint-Leu</h1>
        <p className="text-sm md:text-base lg:text-lg text-center text-white mb-8">Découvrez nos pizzas artisanales Augusto, glaces à l&apos;italienne, pains bouchons et produits locaux.</p>
      </div>
    </>
  );
}
