import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

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
    role: "Amapiano King",
    imageUrl: "https://placehold.co/800x800/222222/F4F1EA?text=Headliner",
    isHeadliner: true,
    featured: true,
  },
  {
    _id: "2",
    name: "Gemma Griffiths",
    slug: { current: "gemma-griffiths" },
    role: "Live Band",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=Artist+2",
    isHeadliner: false,
    featured: true,
  },
  {
    _id: "3",
    name: "Asaph",
    slug: { current: "asaph" },
    role: "Hip Hop",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=Artist+3",
    isHeadliner: false,
    featured: true,
  },
  {
    _id: "4",
    name: "DJ Raydizz",
    slug: { current: "dj-raydizz" },
    role: "Main Stage",
    imageUrl: "https://placehold.co/600x600/222222/F4F1EA?text=DJ+1",
    isHeadliner: false,
    featured: true,
  },
];

async function getArtists(): Promise<Artist[]> {
  try {
    // We fetch artists and map the image to a URL using a GROQ projection
    // Ensure you have an active Sanity Project ID in .env for this to work
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
    
    // If we have artists from Sanity, return them, otherwise fallback
    return artists && artists.length > 0 ? artists : fallbackArtists;
  } catch (error) {
    console.warn("Failed to fetch artists from Sanity. Falling back to local data.", error);
    return fallbackArtists;
  }
}

export default async function Lineup() {
  const artists = await getArtists();

  return (
    <section id="lineup" className="py-24 bg-charcoal text-cream border-b-4 border-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-cream pb-8">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter">
            The <span className="text-terracotta">Lineup</span>
          </h2>
          <p className="text-sand font-heading uppercase tracking-widest mt-4 md:mt-0">
            Curated Sounds & Energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-cream">
          {artists.map((artist) => {
            const isHeadliner = artist.isHeadliner;
            
            return (
              <Link
                href={`/artists/${artist.slug.current}`}
                key={artist._id}
                className={`block group relative aspect-square border border-cream/30 overflow-hidden cursor-pointer ${
                  isHeadliner ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={artist.imageUrl || `https://placehold.co/600x600/222222/F4F1EA?text=${artist.name.replace(" ", "+")}`}
                  alt={artist.name}
                  fill
                  className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${
                    isHeadliner ? "transform group-hover:scale-105" : ""
                  }`}
                  unoptimized
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-charcoal ${
                  isHeadliner ? "via-charcoal/50 to-transparent opacity-80" : "to-transparent opacity-90 group-hover:opacity-60 transition-opacity"
                }`}></div>
                
                <div className={`absolute bottom-0 left-0 ${
                  isHeadliner ? "p-8 w-full border-t border-cream/20 bg-charcoal/40 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform" : "p-6"
                }`}>
                  {isHeadliner && (
                    <span className="bg-terracotta text-cream px-2 py-1 text-xs font-bold uppercase tracking-widest mb-2 inline-block">
                      Headliner
                    </span>
                  )}
                  <h3 className={`${isHeadliner ? "text-4xl tracking-tight" : "text-2xl"} font-heading font-bold uppercase`}>
                    {artist.name}
                  </h3>
                  <p className={isHeadliner ? "text-sand mt-2" : "text-sm text-sand"}>{artist.role}</p>
                </div>
              </Link>
            );
          })}

          {/* MC (Static addition as seen in prototype, or could be fetched) */}
          <div className="group relative aspect-square border border-cream/30 overflow-hidden cursor-pointer bg-terracotta">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 border-4 border-charcoal/0 group-hover:border-cream transition-colors">
              <span className="text-charcoal font-bold uppercase tracking-widest mb-4">
                Hosted By
              </span>
              <h3 className="text-3xl font-heading font-bold uppercase text-cream">MisRed</h3>
              <p className="text-sm text-charcoal mt-2">+ Surprise Guests</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-block border-b-2 border-terracotta text-terracotta font-heading uppercase font-bold tracking-widest pb-1 hover:text-cream hover:border-cream transition-colors"
          >
            Listen to the Official Spotify Playlist &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
}
