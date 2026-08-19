import { createFileRoute } from "@tanstack/react-router";
import { MetaPrivacy } from "@/components/legal/MetaPrivacy";

export const Route = createFileRoute("/privacidade-meta-app")({
  head: () => ({
    meta: [
      { title: "Privacidade Meta App — OfficeChat" },
      { name: "description", content: "Termos específicos para a integração do OfficeChat com APIs da Meta (Facebook e Instagram)." },
    ],
  }),
  component: MetaPrivacy,
});
