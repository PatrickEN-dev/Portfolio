import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Differentials from "@/components/sections/Differentials";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

export default function Page() {
  return (
    <main className="relative">
      <LocaleSwitcher />
      <ThemeToggle />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Differentials />
      <Skills />
      <Contact />
    </main>
  );
}
