import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main className="flex-1">
          <Hero />
          <Skills />
          <Experience />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
