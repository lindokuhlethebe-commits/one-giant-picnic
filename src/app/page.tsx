import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/hero/Hero";
import About from "@/components/event/About";
import Lineup from "@/components/artists/Lineup";
import Tickets from "@/components/event/Tickets";
import Experience from "@/components/experience/Experience";
import Programme from "@/components/programme/Programme";
import Gallery from "@/components/gallery/Gallery";
import MerchSection from "@/components/shop/MerchSection";
import FAQSection from "@/components/faq/FAQSection";
import { ConceptLink, ConceptButton } from "@/components/ui/ConceptAction";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Hero />
        <About />
        <Lineup />
        <Tickets />
        <Experience />
        <Programme />
        <Gallery />
        <MerchSection />
        <FAQSection />
        
        {/* Contact & Vendors */}
        <section id="contact" className="bg-charcoal text-cream border-b-4 border-charcoal relative">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-charcoal border-l-4 border-r-4 border-charcoal">
            
            {/* Contact Info */}
            <div className="p-8 md:p-16 bg-olive">
              <h2 className="text-5xl font-heading font-bold uppercase tracking-tighter mb-8 text-cream shadow-black drop-shadow-md">Get In Touch</h2>
              <p className="font-medium text-cream/90 mb-12 max-w-md">
                Have a specific question not covered in the FAQ? Want to discuss a brand partnership or sponsorship? Reach out to our team directly.
              </p>
              
              <div className="space-y-8 font-heading text-xl uppercase font-bold tracking-wider">
                <div className="flex items-center group">
                  <div className="w-12 h-12 border-4 border-cream flex items-center justify-center mr-6 group-hover:bg-cream group-hover:text-olive transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <ConceptLink className="hover-underline">hello@onegiantpicnic.com</ConceptLink>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 border-4 border-cream flex items-center justify-center mr-6 group-hover:bg-cream group-hover:text-olive transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <ConceptLink className="hover-underline">+263 77 000 0000</ConceptLink>
                </div>

                <div className="flex items-center gap-6 mt-12 pt-12 border-t-4 border-cream/20">
                  <ConceptLink className="text-cream hover:text-terracotta transition-transform hover:-translate-y-1" aria-label="Instagram">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </ConceptLink>
                  <ConceptLink className="text-cream hover:text-terracotta transition-transform hover:-translate-y-1" aria-label="X (formerly Twitter)">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </ConceptLink>
                  <ConceptLink className="text-cream hover:text-terracotta transition-transform hover:-translate-y-1" aria-label="TikTok">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
                    </svg>
                  </ConceptLink>
                </div>
              </div>
            </div>

            {/* Vendor Form */}
            <div className="p-8 md:p-16 bg-cream text-charcoal">
              <h2 className="text-5xl font-heading font-bold uppercase tracking-tighter mb-4">Become A Vendor</h2>
              <p className="font-medium text-charcoal/70 mb-8 border-b-4 border-charcoal/10 pb-8">
                Join the food village or artisan market. Fill out the form below and our curation team will review your application.
              </p>
              
              <form className="space-y-6 font-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading font-bold uppercase text-sm tracking-widest mb-2">Business Name</label>
                    <input type="text" required className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors" placeholder="e.g. Bulawayo Brisket" />
                  </div>
                  <div>
                    <label className="block font-heading font-bold uppercase text-sm tracking-widest mb-2">Contact Person</label>
                    <input type="text" required className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors" placeholder="Your Name" />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-bold uppercase text-sm tracking-widest mb-2">Email Address</label>
                  <input type="email" required pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors" placeholder="email@domain.com" />
                </div>
                <div>
                  <label className="block font-heading font-bold uppercase text-sm tracking-widest mb-2">Category</label>
                  <select required defaultValue="" className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select Category</option>
                    <option value="food">Hot Food / Meals</option>
                    <option value="snacks">Snacks / Desserts</option>
                    <option value="drinks">Beverages / Mixology</option>
                    <option value="crafts">Arts, Crafts & Clothing</option>
                  </select>
                </div>
                <ConceptButton type="submit" className="w-full py-4 bg-charcoal text-cream border-4 border-charcoal font-heading font-bold uppercase tracking-widest text-lg hover:bg-terracotta hover:border-terracotta brutal-btn mt-4">
                  Submit Application
                </ConceptButton>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-charcoal border-t-8 border-terracotta text-cream py-8 text-center font-heading uppercase font-bold tracking-widest text-sm">
          <p>&copy; 2026 One Giant Picnic. <span className="text-terracotta">Bulawayo Edition.</span> All Rights Reserved.</p>
        </footer>
      </main>
    </PageWrapper>
  );
}
