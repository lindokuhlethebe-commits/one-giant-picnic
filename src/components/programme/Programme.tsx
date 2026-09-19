import { client } from "@/sanity/lib/client";

export interface Performance {
  _id: string;
  stage: string;
  startTime: string;
  endTime: string;
  notes: string;
  artistName: string;
}

const fallbackPerformances: Performance[] = [
  {
    _id: "1",
    stage: "Main Stage",
    startTime: "2026-10-24T12:00:00Z",
    endTime: "2026-10-24T14:30:00Z",
    notes: "Find your spot, grab lunch from the food village, set up your coolers. Background neo-soul sets the mood.",
    artistName: "Gates Open",
  },
  {
    _id: "2",
    stage: "Secondary Stage",
    startTime: "2026-10-24T14:30:00Z",
    endTime: "2026-10-24T16:00:00Z",
    notes: "Local talents take the secondary stage. Perfect time for photos and visiting brand activations.",
    artistName: "Live Acoustic Sessions",
  },
  {
    _id: "3",
    stage: "Main Stage",
    startTime: "2026-10-24T16:00:00Z",
    endTime: "2026-10-24T19:00:00Z",
    notes: "The tempo goes up. Deep house and early Amapiano as the sun goes down. The main dancefloor opens.",
    artistName: "Sunset DJ Sets",
  },
  {
    _id: "4",
    stage: "Main Stage",
    startTime: "2026-10-24T19:00:00Z",
    endTime: "2026-10-24T22:00:00Z",
    notes: "Main stage activates fully. Live bands and headline DJs back-to-back.",
    artistName: "Headline Performances",
  },
  {
    _id: "5",
    stage: "All Venues",
    startTime: "2026-10-24T22:00:00Z",
    endTime: "2026-10-24T23:59:00Z",
    notes: "Official event closes. Shuttles available to partner club venues.",
    artistName: "Curfew / Afterparty",
  },
];

async function getPerformances(): Promise<Performance[]> {
  try {
    const query = `*[_type == "performance"] | order(startTime asc) {
      _id,
      stage,
      startTime,
      endTime,
      notes,
      "artistName": artist->name
    }`;
    const performances = await client.fetch<Performance[]>(query);
    return performances && performances.length > 0 ? performances : fallbackPerformances;
  } catch (error) {
    console.warn("Failed to fetch performances, using fallback.", error);
    return fallbackPerformances;
  }
}

// Helper to format time (e.g. 12:00 PM)
function formatTime(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }); // Assuming UTC for demo
}

// Use alternating colors based on index matching the prototype
const bulletColors = ["bg-terracotta", "bg-cream", "bg-cream", "bg-terracotta", "bg-charcoal"];

export default async function Programme() {
  const performances = await getPerformances();

  return (
    <section className="border-b-4 border-charcoal flex flex-col lg:flex-row">
      {/* Venue Half (Could also be its own CMS-driven component) */}
      <div id="venue" className="lg:w-1/2 bg-olive text-cream p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-charcoal relative">
        <h2 className="text-5xl font-heading font-bold uppercase tracking-tighter mb-8">
          The Venue
        </h2>

        <div className="bg-charcoal border-4 border-charcoal text-cream p-6 shadow-[8px_8px_0px_0px_rgba(244,241,234,1)] mb-8">
          <h3 className="text-3xl font-heading font-bold uppercase text-terracotta mb-2">
            Hillside Dams
          </h3>
          <p className="font-heading uppercase tracking-widest text-sm text-sand/80 mb-4">
            Bulawayo, Zimbabwe
          </p>
          <p className="font-medium mb-6">
            Nature meets nightlife. We&apos;ve secured the main lawns surrounded by indigenous trees and historic water features, providing the perfect acoustic and visual backdrop.
          </p>

          <div className="space-y-2 border-t-2 border-cream/20 pt-4 font-heading uppercase text-sm font-bold tracking-wide">
            <p>&#8594; Secure Paid Parking Available</p>
            <p>&#8594; Ride-share drop-off zone at Main Gate</p>
            <p>&#8594; Wheelchair Accessible terrain</p>
          </div>
        </div>

        {/* Placeholder Map */}
        <div className="aspect-video bg-sand border-4 border-charcoal relative flex items-center justify-center grayscale">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://placehold.co/800x400/E3DCD2/222222?text=Interactive+Map+Coming+Soon"
            className="w-full h-full object-cover"
            alt="Interactive Map Coming Soon"
          />
          <div className="absolute inset-0 border-4 border-charcoal m-2 pointer-events-none"></div>
        </div>
      </div>

      {/* Schedule Half */}
      <div id="schedule" className="lg:w-1/2 bg-sand text-charcoal p-8 md:p-16">
        <h2 className="text-5xl font-heading font-bold uppercase tracking-tighter mb-8 text-charcoal">
          Programme
        </h2>

        <div className="relative border-l-4 border-charcoal ml-4 space-y-10 py-4">
          {performances.map((perf, idx) => (
            <div key={perf._id} className="relative pl-8">
              <div
                className={`absolute -left-[14px] top-1 w-6 h-6 ${
                  bulletColors[idx % bulletColors.length]
                } border-4 border-charcoal`}
              ></div>
              <span className="font-heading font-bold text-olive text-xl tracking-widest">
                {formatTime(perf.startTime)}
              </span>
              <h4 className="text-2xl font-heading font-bold uppercase mt-1">
                {perf.artistName || perf.stage}
              </h4>
              <p className="font-medium opacity-80 mt-2">{perf.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
