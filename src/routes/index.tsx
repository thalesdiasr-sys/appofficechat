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

const canonical = "https://officechat.com.br/";

const plans = [
  { name: "OfficeChat Starter", price: "249.00", description: "Tudo para começar a vender com IA: 3 usuários, 1 conexão e Agentes de IA." },
  { name: "OfficeChat Pro", price: "299.00", description: "Ideal para times em crescimento: 4 usuários, 2 conexões e CRM Kanban nativo." },
  { name: "OfficeChat Max", price: "349.00", description: "Poder total para grandes operações: 6 usuários e 3 conexões." },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OfficeChat",
  description:
    "Plataforma de multiatendimento com Agentes de IA, CRM Kanban e integração com WhatsApp, Instagram e Facebook.",
  brand: { "@type": "Brand", name: "OfficeChat" },
  url: canonical,
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.description,
    price: plan.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: canonical,
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productSchema) },
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
