import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SystemsSection } from "@/components/SystemsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <SystemsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
