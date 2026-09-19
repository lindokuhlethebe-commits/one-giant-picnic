"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for fonts to load for accurate measurement
    document.fonts.ready.then(() => {
      // Simulate initial loading time
      setTimeout(() => {
        const navLogo = document.getElementById("nav-logo");
        if (!navLogo || !logoRef.current || !loaderRef.current) {
          // Fallback if nav is missing
          setIsVisible(false);
          onComplete();
          return;
        }

        // Get target coordinates in nav
        const targetRect = navLogo.getBoundingClientRect();
        
        // Get start coordinates
        const startRect = logoRef.current.getBoundingClientRect();
        const computedNavStyle = window.getComputedStyle(navLogo);

        // Remove the translate(-50%, -50%) before animating to absolute coordinates
        gsap.set(logoRef.current, {
          x: 0,
          y: 0,
          top: startRect.top,
          left: startRect.left,
        });

        // Create animation timeline
        const tl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
            onComplete();
          },
        });

        tl.to(logoRef.current, {
          top: targetRect.top,
          left: targetRect.left,
          fontSize: computedNavStyle.fontSize,
          color: "#222222",
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        // Fade out the loader background simultaneously
        tl.to(loaderRef.current, {
          backgroundColor: "transparent",
          duration: 1,
          ease: "power2.inOut",
        }, 0);

      }, 1000);
    });
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-cream z-[100] flex items-center justify-center pointer-events-none"
    >
      <div
        ref={logoRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-bold text-charcoal text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase whitespace-nowrap"
      >
        One Giant Picnic
      </div>
    </div>
  );
}
