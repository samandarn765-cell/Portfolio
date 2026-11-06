import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chrome from "@/components/fx/Chrome";
import MotionRoot from "@/components/fx/MotionRoot";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MotionRoot>
          <Chrome />
          <Header />
          <main className="flex-1">
            <Hero />
            <TechMarquee />
            <Skills />
            <Experience />
            <About />
            <Projects />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </MotionRoot>
      </LanguageProvider>
    </ThemeProvider>
  );
}
