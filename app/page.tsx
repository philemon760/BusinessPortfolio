import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/sevices";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="grid grid-cols-1 items-center px-4 gap-20">
      <Intro />
      <SectionDivider />
     
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
