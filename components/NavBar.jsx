"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Proxy Market</div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:underline">
                {item.name}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="hover:underline" onClick={() => setOpen(false)}>
                      <span>{item.name}</span>
                    </a>
                  ))}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      setOpen(false);
                    }}
                    className="justify-start"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                    {theme === "dark" ? "Mode clair" : "Mode sombre"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
