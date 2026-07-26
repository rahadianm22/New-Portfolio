import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SystemsSection } from "@/components/SystemsSection";
import { SideProjectSection } from "@/components/SideProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBySection />
      <ExperienceSection />
      <SystemsSection />
      <SideProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
