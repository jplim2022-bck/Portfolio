import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import WhyChooseMe from "@/components/WhyChooseMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Skills />
      <WhyChooseMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
