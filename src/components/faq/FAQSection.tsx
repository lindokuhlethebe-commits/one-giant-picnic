import { client } from "@/sanity/lib/client";
import FAQList, { FAQ } from "./FAQList";

const fallbackFaqs: FAQ[] = [
  {
    _id: "1",
    question: "Can I bring outside food and drinks?",
    answer: "Outside food is generally discouraged as we have a curated food village. Empty cooler boxes are allowed, but drinks incur a flat corkage fee at the gate (payable in USD or EcoCash). VIP tickets include a free cooler box pass.",
  },
  {
    _id: "2",
    question: "Are children allowed?",
    answer: "This specific edition is strictly 18+. ID will be required at the gate. We are planning a separate family-friendly day event in the future.",
  },
  {
    _id: "3",
    question: "What happens if it rains?",
    answer: "The event will proceed rain or shine. We have large stretch tents covering the main stage and bar areas. However, as it is an outdoor picnic, we advise checking the forecast and dressing accordingly.",
  },
  {
    _id: "4",
    question: "Are tickets refundable or transferable?",
    answer: "Tickets are strictly non-refundable. They are transferable up to 48 hours before the event via our ticketing partner's platform. Beware of scammers selling fake tickets on social media.",
  }
];

async function getFAQs(): Promise<FAQ[]> {
  try {
    const query = `*[_type == "faq" && active == true] | order(displayOrder asc) {
      _id,
      question,
      answer
    }`;
    const faqs = await client.fetch<FAQ[]>(query);
    return faqs && faqs.length > 0 ? faqs : fallbackFaqs;
  } catch (error) {
    console.warn("Failed to fetch FAQs, using fallback.", error);
    return fallbackFaqs;
  }
}

export default async function FAQSection() {
  const faqs = await getFAQs();

  return (
    <section id="faq" className="py-24 bg-cream border-b-4 border-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter text-charcoal mb-12 text-center">
          Need To Know
        </h2>
        <FAQList faqs={faqs} />
      </div>
    </section>
  );
}
