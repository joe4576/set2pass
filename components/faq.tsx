"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much do lessons cost?",
    answer:
      "Nikki and Sean charge £60 per lesson. We also offer a 5% discount if you book 10 lessons in advance.",
  },
  {
    question: "Do you offer automatic lessons?",
    answer:
      "Yes! Nikki offers automatic lessons and Sean offers manual lessons, so we can accommodate your preference.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover Locks Heath and surrounding areas. Get in touch to find out if we cover your area.",
  },
  {
    question: "How long is the waiting list?",
    answer:
      "Our waiting list depends on which days and times you are available. Lessons during the day mid-week are available sooner than evenings and weekends.",
  },
  {
    question: "Can I book multiple lessons at once?",
    answer:
      "Absolutely! We offer a 5% discount if you book 10 lessons in advance. This is a great way to commit to your learning journey and save money.",
  },
  {
    question: "Do you provide theory test support?",
    answer:
      "Yes! We provide free online theory training to all Set2Pass students via the Theory Test Pro app. Ask your instructor for access details.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          FAQ
        </span>
        <h2
          className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Everything you need to know about lessons with Set2Pass.
        </p>
      </div>

      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
