"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { MenuContext } from "./MenuContext";

export default function NavBar() {
  const navItems = [
    { name: "À propos", href: "/about" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ];

  const { isOpen, setIsOpen } = useContext(MenuContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('blur-background');
    } else {
      document.body.classList.remove('blur-background');
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b shadow-md bviolet tvert">
      <div className="w-full px-4 mx-auto">
        <div className="grid items-center h-20 grid-cols-3">
          <Link href="/" className="flex items-center justify-start">
            <Image
              src="/images/logo/Logo-proxi.png"
              alt="proxi market étang st Leu 97436"
              width={80}
              height={60}
              className="object-contain"
            />
          </Link>
          <div className="flex justify-center">
            <h1 className="text-xl font-bold text-center text-white md:text-2xl lg:text-3xl font-ds">
              Étang Saint-Leu
            </h1>
          </div>
          <div className="items-center justify-end hidden space-x-4 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="pr-2 text-lg font-semibold transition-colors duration-300  md:text-lg lg:text-xl hover:text-white font-roboto whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-end md:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-8 h-8 p-1 cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="w-full h-0.5 bvert mt-1"></span>
              <span className="w-full h-0.5 bvert mt-1"></span>
              <span className="w-full h-0.5 bvert mt-1"></span>
            </button>
            <div className={`absolute top-20 right-0 h-[100vh] w-[33%] bviolet shadow-md p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex flex-col h-full space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-2 py-1 font-bold transition-colors duration-300 text-md text-white hover:text-[#b0ca0b] font-roboto whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
