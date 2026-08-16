import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { Pains } from "@/components/landing/Pains";
import { Features } from "@/components/landing/Features";
import { Comparison } from "@/components/landing/Comparison";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Segments } from "@/components/landing/Segments";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

const title = "OfficeChat — Multiatendimento com IA para WhatsApp";
const description =
  "Centralize WhatsApp, Instagram e Facebook em uma tela, com CRM Kanban, agentes de IA e automações. Teste grátis 7 dias, sem cartão.";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Pains />
        <Features />
        <Comparison />
        <Pricing />
        <Testimonials />
        <Segments />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
