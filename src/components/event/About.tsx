import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream border-b-4 border-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-8 border-l-8 border-terracotta pl-6">
              Not Just <br />
              Another Party.
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80 font-medium">
              <p>
                What started in Harare as a simple gathering of friends has exploded into Zimbabwe&apos;s most anticipated lifestyle event.{" "}
                <strong className="text-charcoal font-bold bg-terracotta/20 px-1">
                  One Giant Picnic
                </strong>{" "}
                is exactly what it sounds like.
              </p>
              <p>
                We took the timeless concept of a picnic and injected it with premium sound, curated food vendors, brand activations, and a strict emphasis on aesthetic and good energy.
              </p>
              <p className="border-l-2 border-charcoal pl-4 italic">
                &quot;The energy in Harare was unmatched. Now, we are bringing the coolers, the blankets, and the vibes to the City of Kings.&quot;
              </p>
            </div>
            <Link
              href="#experience"
              className="inline-block mt-10 px-6 py-3 border-2 border-charcoal font-heading uppercase font-bold tracking-widest hover:bg-charcoal hover:text-cream transition-colors shadow-hard"
            >
              Discover The Experience
            </Link>
          </div>
          <div className="relative">
            {/* Sharp collage effect */}
            <div className="border-4 border-charcoal bg-sand aspect-[4/5] relative z-10 shadow-hard">
              <Image
                src="/images/about_main_1789853810486.jpg"
                alt="Harare Edition"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square border-4 border-charcoal bg-terracotta z-20 shadow-hard hidden md:block group">
              <Image
                src="/images/gallery_drinks_1789853901246.jpg"
                alt="Picnic Vibes"
                fill
                className="object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-500"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
