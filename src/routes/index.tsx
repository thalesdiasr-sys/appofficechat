import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { Pains } from "@/components/landing/Pains";
import { Features } from "@/components/landing/Features";
import { Economy } from "@/components/landing/Economy";
import { Comparison } from "@/components/landing/Comparison";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Segments } from "@/components/landing/Segments";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

const title = "OfficeChat — Aumente em até 40% suas Vendas com IA Humanizada";
const description =
  "Centralize WhatsApp, Instagram e Facebook em uma tela inteligente. IA humanizada 24h, CRM Kanban e automação de vendas. Teste grátis hoje!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand/[0.03] to-transparent pointer-events-none" />
          <Steps />
          <Pains />
        </div>

        <div className="bg-surface/30">
          <Features />
        </div>

        <Economy />
        
        <div className="bg-surface/30">
          <Comparison />
        </div>

        <Pricing />
        
        <div className="relative py-24 bg-surface/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-border/50" />
          <Testimonials />
          <Segments />
          <div className="absolute bottom-0 left-0 w-full h-px bg-border/50" />
        </div>

        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
