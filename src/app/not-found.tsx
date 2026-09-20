import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import Navigation from "@/components/navigation/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation isLoaded={true} />
      <main className="min-h-screen bg-charcoal text-cream flex items-center justify-center p-4 pt-20">
        <div className="max-w-2xl mx-auto text-center border-4 border-terracotta p-8 md:p-16 bg-cream text-charcoal shadow-[12px_12px_0_0_rgba(209,96,61,1)] relative">
          <div className="absolute -top-6 -right-6 bg-terracotta text-cream px-4 py-2 font-heading font-bold uppercase tracking-widest text-sm transform rotate-6 border-2 border-charcoal">
            Error 404
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-bold uppercase tracking-tighter mb-6 text-charcoal">
            Bruh.
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-6 border-b-4 border-charcoal/10 pb-6">
            You&apos;re literally lost.
          </h2>
          
          <div className="space-y-4 font-medium text-lg text-charcoal/80 mb-10">
            <p>
              Page not found. tbh this whole site is just a concept anyway, so don&apos;t stress it. It&apos;s giving 404, it&apos;s not giving what it was supposed to give. 
            </p>
            <p>
              Ain&apos;t nothing here but dead links and good vibes. Let&apos;s go back to the main stage before you miss the set.
            </p>
          </div>
          
          <Link
            href="/"
            className="inline-block w-full sm:w-auto px-8 py-4 bg-charcoal text-cream border-4 border-charcoal hover:bg-terracotta hover:border-terracotta transition-colors shadow-hard-sm font-heading uppercase font-bold tracking-widest text-xl"
          >
            Take Me Back
          </Link>
        </div>
      </main>
    </>
  );
}
