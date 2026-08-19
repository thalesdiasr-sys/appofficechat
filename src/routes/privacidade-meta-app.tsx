import { createFileRoute, redirect } from "@tanstack/react-router";
import metaPrivacyPdf from "@/assets/politica-de-privacidade-meta-app-officechat.pdf.asset.json";

export const Route = createFileRoute("/privacidade-meta-app")({
  beforeLoad: () => {
    throw redirect({ href: metaPrivacyPdf.url });
  },
  component: () => null,
});
