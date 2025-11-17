"use client";
import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Resume", path: "/resume" },
  { title: "Career", path: "/career" },
  { title: "Contact", path: "/contact" },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} className="cursor-pointer" />
        ) : (
          <Menu size={24} />
        )}
      </button>

      <nav
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-primary text-primary-foreground z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full text-white uppercase px-12 space-y-8">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <p className="text-4xl font-bold">{item.title}</p>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
