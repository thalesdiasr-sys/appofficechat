import { createFileRoute } from "@tanstack/react-router";
import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — OfficeChat" },
      { name: "description", content: "Saiba como o OfficeChat utiliza cookies e tecnologias semelhantes, e como gerenciar seu consentimento." },
    ],

  }),
  component: CookiePolicy,
});
