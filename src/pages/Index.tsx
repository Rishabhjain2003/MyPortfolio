import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Leadership />
      <Contact />
    </div>
  );
};

export default Index;
