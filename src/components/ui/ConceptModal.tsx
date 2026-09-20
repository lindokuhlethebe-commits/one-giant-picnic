"use client";

import { useEffect, useState } from "react";

// Helper function to trigger the modal from any button/link
export const triggerConceptAlert = (e?: React.MouseEvent) => {
  e?.preventDefault();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-concept-modal"));
  }
};

export default function ConceptModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-concept-modal", handleOpen);
    return () => window.removeEventListener("open-concept-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)} 
      />
      <div className="relative bg-cream border-4 border-charcoal p-8 md:p-10 max-w-lg w-full shadow-[12px_12px_0_0_rgba(34,34,34,1)] animate-in fade-in zoom-in duration-200">
        <div className="absolute -top-5 -right-5 bg-terracotta text-cream px-4 py-1 font-heading font-bold uppercase tracking-widest text-sm transform rotate-6 border-2 border-charcoal">
          Hold Up
        </div>
        
        <h3 className="text-4xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-4">
          My Bad...
        </h3>
        
        <div className="font-medium text-charcoal/80 space-y-4 mb-8">
          <p>
            Bestie, this button isn&apos;t actually going anywhere. 😭
          </p>
          <p>
            This whole site is literally just a concept project right now. We&apos;re serving looks and UI, but the backend is giving nothing. 
          </p>
          <p>
            Check back later when we actually secure the bag and build the real thing.
          </p>
        </div>
        
        <button
          onClick={() => setIsOpen(false)}
          className="w-full py-4 bg-charcoal text-cream border-4 border-charcoal font-heading font-bold uppercase tracking-widest hover:bg-terracotta hover:border-terracotta transition-colors"
        >
          I Understand The Assignment
        </button>
      </div>
    </div>
  );
}
