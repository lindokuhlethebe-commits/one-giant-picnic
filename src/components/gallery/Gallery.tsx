import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export interface GalleryItem {
  _id: string;
  imageUrl: string;
  caption: string;
}

const fallbackGallery: GalleryItem[] = [
  { _id: "1", imageUrl: "https://placehold.co/800x800/D1603D/F4F1EA?text=Crowd+Shot", caption: "Crowd" },
  { _id: "2", imageUrl: "https://placehold.co/400x400/6B705C/F4F1EA?text=Fashion", caption: "Fashion" },
  { _id: "3", imageUrl: "https://placehold.co/400x400/E3DCD2/222222?text=Drinks", caption: "Drinks" },
  { _id: "4", imageUrl: "https://placehold.co/400x400/222222/F4F1EA?text=Stage", caption: "Stage" },
  { _id: "5", imageUrl: "https://placehold.co/400x400/D1603D/222222?text=Sunset", caption: "Sunset" },
];

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const query = `*[_type == "galleryItem" && featured == true][0...5] {
      _id,
      "imageUrl": media.asset->url,
      caption
    }`;
    const items = await client.fetch<GalleryItem[]>(query);
    return items && items.length >= 5 ? items : fallbackGallery;
  } catch (error) {
    console.warn("Failed to fetch gallery items", error);
    return fallbackGallery;
  }
}

export default async function Gallery() {
  const items = await getGalleryItems();
  
  // Ensure we have exactly 5 items for this specific layout
  const displayItems = items.slice(0, 5);
  // Pad with fallback if fewer than 5
  while (displayItems.length < 5) {
    displayItems.push(fallbackGallery[displayItems.length]);
  }

  return (
    <section id="gallery" className="py-24 bg-charcoal border-b-4 border-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-cream">
            The <span className="text-terracotta">Archive</span>
          </h2>
          <Link
            href="#"
            className="hidden md:block text-sand font-heading uppercase tracking-widest border-b-2 border-sand hover:text-terracotta hover:border-terracotta transition-colors"
          >
            View Full Gallery
          </Link>
        </div>

        {/* Sharp Masonry/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="col-span-2 row-span-2 border-4 border-cream relative group overflow-hidden">
            <Image
              src={displayItems[0].imageUrl}
              alt={displayItems[0].caption}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
            <div className="absolute inset-0 border-8 border-transparent group-hover:border-cream transition-colors duration-300"></div>
          </div>
          
          {displayItems.slice(1).map((item) => (
            <div key={item._id} className="border-4 border-cream relative group overflow-hidden aspect-square">
              <Image
                src={item.imageUrl}
                alt={item.caption}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
