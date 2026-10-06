"use client";

import type { Faq } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

/** FAQ accordion — CLIENT island (Radix, single-open collapsible). */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="max-w-[820px] mx-auto">
      {faqs.map((f) => (
        <AccordionItem key={f.question} value={f.question}>
          <AccordionTrigger>{f.question}</AccordionTrigger>
          <AccordionContent>{f.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
