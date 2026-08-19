import { createFileRoute, redirect } from "@tanstack/react-router";
import termsPdf from "@/assets/termos-de-servico-officechat.pdf.asset.json";

export const Route = createFileRoute("/termos-de-servico")({
  beforeLoad: () => {
    throw redirect({ href: termsPdf.url });
  },
  component: () => null,
});
