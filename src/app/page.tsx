import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/hero/Hero";
import About from "@/components/event/About";
import Lineup from "@/components/artists/Lineup";
import Tickets from "@/components/event/Tickets";
import Experience from "@/components/experience/Experience";
import Programme from "@/components/programme/Programme";
import Gallery from "@/components/gallery/Gallery";
import FAQSection from "@/components/faq/FAQSection";

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
                  <a href="#" className="hover-underline">hello@onegiantpicnic.com</a>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 border-4 border-cream flex items-center justify-center mr-6 group-hover:bg-cream group-hover:text-olive transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <a href="#" className="hover-underline">+263 77 000 0000</a>
                </div>

                <div className="flex items-center group mt-12 pt-12 border-t-4 border-cream/20">
                  <a href="#" className="mr-6 hover:text-terracotta transition-colors">INSTAGRAM</a>
                  <a href="#" className="mr-6 hover:text-terracotta transition-colors">TWITTER</a>
                  <a href="#" className="hover:text-terracotta transition-colors">TIKTOK</a>
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
                  <input type="email" required className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors" placeholder="email@domain.com" />
                </div>
                <div>
                  <label className="block font-heading font-bold uppercase text-sm tracking-widest mb-2">Category</label>
                  <select required className="w-full bg-transparent border-4 border-charcoal p-3 focus:outline-none focus:border-terracotta transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Category</option>
                    <option value="food">Hot Food / Meals</option>
                    <option value="snacks">Snacks / Desserts</option>
                    <option value="drinks">Beverages / Mixology</option>
                    <option value="crafts">Arts, Crafts & Clothing</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-charcoal text-cream border-4 border-charcoal font-heading font-bold uppercase tracking-widest text-lg hover:bg-terracotta hover:border-terracotta transition-colors shadow-hard mt-4">
                  Submit Application
                </button>
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
