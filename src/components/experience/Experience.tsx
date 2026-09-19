import { client } from "@/sanity/lib/client";

export interface ExperienceItem {
  _id: string;
  title: string;
  description: string;
  displayOrder: number;
}

const fallbackExperience: ExperienceItem[] = [
  {
    _id: "1",
    title: "Food & Drinks",
    description: "A curated village of Bulawayo's finest street food, artisanal stalls, and fully stocked craft bars. Bring your cooler box (corkage applies), but leave room for the brisket.",
    displayOrder: 1,
  },
  {
    _id: "2",
    title: "Music & Sound",
    description: "From laid-back afternoon neo-soul and R&B to high-energy Amapiano and Hip Hop as the sun sets. The progression is designed to keep you moving.",
    displayOrder: 2,
  },
  {
    _id: "3",
    title: "Fashion & Culture",
    description: "This is a highly documented event. The dress code is 'Picnic Chic'. Think summer aesthetics, bold colors, and comfortable footwear. Photographers will be everywhere.",
    displayOrder: 3,
  },
  {
    _id: "4",
    title: "Brand Activations",
    description: "Interactive zones sponsored by our partners. Photo booths, gaming lounges, free merch drops, and makeup touch-up stations throughout the venue.",
    displayOrder: 4,
  },
  {
    _id: "5",
    title: "The Layout",
    description: "Sprawling lawns designated for blankets and camp chairs. We separate the high-energy dance areas from the relaxed picnic zones so you can curate your own experience.",
    displayOrder: 5,
  },
];

async function getExperienceItems(): Promise<ExperienceItem[]> {
  try {
    const query = `*[_type == "experienceItem"] | order(displayOrder asc) {
      _id,
      title,
      description,
      displayOrder
    }`;
    const items = await client.fetch<ExperienceItem[]>(query);
    return items && items.length > 0 ? items : fallbackExperience;
  } catch (error) {
    console.warn("Failed to fetch experience items", error);
    return fallbackExperience;
  }
}

// Map index to specific hover classes from the prototype
const hoverClasses = [
  "hover:bg-terracotta hover:text-cream text-olive",
  "hover:bg-olive hover:text-cream text-terracotta",
  "hover:bg-charcoal hover:text-cream text-olive",
  "hover:bg-charcoal hover:text-cream text-terracotta",
  "hover:bg-terracotta hover:text-cream text-olive lg:col-span-2",
];

export default async function Experience() {
  const items = await getExperienceItems();

  return (
    <section id="experience" className="py-24 bg-cream border-b-4 border-charcoal">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-16 border-l-8 border-olive pl-6">
          What To Expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const hClass = hoverClasses[idx % hoverClasses.length];
            // Split the class to get the number color which was separate in prototype
            const baseHoverClass = hClass.split("text-")[0].trim();
            const numberColorClass = `text-${hClass.split("text-")[1]}`;
            const colSpanClass = hClass.includes("lg:col-span-2") ? "lg:col-span-2" : "";

            return (
              <div
                key={item._id}
                className={`border-4 border-charcoal bg-sand p-6 shadow-hard group transition-colors duration-300 ${baseHoverClass} ${colSpanClass}`}
              >
                <div
                  className={`text-4xl mb-4 font-heading group-hover:text-cream transition-colors ${numberColorClass}`}
                >
                  0{idx + 1} /
                </div>
                <h3 className="text-2xl font-heading font-bold uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-medium opacity-80">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
