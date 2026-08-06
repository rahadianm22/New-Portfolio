import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SystemsSection } from "@/components/SystemsSection";
import { SideProjectSection } from "@/components/SideProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />

      <Reveal variant="up" duration={900}>
        <TrustedBySection />
      </Reveal>

      <Reveal variant="up" duration={900}>
        <ExperienceSection />
      </Reveal>

      <Reveal variant="up" duration={900}>
        <SystemsSection />
      </Reveal>

      <Reveal variant="up" duration={900}>
        <SideProjectSection />
      </Reveal>

      <Reveal variant="up" duration={900}>
        <ContactSection />
      </Reveal>

      <Reveal variant="fade" duration={700}>
        <Footer />
      </Reveal>
    </main>
  );
}
