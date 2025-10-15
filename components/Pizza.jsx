"use client";
import Image from "next/image";

export default function Pizza() {
  const pizza = [
    { nom: "MARGHERITA", src: "/images/pizza/Margherita.jpg", alt: "Pizza Augusto Margherita", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella et basilic.", width: 600, height: 612 },
    { nom: "REINE", src: "/images/pizza/Reine.jpg", alt: "Pizza Augusto Reine", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, jambon et basilic.", width: 600, height: 612 },
    { nom: "3 FROMAGES", src: "/images/pizza/3-fromages.jpg", alt: "Pizza Augusto 3 Fromages", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, emmental, chêvre et basilic.", width: 600, height: 612 },
  ]
  const pizzaHover = [
    { nom: "MARGHERITA", src: "/images/pizza-hover/margherita.jpg", alt: "Pizza Augusto Margherita", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella et basilic.", width: 600, height: 612 },
    { nom: "REINE", src: "/images/pizza-hover/reine.jpg", alt: "Pizza Augusto Reine", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, jambon et basilic.", width: 600, height: 612 },
    { nom: "3 FROMAGES", src: "/images/pizza-hover/3-fromages.jpg", alt: "Pizza Augusto 3 Fromages", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, emmental,chêvre et basilic.", width: 600, height: 612 },
  ];
  const signatures = [
    { nom: "MONTAGNARDE", src: "/images/pizza/montagnarde.jpg", alt: "Pizza Augusto montagnarde", description: "Pâte artisanale, creme faiche, jambon cru, raclette,champignons et basilic.", width: 600, height: 612 },
    { nom: "ALLLL POLLO", src: "/images/pizza/all-pollo.jpg", alt: "Pizza Augusto all pollo", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, émincés de poulet roti°, oignons rouge, sauce BBQ et basilic.", width: 600, height: 612 },
    { nom: "FERMIERE", src: "/images/pizza/fermiere.jpg", alt: "Pizza Augusto fermiere", description: "Pâte artisanale, creme faiche, mozzarella, émincés de poulet, champignons, oignons et basilic.", width: 600, height: 612 },
  ];
  return (
    <div className="p-10 bg-black">
      <Image width="208" height="104" className="pt-8 mx-auto" src="https://augusto-pizza.fr/wp-content/themes/augustoTheme/img/logo-augusto-white.svg" alt="Logo augusto" />
      <div className="w-[100%] text-center mb-6 mx-auto">
        <p className="text-sm text-white">BIEN PLUS QU'UNE PIZZA</p>
        <div className="flex flex-row justify-center w-full mx-auto mt-2 ">
          <span className="bg-blue-900 w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
          <span className="bg-white w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
          <span className="bg-red-600 w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
        </div>
        <div className="m-2 mx-auto overflow-hidden rounded-full w-52 h-52">
          <Image width="208" height="208" className="object-cover object-[120%_100%] w-full h-full" src="https://augusto-pizza.fr/wp-content/uploads/2025/02/nos-pizzas-savoureuses.jpg" alt="augusto" />
        </div>
      </div>

      <div className="flex justify-center w-full mx-auto my-6 border-t border-b border-white md:w-[80%] h-auto iems-center">
        <h2 className="text-lg text-white center font--bold text">LES PIZZAS CLASSIQUES</h2>
      </div>
      <div className="w-screen py-10 -mx-10 text-white shadow-lg bviolet">
        <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-3 md:grid-cols-3">
          {pizza.map((item, index) => (
            <div key={index} className="relative border border-[#b0ca0b] overflow-hidden rounded-lg shadow-lg group">
              <div className="ease-out ransition-transform duration-600 will-change-transform group-hover:scale-105">
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg group-hover:opacity-0" />
                <Image src={pizzaHover[index].src} alt={pizzaHover[index].alt} width={pizzaHover[index].width} height={pizzaHover[index].height} className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg opacity-0 group-hover:opacity-100" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{item.nom}</h3>
                <p className="px-2 my-2 text-sm">{item.description}</p>
              </div>
              <span className="text-xs">°Halal</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mx-auto my-6 border-t border-b border-white md:w-[80%] h-auto iems-center">
        <h2 className="text-lg text-white center font--bold text">LES PIZZAS SIGNATURES</h2>
      </div>
      <div className="w-screen py-10 -mx-10 text-white shadow-lg bviolet">
        <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-3 md:grid-cols-3">
          {signatures.map((item, index) => (
            <div key={index} className="relative border border-[#b0ca0b] overflow-hidden rounded-lg shadow-lg group">
              <div className="ease-out ransition-transform duration-600 will-change-transform group-hover:scale-105">
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg group-hover:opacity-0" />
                <Image src={pizzaHover[index].src} alt={pizzaHover[index].alt} width={pizzaHover[index].width} height={pizzaHover[index].height} className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg opacity-0 group-hover:opacity-100" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{item.nom}</h3>
                <p className="px-2 my-2 text-sm">{item.description}</p>
              </div>
              <span className="text-xs">°Halal</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

