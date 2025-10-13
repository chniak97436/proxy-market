"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const navItems = [
    { name: "À propos", href: "/about" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b shadow-md bviolet tvert w-full fixed top-0 left-0 z-50">
      <div className="w-full mx-auto px-4">
        <div className="h-20 grid grid-cols-3 items-center">
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
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-ds text-center">
              Étang Saint-Leu
            </h1>
          </div>
          <div className="hidden md:flex justify-end items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg md:text-lg lg:text-xl hover:text-white px-3 py-2 transition-colors duration-300 font-roboto font-semibold whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center p-1 cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >              
              <span className="w-full h-0.5 bvert mt-1"></span>
              <span className="w-full h-0.5 bvert mt-1"></span>
              <span className="w-full h-0.5 bvert mt-1"></span>
            </button>
            <div className={`absolute top-20 right-0 h-[100vh] w-[33%] bviolet shadow-md p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex flex-col space-y-2 h-full">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-md tvert hover:text-white px-2 py-1 transition-colors duration-300 font-roboto font-bold whitespace-nowrap"
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
