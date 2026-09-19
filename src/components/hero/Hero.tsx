import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b-4 border-charcoal bg-charcoal text-cream"
    >
      {/* Simulated Video Background using an image for robustness, tinted dark */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/222222/333333?text=Hero+Video+Background"
          alt="Event Atmosphere"
          fill
          priority
          className="object-cover opacity-60"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/80"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12 md:mt-0">
        <div className="border-2 border-cream px-4 py-1 mb-8 inline-block">
          <span className="font-heading uppercase tracking-widest text-sm md:text-base font-bold text-terracotta">
            Bulawayo Edition
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter leading-none mb-6 text-cream shadow-black drop-shadow-lg">
          One Giant <br />
          <span className="text-terracotta">Picnic</span>
        </h1>

        <p className="mt-2 text-xl md:text-3xl font-heading uppercase tracking-wide text-sand mb-10 max-w-3xl mx-auto border-b-2 border-cream pb-6">
          Music. Food. Culture. Community.
          <br />
          <span className="text-lg md:text-xl font-sans normal-case mt-4 block text-cream">
            October 24, 2026 • Hillside Dams Conservancy
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-lg">
          <Link
            href="#tickets"
            className="w-full text-center px-8 py-5 bg-terracotta text-cream border-2 border-terracotta font-heading font-bold uppercase tracking-widest text-lg hover:bg-cream hover:text-terracotta transition-colors shadow-[8px_8px_0px_0px_rgba(244,241,234,0.3)]"
          >
            Get Tickets
          </Link>
        </div>

        {/* Live Countdown */}
        <Countdown targetDate="October 24, 2026 12:00:00" />
      </div>
    </section>
  );
}
