"use client";

import { triggerConceptAlert } from "@/components/ui/ConceptModal";

export default function Tickets() {
  return (
    <section id="tickets" className="py-24 bg-sand border-b-4 border-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-4">
            Secure Your Spot
          </h2>
          <p className="text-charcoal/80 font-medium max-w-2xl mx-auto">
            Gates open at 12:00 PM. We recommend arriving early to claim the best picnic spots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Early Bird */}
          <div className="bg-cream border-4 border-charcoal p-8 shadow-hard flex flex-col relative opacity-70">
            <div className="absolute -top-4 -right-4 bg-charcoal text-cream px-4 py-1 font-heading font-bold uppercase tracking-wider text-sm transform rotate-3">
              Sold Out
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase text-charcoal border-b-2 border-charcoal pb-4">
              Early Bird
            </h3>
            <div className="my-6">
              <span className="text-5xl font-heading font-bold text-terracotta">$10</span>
              <span className="text-charcoal/60 text-sm font-bold uppercase tracking-widest">
                / USD
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow font-medium text-charcoal/80">
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> General Admission
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Access to vendor market
              </li>
              <li className="flex items-start text-charcoal/40 line-through">
                <span className="mr-2">&#10007;</span> Cooler Box Pass (Requires add-on)
              </li>
            </ul>
            <button
              disabled
              className="w-full py-4 bg-charcoal/20 text-charcoal/50 border-2 border-charcoal/20 font-heading font-bold uppercase tracking-widest cursor-not-allowed"
            >
              Unavailable
            </button>
          </div>

          {/* Regular (Featured) */}
          <div className="bg-cream border-4 border-terracotta p-8 shadow-hard-hover flex flex-col relative transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-cream px-6 py-1 font-heading font-bold uppercase tracking-wider text-sm">
              Selling Fast
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase text-charcoal border-b-2 border-terracotta pb-4">
              Phase 1 / Regular
            </h3>
            <div className="my-6">
              <span className="text-5xl font-heading font-bold text-terracotta">$15</span>
              <span className="text-charcoal/60 text-sm font-bold uppercase tracking-widest">
                / USD
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow font-medium text-charcoal/80">
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> General Admission
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Access to all public areas
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> BYO Picnic Blankets
              </li>
            </ul>
            <button 
              onClick={triggerConceptAlert}
              className="w-full py-4 bg-terracotta text-cream border-2 border-terracotta font-heading font-bold uppercase tracking-widest hover:bg-charcoal hover:border-charcoal brutal-btn"
            >
              Buy Now
            </button>
          </div>

          {/* VIP */}
          <div className="bg-charcoal text-cream border-4 border-charcoal p-8 shadow-hard flex flex-col">
            <h3 className="text-3xl font-heading font-bold uppercase border-b-2 border-cream/20 pb-4">
              VIP Area
            </h3>
            <div className="my-6">
              <span className="text-5xl font-heading font-bold text-terracotta">$50</span>
              <span className="text-sand/60 text-sm font-bold uppercase tracking-widest">
                / USD
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow font-medium text-sand/80">
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Express Entry Lane
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Exclusive VIP Deck & Bar
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Premium Ablution Facilities
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-terracotta font-bold">&#10003;</span> Free Cooler Box Pass
              </li>
            </ul>
            <button 
              onClick={triggerConceptAlert}
              className="w-full py-4 bg-cream text-charcoal border-2 border-cream font-heading font-bold uppercase tracking-widest hover:bg-terracotta hover:border-terracotta hover:text-cream brutal-btn"
            >
              Buy VIP
            </button>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 border-t-2 border-charcoal/20 pt-8 text-center">
          <h4 className="font-heading uppercase font-bold text-charcoal tracking-widest mb-6">
            Accepted Payment Methods
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-heading font-bold uppercase text-lg md:text-xl text-charcoal/60">
            <span className="px-4 py-2 border-2 border-charcoal/20">EcoCash</span>
            <span className="px-4 py-2 border-2 border-charcoal/20 bg-olive text-cream border-olive">
              InnBucks
            </span>
            <span className="px-4 py-2 border-2 border-charcoal/20">Visa / Mastercard</span>
            <span className="px-4 py-2 border-2 border-charcoal/20">USD Cash (Outlets)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
