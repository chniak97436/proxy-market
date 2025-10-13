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
      <div className="w-full p-6 mx-auto mt-6 mb-6 shadow-lg bviolet">
        <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">Bienvenue chez proxi Étang Saint-Leu</h1>
        <p className="mb-8 text-sm text-center text-white md:text-base lg:text-lg">Découvrez nos pizzas artisanales Augusto, glaces à l&apos;italienne, pains bouchons et produits locaux.</p>
      </div>
    </>
  );
}
