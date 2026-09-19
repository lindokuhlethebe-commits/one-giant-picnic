import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

// Define PageProps properly for Next.js 15+ App Router
type Params = Promise<{ slug: string }>;

interface ArtistPageProps {
  params: Params;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  // Await the params object in Next.js 15
  const { slug } = await params;

  // Ideally, fetch from Sanity using the slug:
  // const artist = await client.fetch(`*[_type == "artist" && slug.current == $slug][0]`, { slug });
  
  // Since we don't have a linked project yet, we'll mock the response based on the slug.
  const mockArtist = {
    name: slug.replace("-", " "),
    role: "Featured Artist",
    imageUrl: `https://placehold.co/800x800/222222/F4F1EA?text=${slug.replace("-", "+")}`,
    biography: "This is a dynamically generated artist page. In production, this data flows seamlessly from the Sanity CMS schema we configured. The event organizer can update the artist's biography, links, and imagery without touching a line of code.",
    spotifyUrl: "https://spotify.com",
  };

  if (!mockArtist) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream pt-24 text-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/#lineup" className="font-heading uppercase font-bold tracking-widest text-terracotta hover:text-charcoal transition-colors mb-12 inline-block">
          &#8592; Back to Lineup
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="border-4 border-charcoal bg-sand aspect-square relative shadow-hard">
            <Image
              src={mockArtist.imageUrl}
              alt={mockArtist.name}
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
          
          <div>
            <span className="bg-charcoal text-cream px-4 py-1 font-heading font-bold uppercase tracking-widest text-sm inline-block mb-6">
              {mockArtist.role}
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter mb-8 capitalize">
              {mockArtist.name}
            </h1>
            <p className="text-xl font-medium opacity-80 leading-relaxed mb-8">
              {mockArtist.biography}
            </p>
            
            <a
              href={mockArtist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-terracotta text-cream border-4 border-terracotta font-heading font-bold uppercase tracking-widest hover:bg-charcoal hover:border-charcoal transition-colors shadow-hard-sm"
            >
              Listen on Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
