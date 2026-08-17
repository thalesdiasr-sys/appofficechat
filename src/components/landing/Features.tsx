import { MessagesSquare, KanbanSquare, Megaphone, Bot, Workflow, Zap } from "lucide-react";

const features = [
  {
    id: "recursos",
    icon: MessagesSquare,
    title: "Multiatendimento Pro",
    items: [
      "WhatsApp, Instagram e Facebook",
      "API Oficial da Meta inclusa",
      "Multiusuário e Departamentos",
      "Histórico Unificado 360°",
    ],
  },
  {
    id: "crm",
    icon: KanbanSquare,
    title: "CRM Kanban Nativo",
    items: [
      "Funil visual arrastar e soltar",
      "Múltiplos pipelines por setor",
      "Valor e temperatura do lead",
      "Follow-up Automático nativo",
    ],
  },
  {
    icon: Megaphone,
    title: "Disparos Inteligentes",
    items: [
      "Comportamento humano (anti-ban)",
      "Rotação de números automática",
      "Segmentação por tags e listas",
      "Anexos de mídia completos",
    ],
  },
  {
    icon: Bot,
    title: "Agentes de IA Treináveis",
    items: [
      "Atendimento 24h humanizado",
      "Treinamento via PDF, Site e Texto",
      "Qualificação de leads automática",
      "Transferência para humanos",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automação",
    items: [
      "Editor visual no-code intuitivo",
      "Gatilhos por palavra-chave",
      "Agendamento de mensagens",
      "Webhooks e integrações",
    ],
  },
  {
    icon: Zap,
    title: "Escalabilidade Real",
    items: [
      "Sem limite de conversas",
      "Dashboard de métricas em tempo real",
      "Relatórios de performance",
      "App Mobile (PWA) incluso",
    ],
  },
];

export function Features() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Poder total de automação</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Recursos projetados para empresas que levam a sério as vendas por mensagem.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            id={f.id}
            className="group relative flex flex-col rounded-[2.5rem] border border-border/50 bg-white p-8 transition-all hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 scroll-mt-24"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-surface transition-colors group-hover:bg-brand/10">
              <f.icon className="size-6 text-foreground transition-colors group-hover:text-brand" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">{f.title}</h3>
            <ul className="mt-6 space-y-3 flex-1">
              {f.items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                  <span className="size-1 rounded-full bg-brand/30" />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}