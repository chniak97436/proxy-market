"use client";
import Image from "next/image";


import Link from "next/link";

export default function NavBar() {
  const navItems = [
    { name: "À propos", href: "/about" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ];

  return (
      <nav className="border-b bviolet tvert">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="w-[12%] h-[28%] md:w-[10%] md:h-[40%] lg:w-[10%] lg:h-[50%] relative"><Image src="/images/logo/Logo-proxi.png" alt="proxi market étang st Leu 97436" fill /></Link>
            <div className="hidden md:flex justify-end items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-white px-2 transition duration-300 font-roboto font-extrabold">
                  {item.name}
                </Link>
              ))}

            </div>
            <div className="md:hidden">
              <div className="flex  ">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="hover:text-white  px-2 transition duration-300 font-roboto font-extrabold">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}
