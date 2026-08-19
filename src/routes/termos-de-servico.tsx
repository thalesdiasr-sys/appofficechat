import { createFileRoute } from "@tanstack/react-router";
import termsPdf from "@/assets/termos-de-servico-officechat.pdf.asset.json";

export const Route = createFileRoute("/termos-de-servico")({
  beforeLoad: () => {
    window.location.href = termsPdf.url;
  },
  component: () => null,
});
