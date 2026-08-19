import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — OfficeChat" },
      { name: "description", content: "Saiba como o OfficeChat protege seus dados e respeita sua privacidade conforme a LGPD." },
    ],
  }),
  component: PrivacyPolicy,
});
