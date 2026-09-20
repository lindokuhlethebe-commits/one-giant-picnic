import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ConceptLink } from "@/components/ui/ConceptAction";

// Define the type we expect from Sanity
export interface Artist {
  _id: string;
  name: string;
  slug: { current: string };
  role: string;
  imageUrl: string;
  isHeadliner: boolean;
  featured: boolean;
}

const fallbackArtists: Artist[] = [
  {
    _id: "1",
    name: "DJ Maphorisa",
    slug: { current: "dj-maphorisa" },
    role: "Sundown Amapiano Mix",
    imageUrl: "https://placehold.co/800x800/222222/F4F1EA?text=Maphorisa",
    isHeadliner: true,
    featured: true,
  },
  {
    _id: "2",
    name: "Gemma Griffiths",
    slug: { current: "gemma-griffiths" },
    role: "Acoustic Sunset",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=Gemma",
    isHeadliner: false,
    featured: true,
  },
  {
    _id: "3",
    name: "Asaph",
    slug: { current: "asaph" },
    role: "Chill Vibes",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=Asaph",
    isHeadliner: false,
    featured: true,
  },
  {
    _id: "4",
    name: "DJ Raydizz",
    slug: { current: "dj-raydizz" },
    role: "Afternoon Grooves",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=Raydizz",
    isHeadliner: false,
    featured: true,
  },
];

async function getArtists(): Promise<Artist[]> {
  try {
    const query = `*[_type == "artist" && featured == true] | order(displayOrder asc) {
      _id,
      name,
      slug,
      "role": artistType,
      "imageUrl": profileImage.asset->url,
      "isHeadliner": displayOrder == 1,
      featured
    }`;
    const artists = await client.fetch<Artist[]>(query);
    return artists && artists.length > 0 ? artists : fallbackArtists;
  } catch (error) {
    console.warn("Failed to fetch artists from Sanity. Falling back to local data.", error);
    return fallbackArtists;
  }
}

export default async function Lineup() {
  const artists = await getArtists();

  return (
    <section id="lineup" className="py-24 bg-cream text-charcoal border-b-4 border-charcoal overflow-hidden relative">
      {/* Animated Marquee Background */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none flex select-none">
        <div className="animate-marquee inline-block">
          <span className="text-[12rem] font-heading font-bold uppercase mx-4">Vibes • Sounds • Chill •</span>
        </div>
        <div className="animate-marquee inline-block">
          <span className="text-[12rem] font-heading font-bold uppercase mx-4">Vibes • Sounds • Chill •</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-charcoal pb-8">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter">
            The <span className="text-terracotta">Lineup</span>
          </h2>
          <p className="text-olive font-heading uppercase tracking-widest mt-4 md:mt-0 font-bold">
            Curated Sounds & Energy
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {artists.map((artist, i) => (
            <Link
              href={`/artists/${artist.slug.current}`}
              key={artist._id}
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] group cursor-pointer"
            >
              <div className={`relative aspect-[3/4] border-4 border-charcoal overflow-hidden shadow-[8px_8px_0px_0px_#222222] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_#E34A33] ${i % 2 !== 0 ? 'md:mt-12' : ''}`}>
                <Image
                  src={artist.imageUrl || `https://placehold.co/600x800/222222/F4F1EA?text=${artist.name.replace(" ", "+")}`}
                  alt={artist.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="bg-cream inline-block px-3 py-1 mb-3 border-2 border-charcoal transform -rotate-2 group-hover:rotate-0 transition-transform">
                    <p className="text-xs font-bold uppercase tracking-widest text-charcoal">{artist.role}</p>
                  </div>
                  <h3 className="text-4xl font-heading font-bold uppercase text-cream leading-none tracking-tight">
                    {artist.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}

          {/* Vibe Curator Card */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] group cursor-pointer md:mt-12">
            <div className="relative aspect-[3/4] border-4 border-charcoal overflow-hidden shadow-[8px_8px_0px_0px_#222222] bg-terracotta transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_#222222]">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMyMjIyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]">
                <span className="bg-cream text-charcoal border-2 border-charcoal px-3 py-1 font-bold uppercase tracking-widest mb-6 transform rotate-3">
                  Vibe Curator
                </span>
                <h3 className="text-5xl font-heading font-bold uppercase text-cream shadow-black drop-shadow-md">MisRed</h3>
                <p className="text-lg font-bold text-charcoal mt-4 uppercase tracking-widest">+ Surprise Guests</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:text-right">
          <ConceptLink
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 font-heading uppercase font-bold tracking-widest hover:bg-terracotta transition-colors brutal-btn border-2 border-charcoal"
          >
            Listen to the Official Playlist 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </ConceptLink>
        </div>
      </div>
    </section>
  );
}
