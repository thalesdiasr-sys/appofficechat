import { Check, Star, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pro",
    price: "299",
    description: "Ideal para times em crescimento",
    features: [
      "4 Usuários",
      "2 Conexões",
      "10 Filas de atendimento",
      "WhatsApp Oficial",
      "Instagram & Facebook",
      "CRM Kanban Nativo",
      "Follow-up Automático",
      "API de Integração",
      "Agentes de IA",
      "Chat Interno",
    ],
  },
  {
    name: "Starter",
    price: "249",
    description: "Tudo para começar a vender com IA",
    highlight: true,
    features: [
      "3 Usuários",
      "1 Conexão",
      "5 Filas de atendimento",
      "WhatsApp Oficial",
      "Instagram & Facebook",
      "API de Integração",
      "Agentes de IA",
      "Chat Interno",
      "Mensagens Agendadas",
      "Gestão de Contatos",
    ],
  },
  {
    name: "Max",
    price: "349",
    description: "Poder total para grandes operações",
    features: [
      "6 Usuários",
      "3 Conexões",
      "15 Filas de atendimento",
      "WhatsApp Oficial",
      "Instagram & Facebook",
      "CRM Kanban + Follow-up",
      "Disparo em Massa Inteligente",
      "Workflow de IA Avançado",
      "Relatórios de Performance",
      "Suporte Prioritário",
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
          <Zap className="size-3.5" />
          <span>Preço Justo & Sem Taxas</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl">
          Escolha o seu plano
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Sem taxas ocultas, sem cartão de crédito. <br className="hidden sm:block" />
          Teste grátis agora e sinta o poder da automação.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-300 ${
              p.highlight
                ? "bg-white border-2 border-brand shadow-2xl shadow-brand/10 scale-105 z-10"
                : "bg-surface/50 border border-border/50 hover:bg-white hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                <div className="flex items-center gap-1.5">
                  <Star className="size-3 fill-white" />
                  Mais Escolhido
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{p.description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-xl font-bold text-foreground">R$</span>
              <span className="text-6xl font-display font-bold tracking-tighter text-foreground">{p.price}</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">/mês</span>
            </div>

            <div className="mb-8 h-px w-full bg-border/50" />

            <ul className="flex-1 space-y-4">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-bold text-foreground/80">
                  <div className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${p.highlight ? 'bg-brand/10 text-brand' : 'bg-surface text-muted-foreground/60'}`}>
                    <Check className="size-3" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              size="xl"
              className={`mt-10 h-16 w-full text-lg font-bold rounded-2xl transition-all ${
                p.highlight
                  ? "bg-brand text-white shadow-xl shadow-brand/20 hover:shadow-2xl"
                  : "bg-white border border-border text-foreground hover:border-brand/30 hover:bg-brand/5"
              }`}
              asChild
            >
              <a href="https://app.officechat.com.br/login">Teste Grátis</a>
            </Button>
            
            <p className="mt-4 text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
              Cancelamento instantâneo
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-2xl bg-surface/80 border border-border/50 px-6 py-3 text-sm font-bold text-muted-foreground backdrop-blur-sm">
          <ShieldCheck className="size-5 text-brand" />
          API Oficial da Meta inclusa em todos os planos
        </div>
      </div>
    </section>
  );
}