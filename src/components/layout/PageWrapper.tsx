"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/ui/Loader";
import Navigation from "@/components/navigation/Navigation";
import ConceptModal from "@/components/ui/ConceptModal";

gsap.registerPlugin(ScrollTrigger);

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;
    
    // Global Scroll Animations for all sections
    const sections = containerRef.current.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id === "home") return; // Skip Hero
      
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <div 
        ref={containerRef}
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <Navigation isLoaded={isLoaded} />
        <ConceptModal />
        {children}
      </div>
    </>
  );
}
