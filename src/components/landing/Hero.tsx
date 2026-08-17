import { Star, Users, MessageCircle, Trophy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const metrics = [
  { value: "21x", label: "mais conversão respondendo em até 5 min" },
  { value: "85%", label: "mais chances de fechar a venda" },
  { value: "24h", label: "de atendimento com Agentes de IA" },
];

const badges = [
  { icon: Star, label: "4.9/5 de avaliação" },
  { icon: Users, label: "+500 empresas ativas" },
  { icon: MessageCircle, label: "+10M de mensagens" },
  { icon: Trophy, label: "Top 1 em IA" },
];

export function Hero() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-hero">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Plataforma de multiatendimento com Inteligência Artificial
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Aumente em até <span className="text-brand">40% suas vendas</span> organizando e
            automatizando seu atendimento
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Centralize WhatsApp, Instagram e Facebook em uma única tela, com CRM Kanban, agentes de
            IA e fluxos automáticos trabalhando por você.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#planos">Testar grátis 2 dias</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#recursos">Ver recursos</a>
            </Button>
          </div>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-primary" /> Sem cartão de crédito
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-primary" /> Cancele quando quiser
            </span>
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="card-surface overflow-hidden p-2 shadow-glow">
            <img
              src={heroDashboard}
              alt="Painel do OfficeChat com caixa de entrada unificada e CRM Kanban"
              width={1440}
              height={960}
              className="w-full rounded-xl"
            />
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.value} className="card-surface p-6 text-center">
              <dt className="font-display text-3xl font-bold text-brand">{m.value}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <b.icon className="size-4 text-primary" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}