"use client";

import { Card } from "@/components/common/card";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { useReviewCount } from "@/providers/review-count-provider";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  instructor: string;
  text: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Chloe",
    instructor: "Nikki",
    text: "Absolutely fantastic driving instructor, I would 100% recommend. Nikki is a very patient instructor who truly cares about her students and gives them the courage from the very first lesson to when you pass. Thank you so much for the constant encouragement and skill to help me to pass first time!",
    img: "/images/students/chloe.webp",
  },
  {
    name: "Lucy",
    instructor: "Sean",
    text: "I had Sean as my instructor, he was absolutely incredible! He was so kind, patient and helpful and really took the time to make me feel comfortable and confident in my driving. Sean really helped me to build good driving habits and nail the parts that I found nerve racking or difficult. He really cares that his students feel confident and test ready, and it’s down to him that I passed first time. :)",
    img: "/images/students/lucy.webp",
  },
  {
    name: "Ben",
    instructor: "Nikki",
    text: "I have just recently passed first time with no minors through this driving school. From start to finish the teaching, knowledge and experience was above the mark as well as the attention to detail that could be corrected in my driving. I couldn't recommend this service enough. Nikki is a lovely person and is easy to get along with, so that every lesson is consistent, constructive and enjoyable.",
    img: "/images/students/ben.webp",
  },
  {
    name: "Jack",
    instructor: "Sean",
    text: "I got driving with Sean at the end of February, although I had some driving experience before I still managed to pass with two minors by the end of may. From start to finish he records the things to work on and things your doing well, puts his time into what you need and gives the all the important details you need to know so that you’ll learn quick and easy. Learning to drive has been made to feel easy and simple because of Sean. If you get to learn with him then you’re in good hands, I couldn’t recommend him enough.",
    img: "/images/students/jack.webp",
  },
  {
    name: "Stirling",
    instructor: "Nikki",
    text: "Nikki is a wonderful driving instructor. I contacted her after having lessons from another instructor who made me question my confidence and whether I wanted to drive. Nikki restored my confidence and due to her patience, kindness and knowledge I was able to pass my test first time. I highly recommend Nikki and will always be eternally grateful to her. Thank you.",
    img: "/images/students/stirling.webp",
  },
  {
    name: "James",
    instructor: "Nikki",
    text: "Nikki is an incredibly patient and informative person and driving instructor. She always helped me by providing insightful tips as well as constructive feedback. I always felt I was learning more and more every lesson and was able to clearly see progress. Nikki gave me both confidence and assurance in my own abilities to help me pass my test through her lessons. I would highly recommend Nikki to anyone learning to drive, and can guarantee both an incredible driving instructor and a lovely person to teach you.",
    img: "/images/students/james.webp",
  },
];

export function Testimonials() {
  const reviewCount = useReviewCount();

  return (
    <Section id="reviews" muted>
      <SectionHeader
        miniTitle="Reviews"
        title="What our students say"
        subtitle={`Rated 5 stars with ${reviewCount} reviews on FreeIndex. Here are some of our favourites.`}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}

const TestimonialCard = ({ name, instructor, text, img }: Testimonial) => {
  return (
    <Card className="flex flex-col">
      <Quote className="mb-4 size-8 text-primary/20" />

      <p className="flex-1 leading-relaxed text-muted-foreground">{text}</p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div className="flex gap-4 items-center">
          <img src={img} className="size-12 rounded-full" />

          <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">
              Student of {instructor}
            </p>
          </div>
        </div>

        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </Card>
  );
};
