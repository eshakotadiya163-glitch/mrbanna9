import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Social } from "@/components/site/Social";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MrBaNNa — Elite Trading Community, Signals & Courses" },
      { name: "description", content: "MrBaNNa: VIP signals, AI trading journal, master trader courses and premium indicators for serious traders." },
      { property: "og:title", content: "MrBaNNa — Elite Trading Community" },
      { property: "og:description", content: "Signals, courses, indicators, and community for serious traders." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <ParticleNetwork />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Social />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
