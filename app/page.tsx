import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { ExtraCards } from "@/components/home/extra-cards";
import { FAQ } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Instructors } from "@/components/home/instructors";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Instructors />
      <FAQ />
      <Testimonials />
      <ExtraCards />
      <Contact />
    </main>
  );
}
