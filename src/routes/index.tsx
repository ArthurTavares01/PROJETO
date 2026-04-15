import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arthur Tavares — Analista de TI" },
      { name: "description", content: "Portfólio de Arthur Tavares. Analista de TI especializado em infraestrutura, automação, RPA e monitoramento." },
      { property: "og:title", content: "Arthur Tavares — Analista de TI" },
      { property: "og:description", content: "Portfólio profissional de Arthur Tavares — infraestrutura, automação e inovação em TI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
