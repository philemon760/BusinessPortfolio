import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Services from "@/components/sevices";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Doctors from "@/components/doctors";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="grid grid-cols-1 items-center px-4 gap-20">
      <Intro />
      <SectionDivider />
      <Services />
      <Doctors />
      <Skills />
      <Experience />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
