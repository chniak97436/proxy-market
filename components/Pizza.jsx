import Image from "next/image";

export default  function Pizza() {
    const pizza = [
        {nom :"MARGHERITA",src:"/images/pizza/Margherita.jpg",alt:"Pizza Augusto Margherita",width:600,height:612},
        {nom :"REINE",src:"/images/pizza/Reine.jpg",alt:"Pizza Augusto Reine",width:600,height:612},
        {nom :"3 FROMAGES",src:"/images/pizza/3-fromages.jpg",alt:"Pizza Augusto 3 Fromages",width:600,height:612},
    ]
    const pizzaHover = [
    {nom :"MARGHERITA",src:"/images/pizza-hover/margherita.jpg",alt:"Pizza Augusto Margherita",width:600,height:612},
        {nom :"REINE",src:"/images/pizza-hover/reine.jpg",alt:"Pizza Augusto Reine",width:600,height:612},
        {nom :"3 FROMAGES",src:"/images/pizza-hover/3-fromages.jpg",alt:"Pizza Augusto 3 Fromages",width:600,height:612},
  ];
  return (
    <div className="py-10 m-10 text-white rounded-lg shadow-lg bviolet">
      <h2 className="mb-8 text-3xl font-bold text-center">Nos Pizzas Augusto</h2>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3"> 
        {pizza.map((item, index) => (
          <div key={index} className="relative border border-[#b0ca0b] overflow-hidden rounded-lg shadow-lg group">
            <div className="transition-transform ease-out duration-600 will-change-transform group-hover:scale-105">
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg group-hover:opacity-0" />
              <Image src={pizzaHover[index].src} alt={pizzaHover[index].alt} width={pizzaHover[index].width} height={pizzaHover[index].height} className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-out rounded-lg shadow-lg opacity-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{item.nom}</h3>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

