import Image from "next/image";
import Link from "next/link";

export default function MerchSection() {
  return (
    <section id="merch" className="py-24 bg-cream border-b-4 border-charcoal overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-charcoal/10 pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-2">
              Cop Some <span className="text-terracotta">Merch</span>
            </h2>
            <p className="font-medium text-charcoal/70 max-w-xl">
              Don&apos;t pull up looking like a local. Secure the official One Giant Picnic gear before it sells out. Limited run only.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-block px-8 py-4 bg-terracotta text-cream border-2 border-terracotta font-heading font-bold uppercase tracking-widest hover:bg-charcoal hover:border-charcoal brutal-btn"
          >
            Enter Shop
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Item 1 */}
          <div className="group relative border-4 border-charcoal bg-white p-4 shadow-hard transition-transform hover:-translate-y-2">
            <div className="relative aspect-square mb-4 bg-white">
              <Image src="/images/merch_tshirt.jpg" alt="Vintage T-Shirt" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="flex justify-between items-end font-heading font-bold uppercase tracking-widest">
              <span className="text-charcoal text-lg">OGP Vintage Tee</span>
              <span className="text-terracotta">$35</span>
            </div>
          </div>
          {/* Item 2 */}
          <div className="group relative border-4 border-charcoal bg-white p-4 shadow-hard transition-transform hover:-translate-y-2 md:translate-y-8">
            <div className="relative aspect-square mb-4 bg-white">
              <Image src="/images/merch_hoodie.jpg" alt="Terracotta Hoodie" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="flex justify-between items-end font-heading font-bold uppercase tracking-widest">
              <span className="text-charcoal text-lg">Heavy Hoodie</span>
              <span className="text-terracotta">$65</span>
            </div>
          </div>
          {/* Item 3 */}
          <div className="group relative border-4 border-charcoal bg-white p-4 shadow-hard transition-transform hover:-translate-y-2">
            <div className="relative aspect-square mb-4 bg-white">
              <Image src="/images/merch_flask.jpg" alt="OGP Flask" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="flex justify-between items-end font-heading font-bold uppercase tracking-widest">
              <span className="text-charcoal text-lg">Survival Flask</span>
              <span className="text-terracotta">$40</span>
            </div>
          </div>
          {/* Item 4 */}
          <div className="group relative border-4 border-charcoal bg-white p-4 shadow-hard transition-transform hover:-translate-y-2 md:translate-y-8">
            <div className="absolute -top-4 -right-4 bg-charcoal text-cream px-4 py-1 font-heading font-bold uppercase tracking-wider text-xs transform rotate-3 z-10">
              Selling Fast
            </div>
            <div className="relative aspect-square mb-4 bg-white">
              <Image src="/images/merch_hat.jpg" alt="Dad Cap" fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
            <div className="flex justify-between items-end font-heading font-bold uppercase tracking-widest">
              <span className="text-charcoal text-lg">Dad Cap</span>
              <span className="text-terracotta">$25</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link
            href="/shop"
            className="w-full inline-block px-8 py-4 bg-terracotta text-cream border-2 border-terracotta font-heading font-bold uppercase tracking-widest brutal-btn"
          >
            Enter Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
