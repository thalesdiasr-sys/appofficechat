import { createFileRoute } from "@tanstack/react-router";
import metaPrivacyPdf from "@/assets/politica-de-privacidade-meta-app-officechat.pdf.asset.json";

export const Route = createFileRoute("/privacidade-meta-app")({
  beforeLoad: () => {
    window.location.href = metaPrivacyPdf.url;
  },
  component: () => null,
});
