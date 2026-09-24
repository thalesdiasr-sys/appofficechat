import { createFileRoute } from "@tanstack/react-router";
import { MetaPrivacy } from "@/components/legal/MetaPrivacy";

export const Route = createFileRoute("/privacidade-meta-app")({
  head: () => ({
    meta: [
      { title: "Privacidade Meta App — OfficeChat" },
      { name: "description", content: "Termos específicos para a integração do OfficeChat com APIs da Meta (Facebook e Instagram)." },
      { property: "og:title", content: "Privacidade Meta App — OfficeChat" },
      { property: "og:description", content: "Termos específicos para a integração do OfficeChat com APIs da Meta (Facebook e Instagram)." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://officechat.com.br/privacidade-meta-app" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://officechat.com.br/privacidade-meta-app" }],
  }),
  component: MetaPrivacy,
});
