import { createFileRoute } from "@tanstack/react-router";
import { TermsOfService } from "@/components/legal/TermsOfService";

export const Route = createFileRoute("/termos-de-servico")({
  head: () => ({
    meta: [
      { title: "Termos de Serviço — OfficeChat" },
      { name: "description", content: "Regras e condições de uso da plataforma OfficeChat e suas integrações." },
    ],
  }),
  component: TermsOfService,
});
