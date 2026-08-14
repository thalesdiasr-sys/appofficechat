import { MessagesSquare, KanbanSquare, Megaphone, Bot, Workflow } from "lucide-react";

const features = [
  {
    id: "recursos",
    icon: MessagesSquare,
    title: "Multiatendimento multicanal",
    items: [
      "WhatsApp por QR Code ou API Oficial da Meta",
      "Instagram Direct e Facebook Messenger na mesma caixa",
      "Histórico unificado por cliente",
      "Multiusuário, filas e departamentos",
    ],
  },
  {
    id: "crm",
    icon: KanbanSquare,
    title: "CRM Kanban nativo",
    items: [
      "Funil visual arrastar e soltar",
      "Cards com etapa, valor, temperatura e responsável",
      "Múltiplos Kanbans: Vendas, Suporte e Pós-venda",
      "Relatórios de conversão por etapa",
    ],
  },
  {
    icon: Megaphone,
    title: "Disparo em massa inteligente",
    items: [
      "Até 90% menos risco de banimento com comportamento natural",
      "Variações automáticas da mensagem e rotação de números",
      "Intervalos randomizados e segmentação por tag ou lista",
      "Anexos de imagem, vídeo, áudio e arquivos",
    ],
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    items: [
      "Atendimento e qualificação automática 24h por dia",
      "Treinamento com produtos, catálogo, PDFs e site",
      "IA Workflow com agente central e especialistas",
    ],
  },
  {
    icon: Workflow,
    title: "Construtor de fluxos no-code",
    items: [
      "Editor visual de arrastar blocos",
      'Gatilhos por palavra-chave (ex: digitou "preço")',
      "Mensagens agendadas e follow-up automático",
      "Roteamento inteligente entre setores",
    ],
  },
];

export function Features() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Tudo que seu atendimento precisa</h2>
        <p className="mt-3 text-muted-foreground">
          Recursos criados para equipes que vendem por mensagem todos os dias.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            id={f.id}
            className="card-surface scroll-mt-24 p-7 transition-shadow hover:shadow-glow"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/25">
              <f.icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {f.items.map((i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
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