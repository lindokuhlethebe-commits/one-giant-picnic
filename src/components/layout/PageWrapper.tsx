"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import Navigation from "@/components/navigation/Navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      
      <div
        id="main-content"
        className={`transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation isLoaded={isLoaded} />
        {children}
      </div>
    </>
  );
}
