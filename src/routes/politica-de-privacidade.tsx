import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — OfficeChat" },
      { name: "description", content: "Saiba como o OfficeChat protege seus dados e respeita sua privacidade conforme a LGPD." },
      { property: "og:title", content: "Política de Privacidade — OfficeChat" },
      { property: "og:description", content: "Saiba como o OfficeChat protege seus dados e respeita sua privacidade conforme a LGPD." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://officechat.com.br/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://officechat.com.br/politica-de-privacidade" }],
  }),
  component: PrivacyPolicy,
});
