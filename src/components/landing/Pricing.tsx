import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pro",
    price: "299",
    accent: "bg-primary",
    features: [
      "4 Usuários",
      "2 Conexões",
      "10 Filas",
      "Whatsapp Oficial",
      "Facebook",
      "Instagram",
      "CRM Kanban Nativo",
      "Follow-up Automático",
      "Integrações",
      "Campanhas",
      "Chat Interno",
      "Agentes de IA",
    ],
  },
  {
    name: "Starter",
    price: "249",
    accent: "bg-warning",
    highlight: true,
    features: [
      "3 Usuários",
      "1 Conexão",
      "5 Filas",
      "Whatsapp Oficial",
      "Facebook",
      "Instagram",
      "Integrações",
      "Campanhas",
      "Mensagens agendadas",
      "Chat Interno",
      "Agentes de IA",
      "Tarefas",
      "Produtos",
    ],
  },
  {
    name: "Max",
    price: "349",
    accent: "bg-destructive",
    features: [
      "6 Usuários",
      "3 Conexões",
      "10 Filas",
      "Whatsapp Oficial",
      "Facebook",
      "Instagram",
      "CRM Kanban + Follow-up",
      "Módulos & Integrações Completas",
      "Disparo em massa inteligente",
      "IA Workflow avançado",
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
            Todos os planos com teste grátis e sem cartão de crédito.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-surface relative flex flex-col p-6 transition-all duration-300 hover:scale-[1.02] ${
                p.highlight ? "border-primary/50 shadow-glow xl:-mt-2 xl:pb-8" : "hover:border-primary/30"
              }`}
            >
              {p.highlight && (
                <span className="bg-brand text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  Mais vendido
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className={`h-1 w-8 rounded-full ${p.accent}`} />
                <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
              </div>
              
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-xs font-medium text-muted-foreground">R$</span>
                <span className="font-display text-3xl font-bold tracking-tighter">{p.price}</span>
                <span className="text-xs text-muted-foreground">,00/mês</span>
              </div>

              <div className="my-5 h-px w-full bg-border/50" />

              <ul className="grid flex-1 grid-cols-2 gap-x-3 gap-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[11px] leading-tight text-muted-foreground/90">
                    <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                    <span className="line-clamp-2">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={p.highlight ? "hero" : "heroOutline"}
                size="sm"
                className="mt-6 w-full py-5 text-sm font-bold"
                asChild
              >
                <a href="https://app.officechat.com.br/login">Teste grátis</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}