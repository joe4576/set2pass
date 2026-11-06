import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { FAQ } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Instructors } from "@/components/home/instructors";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";

const Home = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Stats />
      <About />
      <Instructors />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
