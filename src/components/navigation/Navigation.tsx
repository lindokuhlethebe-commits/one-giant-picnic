"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavigationProps {
  isLoaded: boolean;
}

export default function Navigation({ isLoaded }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className="fixed w-full top-0 z-50 bg-cream border-b-4 border-charcoal transition-all duration-300"
        id="navbar"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="#home"
                id="nav-logo"
                className={`font-heading font-bold text-charcoal text-2xl tracking-tighter uppercase transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                One Giant Picnic
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden xl:flex space-x-8 items-center font-heading uppercase font-medium tracking-wide text-sm">
              <Link href="#about" className="hover-underline">
                The Event
              </Link>
              <Link href="#lineup" className="hover-underline">
                Lineup
              </Link>
              <Link href="#experience" className="hover-underline">
                Experience
              </Link>
              <Link href="#schedule" className="hover-underline">
                Schedule
              </Link>
              <Link href="#venue" className="hover-underline">
                Venue
              </Link>
              <Link href="#gallery" className="hover-underline">
                Gallery
              </Link>
              <Link href="#faq" className="hover-underline">
                FAQ
              </Link>
              <Link href="#contact" className="hover-underline">
                Contact
              </Link>
              <Link
                href="#tickets"
                className="px-6 py-2 bg-charcoal text-cream border-2 border-charcoal hover:bg-terracotta hover:border-terracotta transition-colors shadow-hard-sm"
              >
                Buy Tickets
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                className="text-charcoal focus:outline-none p-2 border-2 border-charcoal bg-cream hover:bg-charcoal hover:text-cream transition-colors"
                id="mobile-menu-btn"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div
          className={`xl:hidden bg-cream border-t-2 border-charcoal border-b-4 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4 font-heading uppercase font-medium">
            <Link href="#about" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              The Event
            </Link>
            <Link href="#lineup" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              Lineup
            </Link>
            <Link href="#tickets" className="block py-2 text-terracotta font-bold" onClick={() => setIsMobileMenuOpen(false)}>
              Tickets
            </Link>
            <Link href="#experience" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#schedule" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              Schedule
            </Link>
            <Link href="#venue" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              Venue
            </Link>
            <Link href="#gallery" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="#faq" className="block py-2 border-b border-charcoal/20" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
