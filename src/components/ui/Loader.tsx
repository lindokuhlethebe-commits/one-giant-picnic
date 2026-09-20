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
    // Wait for a brief moment to show the loading screen, then fade out
    const timer = setTimeout(() => {
      if (!loaderRef.current) return;
      
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          onComplete();
        }
      });
      
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-cream z-[100] flex items-center justify-center pointer-events-none"
    >
      <img
        ref={logoRef as any}
        src="/logo.png"
        alt="One Giant Picnic Logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 object-contain"
      />
    </div>
  );
}
