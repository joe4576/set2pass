"use client";

import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
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
    <Section id="faq" containerClassName="max-w-3xl">
      <SectionHeader
        miniTitle="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about lessons with Set2Pass."
      />

      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((faq, i) => (
          <FaqAccordionItem key={faq.question} {...faq} number={i} />
        ))}
      </Accordion>
    </Section>
  );
}

type FaqAccordionItemProps = Faq & {
  number: number;
};

const FaqAccordionItem = ({
  question,
  answer,
  number,
}: FaqAccordionItemProps) => {
  return (
    <AccordionItem key={number} value={`item-${number}`}>
      <AccordionTrigger className="text-left text-base font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
