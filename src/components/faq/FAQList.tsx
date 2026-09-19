"use client";

import { useState } from "react";

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 font-sans">
      {faqs.map((faq, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div
            key={faq._id}
            className={`faq-item border-4 border-charcoal bg-white shadow-hard cursor-pointer transition-all ${
              isActive ? "active" : ""
            }`}
            onClick={() => toggle(idx)}
          >
            <div
              className={`p-6 flex justify-between items-center border-charcoal faq-header transition-colors ${
                isActive ? "bg-terracotta text-cream border-b-4" : "bg-sand border-b-0"
              }`}
            >
              <h3 className="text-xl font-heading font-bold uppercase tracking-wide pr-4">
                {faq.question}
              </h3>
              <span
                className={`faq-icon text-3xl font-light transform transition-transform duration-300 ${
                  isActive ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            
            <div
              className={`faq-answer bg-cream transition-all duration-400 ease-in-out overflow-hidden ${
                isActive ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-6 font-medium text-charcoal/80">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
