"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ConceptLink } from "@/components/ui/ConceptAction";

interface NavigationProps {
  isLoaded: boolean;
}

export default function Navigation({ isLoaded }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className="fixed w-full top-0 z-50 bg-transparent transition-all duration-300"
        id="navbar"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left: Side Logo */}
            <div className="flex-1 flex items-center justify-start">
              <Link
                href="/"
                className={`transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <img
                  id="nav-logo"
                  src="/logo.png"
                  alt="One Giant Picnic Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Right: Hamburger Menu Button */}
            <div className="flex-1 flex items-center justify-end">
              <button
                className="text-cream bg-terracotta focus:outline-none p-2 border-2 border-terracotta hover:bg-cream hover:text-terracotta transition-colors shadow-hard-sm"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal/50 z-[60] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Menu (Occupies half viewport on large screens, full on mobile) */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full md:w-1/2 bg-cream border-l-4 border-charcoal shadow-[-8px_0_0_0_rgba(34,34,34,1)] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 sm:p-8 flex justify-between items-center border-b-4 border-charcoal">
          <span className="font-heading font-bold text-charcoal text-2xl tracking-tighter uppercase">Menu</span>
          <button
            className="text-charcoal focus:outline-none p-2 border-2 border-charcoal hover:bg-terracotta hover:border-terracotta hover:text-cream transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col py-12 px-8 sm:px-16 space-y-6 font-heading uppercase font-bold text-4xl sm:text-6xl tracking-tighter">
          {[
            { name: "The Event", href: "/#about" },
            { name: "Lineup", href: "/#lineup" },
            { name: "Experience", href: "/#experience" },
            { name: "Schedule", href: "/#schedule" },
            { name: "Venue", href: "/#venue" },
            { name: "Gallery", href: "/#gallery" },
            { name: "Shop", href: "/shop" },
            { name: "FAQ", href: "/#faq" },
            { name: "Contact", href: "/#contact" },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block w-fit text-charcoal hover:bg-charcoal hover:text-cream px-4 py-2 -ml-4 transition-colors duration-300 transform ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div
            className={`pt-8 mt-auto transform transition-all duration-500 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <ConceptLink
              className="inline-block px-8 py-4 bg-terracotta text-cream border-4 border-terracotta hover:bg-charcoal hover:border-charcoal brutal-btn text-2xl sm:text-3xl tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Tickets
            </ConceptLink>
          </div>
        </div>
      </div>
    </>
  );
}
