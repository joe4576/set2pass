import { Disclosure } from "@/components/shared/disclosure";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { prices, lessonDetails } from "@/lib/constants";

type Faq = {
  answer: string;
  question: string;
};

const faqs: Faq[] = [
  {
    question: "How much do lessons cost?",
    answer: `Nikki and Sean charge ${prices.hourly} per hour, and each lesson is ${lessonDetails.durationMinutes} minutes. We also offer a ${lessonDetails.blockDiscountPercent}% discount if you book ${lessonDetails.blockLessonCount} lessons in advance.`,
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
    answer: `Absolutely! We offer a ${lessonDetails.blockDiscountPercent}% discount if you book ${lessonDetails.blockLessonCount} lessons in advance. This is a great way to commit to your learning journey and save money.`,
  },
  {
    question: "Do you provide theory test support?",
    answer:
      "Yes! We provide free online theory training to all Set2Pass students via the Theory Test Pro app. Ask your instructor for access details.",
  },
];

export const FAQ = () => (
  <Section id="faq" spacing="spacious">
    <div className="min-[1000px]:grid min-[1000px]:grid-cols-[1fr_1.45fr] min-[1000px]:gap-[100px]">
      <SectionHeader
        className="min-[1000px]:max-w-[300px]"
        title="Frequently asked questions"
      />
      <div className="border-t border-border">
        {faqs.map((faq) => (
          <Disclosure
            key={faq.question}
            summary={faq.question}
            summaryClassName="py-[21px]"
          >
            <p className="max-w-[650px] pb-[22px] text-muted-foreground">
              {faq.answer}
            </p>
          </Disclosure>
        ))}
      </div>
    </div>
  </Section>
);
