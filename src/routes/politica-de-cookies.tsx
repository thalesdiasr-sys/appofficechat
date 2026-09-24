import { createFileRoute } from "@tanstack/react-router";
import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — OfficeChat" },
      { name: "description", content: "Saiba como o OfficeChat utiliza cookies e tecnologias semelhantes, e como gerenciar seu consentimento." },
      { property: "og:title", content: "Política de Cookies — OfficeChat" },
      { property: "og:description", content: "Saiba como o OfficeChat utiliza cookies e tecnologias semelhantes, e como gerenciar seu consentimento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://officechat.com.br/politica-de-cookies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://officechat.com.br/politica-de-cookies" }],
  }),
  component: CookiePolicy,
});
