"use client";
import Image from "next/image";

export default function Pizza() {
  const isHalal = "°Halal";
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
    { nom: "MONTAGNARDE", src: "/images/pizza/montargnarde.jpg", alt: "Pizza Augusto montagnarde", description: "Pâte artisanale, creme faiche, jambon cru, raclette,champignons et basilic.", width: 600, height: 612 },
    { nom: "ALL POLLO", src: "/images/pizza/all-Pollo.jpg", alt: "Pizza Augusto all pollo", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, émincés de poulet roti°, oignons rouge, sauce BBQ et basilic.", width: 600, height: 612, halal: isHalal },
    { nom: "FERMIERE", src: "/images/pizza/fermiere.jpg", alt: "Pizza Augusto fermiere", description: "Pâte artisanale, creme faiche, mozzarella, émincés de poulet, champignons, oignons et basilic.", width: 600, height: 612 },
  ];
  const signaturesHover = [
    { nom: "MONTAGNARDE", src: "/images/pizza-hover/montagnarde.jpg", alt: "Pizza Augusto montagnarde", description: "Pâte artisanale, creme faiche, jambon cru, raclette,champignons et basilic.", width: 600, height: 612 },
    { nom: "ALLLL POLLO", src: "/images/pizza-hover/all-pollo.jpg", alt: "Pizza Augusto all pollo", description: "Pâte artisanale, sauce tomate à l'origan, mozzarella, émincés de poulet roti°, oignons rouge, sauce BBQ et basilic.", width: 600, height: 612, },
    { nom: "FERMIERE", src: "/images/pizza-hover/fermiere.jpg", alt: "Pizza Augusto fermiere", description: "Pâte artisanale, creme faiche, mozzarella, émincés de poulet, champignons, oignons et basilic.", width: 600, height: 612 },
  ];
  return (
    <div className="w-screen bg-black">
      <div className="w-full mx-auto bg-black">
        <Image width="208" height="104" className="pt-8 mx-auto" src="https://augusto-pizza.fr/wp-content/themes/augustoTheme/img/logo-augusto-white.svg" alt="Logo pizza Augusto" />
        <div className="w-full mx-auto mb-6 text-center">
          <p className="text-sm text-white">BIEN PLUS QU'UNE PIZZA</p>
          <div className="flex flex-row justify-center w-full mx-auto mt-2 ">
            <span className="bg-blue-900 w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
            <span className="bg-white w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
            <span className="bg-red-600 w-[7%] h-1 md:w-[2%] md:h-1.5"></span>
          </div>
          <div className="m-2 mx-auto overflow-hidden rounded-full w-52 h-52">
            <Image width="208" height="208" className="object-cover object-[120%_100%] w-full h-full" src="https://augusto-pizza.fr/wp-content/uploads/2025/02/nos-pizzas-savoureuses.jpg" alt="Pizza Augusto" />
          </div>
        </div>

        <div className="flex justify-center w-full mx-auto my-6 border-t border-b border-white md:w-[80%] h-auto iems-center">
          <h2 className="text-lg text-white center font--bold text">LES PIZZAS CLASSIQUES</h2>
        </div>
        <div className="w-screen py-10 text-white shadow-lg bviolet">
          <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-3 md:grid-cols-3">
            {pizza.map((item, index) => (
              <div key={index} className="relative border border-[#b0ca0b] overflow-hidden  shadow-lg group">
                <div className="ease-out ransition-transform duration-600 will-change-transform group-hover:scale-105">
                  <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto transition-opacity duration-500 ease-out shadow-lg group-hover:opacity-0" />
                  <Image src={pizzaHover[index].src} alt={pizzaHover[index].alt} width={pizzaHover[index].width} height={pizzaHover[index].height} className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-out shadow-lg opacity-0 group-hover:opacity-100" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{item.nom}</h3>
                  <p className="px-2 my-2 text-sm">{item.description}</p>
                </div>
                <span className="text-xs">{item.halal}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full mx-auto my-6 border-t border-b border-white md:w-[80%] h-auto iems-center">
          <h2 className="text-lg text-white center font--bold text">LES PIZZAS SIGNATURES</h2>
        </div>
        <div className="w-screen py-10 text-white shadow-lg bviolet">
          <div className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-3 md:grid-cols-3">
            {signatures.map((item, index) => (
              <div key={index} className="relative border border-[#b0ca0b] overflow-hidden  shadow-lg group">
                <div className="ease-out ransition-transform duration-600 will-change-transform group-hover:scale-105">
                  <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto transition-opacity duration-500 ease-out shadow-lg group-hover:opacity-0" />
                  <Image src={signaturesHover[index].src} alt={signaturesHover[index].alt} width={signaturesHover[index].width} height={signaturesHover[index].height} className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-out shadow-lg opacity-0 group-hover:opacity-100" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{item.nom}</h3>
                  <p className="px-2 my-2 text-sm">{item.description}</p>
                </div>
                <span className="ml-1 text-xs">{item.halal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center w-screen mt-6 md:justify-center ">
          <div className=" text-white border-t border-b border-r w-[30%] md:w-[30%] borde-white">
            <p className="flex justify-start  ml-2 text-[50%] font-semibold md:text-lg">PRÉTE EN 2 MIN</p>
          </div>
          <div className="items-center text-white border-t border-b w-[60%] md:w-[30%] borde-white">
            <p className="flex justify-end mr-2  text-[50%] font-semibold md:text-lg">PIZZA ARTISANALES CUITES SUR PLACE</p>
          </div>
        </div>
        <div>
          <div className="relative flex flex-row items-center justify-center mb-6 md:justify-center ">
            <div className="flex items-center text-white h-5 border-r border-b w-[60%] md:w-[30%] borde-white">
              <p className="flex justify-start ml-2  text-[53%] font-semibold md:text-lg">CROUSTILLANTES</p>
            </div>
            <div className="absolute flex items-center justify-center p-1.5 w-2.5 h-2.5 bg-white rounded-full left-[63.5%]  md:w-6 md:h-6">
              <span className="text-[50%] black md:text-lg">&</span>
            </div>
            <div className="flex items-center justify-end text-white h-5 border-b  w-[30%] md:w-[30%] borde-white">
              <p className="text-right   mr-2 text-[53%] font-semibold md:text-lg">SAVOUREUSES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
