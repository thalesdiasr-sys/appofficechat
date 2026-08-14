import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Light",
    price: "199",
    accent: "bg-accent",
    features: ["1 conexão WhatsApp (QR Code)", "Até 3 atendentes", "Até 5 departamentos"],
  },
  {
    name: "Starter",
    price: "249",
    accent: "bg-warning",
    features: [
      "1 conexão WhatsApp + Instagram + Facebook",
      "Até 5 atendentes",
      "Até 10 departamentos",
    ],
  },
  {
    name: "Pro",
    price: "299",
    accent: "bg-primary",
    highlight: true,
    features: [
      "WhatsApp + API Oficial Meta + Instagram + Facebook",
      "Até 10 atendentes",
      "CRM Kanban nativo",
      "Follow-up automático",
    ],
  },
  {
    name: "Max",
    price: "349",
    accent: "bg-destructive",
    features: [
      "3 conexões WhatsApp + API Oficial Meta + IG + FB",
      "Até 10 atendentes e 10 departamentos",
      "CRM Kanban + follow-up automático",
      "Módulos e integrações completas",
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-20 bg-hero">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Planos e preços</h2>
          <p className="mt-3 text-muted-foreground">
            Todos os planos com 7 dias grátis, sem cartão de crédito e sem fidelidade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-surface relative flex flex-col p-7 ${
                p.highlight ? "border-primary/50 shadow-glow xl:-mt-4 xl:pb-10" : ""
              }`}
            >
              {p.highlight && (
                <span className="bg-brand text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold">
                  Mais vendido
                </span>
              )}
              <span className={`h-1.5 w-10 rounded-full ${p.accent}`} />
              <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">,00 /mês</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.highlight ? "hero" : "heroOutline"}
                size="lg"
                className="mt-7 w-full"
              >
                Testar grátis 7 dias
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}