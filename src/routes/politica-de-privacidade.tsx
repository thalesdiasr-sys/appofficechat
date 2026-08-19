import { createFileRoute } from "@tanstack/react-router";
import privacyPdf from "@/assets/politica-de-privacidade-officechat.pdf.asset.json";

export const Route = createFileRoute("/politica-de-privacidade")({
  beforeLoad: () => {
    window.location.href = privacyPdf.url;
  },
  component: () => null,
});
