import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import { ConceptButton } from "@/components/ui/ConceptAction";

export const metadata = {
  title: "Shop | One Giant Picnic",
  description: "Official One Giant Picnic Merch.",
};

const merchItems = [
  { id: 1, name: "OGP Vintage Tee", price: "$35", image: "/images/merch_tshirt.jpg", tag: "Best Seller" },
  { id: 2, name: "Heavy Hoodie", price: "$65", image: "/images/merch_hoodie.jpg", tag: "" },
  { id: 3, name: "Survival Flask", price: "$40", image: "/images/merch_flask.jpg", tag: "" },
  { id: 4, name: "Dad Cap", price: "$25", image: "/images/merch_hat.jpg", tag: "Selling Fast" },
  { id: 5, name: "Canvas Tote", price: "$30", image: "/images/merch_tote.jpg", tag: "" },
];

export default function ShopPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-sand text-charcoal pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-charcoal pb-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-4">
                The <span className="text-terracotta">Supply</span> Drop
              </h1>
              <p className="font-medium text-charcoal/80 text-xl max-w-2xl">
                Official capsule collection for the Bulawayo Edition. High quality blanks, heavy weight cotton, and brutalist graphics. Secure the bag before it&apos;s gone.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <span className="font-heading uppercase font-bold tracking-widest text-sm border-2 border-charcoal px-4 py-2">All</span>
              <span className="font-heading uppercase font-bold tracking-widest text-sm border-2 border-charcoal/20 px-4 py-2 hover:border-charcoal transition-colors cursor-pointer opacity-50">Apparel</span>
              <span className="font-heading uppercase font-bold tracking-widest text-sm border-2 border-charcoal/20 px-4 py-2 hover:border-charcoal transition-colors cursor-pointer opacity-50">Accessories</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div key={item.id} className="group relative border-4 border-charcoal bg-white p-6 shadow-hard transition-transform hover:-translate-y-2">
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-terracotta text-cream px-4 py-1 font-heading font-bold uppercase tracking-wider text-xs z-10">
                    {item.tag}
                  </div>
                )}
                
                <div className="relative aspect-square mb-6 bg-white overflow-hidden border-2 border-charcoal/10">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                    unoptimized 
                  />
                </div>
                
                <div className="border-t-2 border-charcoal/10 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-heading font-bold uppercase tracking-widest text-charcoal">{item.name}</h3>
                    <span className="text-2xl font-heading font-bold text-terracotta">{item.price}</span>
                  </div>
                  
                  <ConceptButton className="w-full py-4 bg-charcoal text-cream border-2 border-charcoal font-heading font-bold uppercase tracking-widest text-sm hover:bg-terracotta hover:border-terracotta brutal-btn">
                    Add to Cart
                  </ConceptButton>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </main>
    </PageWrapper>
  );
}
