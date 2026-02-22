import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ExtraCards } from "@/components/extra-cards";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Instructors } from "@/components/instructors";
import { Navbar } from "@/components/navbar";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Instructors />
      <FAQ />
      <Testimonials />
      <ExtraCards />
      <Contact />
      <Footer />
    </main>
  );
}
