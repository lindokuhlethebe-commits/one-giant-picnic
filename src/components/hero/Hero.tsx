import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden border-b-4 border-charcoal bg-charcoal text-cream"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal/80"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12 md:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tighter leading-none mb-6 text-cream shadow-black drop-shadow-lg">
          One Giant <br />
          <span className="text-terracotta">Picnic</span>
        </h1>

        <p className="mt-2 text-lg md:text-2xl font-heading uppercase tracking-wide text-sand mb-10 max-w-2xl mx-auto border-b-2 border-cream pb-6">
          Music. Food. Culture. Community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-lg">
          <Link
            href="#tickets"
            className="w-full text-center px-8 py-4 bg-terracotta text-cream border-2 border-terracotta font-heading font-bold uppercase tracking-widest text-lg hover:bg-cream hover:text-terracotta brutal-btn"
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
