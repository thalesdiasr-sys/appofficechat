import { createFileRoute } from "@tanstack/react-router";
import { TermsOfService } from "@/components/legal/TermsOfService";

export const Route = createFileRoute("/termos-de-servico")({
  head: () => ({
    meta: [
      { title: "Termos de Serviço — OfficeChat" },
      { name: "description", content: "Regras e condições de uso da plataforma OfficeChat e suas integrações." },
      { property: "og:title", content: "Termos de Serviço — OfficeChat" },
      { property: "og:description", content: "Regras e condições de uso da plataforma OfficeChat e suas integrações." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://officechat.com.br/termos-de-servico" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://officechat.com.br/termos-de-servico" }],
  }),
  component: TermsOfService,
});
