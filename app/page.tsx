import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { SystemsSection } from "@/components/SystemsSection";
import { SideProjectSection } from "@/components/SideProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

/**
 * Order follows what a hiring reader needs: proof of who he shipped for
 * right under the hero, then the work, then where and how he works, then
 * how to reach him.
 */
export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedBySection />
      <SelectedWorkSection />
      <ExperienceSection />
      <SystemsSection />
      <SideProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
