import { Star, Users, MessageCircle, Trophy, Check, Send, Bot, User, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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

function FakeDashboard() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      {/* Main Glass Container */}
      <div className="rounded-[2.5rem] border border-primary/10 bg-white/40 p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm border border-border/50">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border/40 bg-surface/30 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20">
                <Bot className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">OfficeChat AI</h4>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Agente Ativo</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
              <div className="size-2.5 rounded-full bg-border" />
            </div>
          </div>

          <div className="grid grid-cols-12 h-[500px]">
            {/* Sidebar Left */}
            <div className="col-span-3 border-r border-border/40 bg-surface/10 p-4 hidden md:block">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl ${i === 1 ? 'bg-white shadow-sm ring-1 ring-border/50' : 'opacity-40'}`}>
                    <div className="size-10 rounded-full bg-surface" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-20 rounded-full bg-border" />
                      <div className="h-1.5 w-12 rounded-full bg-border/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-12 md:col-span-6 flex flex-col bg-white">
              <div className="flex-1 p-6 space-y-6 overflow-hidden">
                {/* Message Client */}
                <div className="flex gap-3">
                  <div className="size-9 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <User className="size-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-2 max-w-[80%]">
                    <div className="rounded-2xl rounded-tl-none bg-surface px-4 py-3 text-sm text-foreground shadow-sm">
                      Olá! Gostaria de saber o valor do plano Starter.
                    </div>
                    <span className="text-[10px] text-muted-foreground ml-1">14:35</span>
                  </div>
                </div>

                {/* Message AI */}
                <div className="flex flex-row-reverse gap-3">
                  <div className="size-9 rounded-full bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
                    <Bot className="size-5 text-white" />
                  </div>
                  <div className="space-y-2 max-w-[80%] items-end flex flex-col">
                    <div className="rounded-2xl rounded-tr-none bg-brand px-4 py-3 text-sm text-white shadow-lg shadow-brand/20">
                      Olá! O plano Starter custa R$ 249/mês. Ele inclui 3 usuários, 1 conexão e todos os recursos de IA. Gostaria de iniciar um teste grátis agora? 🚀
                    </div>
                    <span className="text-[10px] text-muted-foreground mr-1">14:35</span>
                  </div>
                </div>

                {/* Typing status */}
                <div className="flex gap-3 opacity-50">
                  <div className="size-9 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <User className="size-5 text-muted-foreground" />
                  </div>
                  <div className="bg-surface px-4 py-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="size-1.5 rounded-full bg-muted-foreground animate-bounce" />
                      <div className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.2s]" />
                      <div className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border/40">
                <div className="flex items-center gap-3 bg-surface/50 rounded-2xl px-4 py-3 border border-border/30">
                  <div className="flex-1 text-sm text-muted-foreground">Digite sua mensagem...</div>
                  <Send className="size-5 text-brand" />
                </div>
              </div>
            </div>

            {/* CRM Kanban Right */}
            <div className="col-span-3 bg-surface/5 p-4 hidden md:block">
              <div className="mb-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pipeline de Vendas</div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white shadow-sm border border-border/40 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-16 rounded-full bg-brand/20" />
                    <span className="text-[9px] font-bold text-brand">R$ 249,00</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-surface" />
                  <div className="flex items-center gap-1">
                    <div className="size-4 rounded-full bg-surface" />
                    <div className="h-1 w-10 rounded-full bg-border" />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/50 border border-dashed border-border/60">
                  <div className="h-1.5 w-12 rounded-full bg-border/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -right-8 top-1/4 rounded-2xl bg-white p-4 shadow-xl border border-border/50 hidden lg:block animate-bounce [animation-duration:4s]">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="size-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Lead Qualificado</p>
              <p className="text-[10px] text-muted-foreground">via Agente de IA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-hero pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
            <Bot className="size-3.5" />
            <span>A Revolução do Atendimento com IA Real</span>
          </div>
          
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl text-foreground tracking-tight">
            Aumente em até <span className="text-brand">40% suas vendas</span> com IA que atende de forma humanizada
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automatize seu atendimento e traga agilidade e retorno imediato. 
            Centralize WhatsApp, Instagram e Facebook em uma única tela inteligente.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="xl" className="h-16 px-10 text-lg font-bold bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-2xl" asChild>
              <a href="https://app.officechat.com.br/login">Teste Grátis Agora</a>
            </Button>
            <Button variant="outline" size="xl" className="h-16 px-10 text-lg font-bold border-border bg-white/50 backdrop-blur-sm hover:bg-white transition-all rounded-2xl" asChild>
              <a href="#recursos">Ver recursos</a>
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground/80">
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-primary" /> Sem cartão de crédito
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-primary" /> Setup em 2 minutos
            </span>
          </div>
        </div>

        <FakeDashboard />

        <dl className="mx-auto mt-24 grid max-w-4xl gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.value} className="card-surface p-8 text-center bg-white/60 backdrop-blur-sm hover:scale-[1.02] transition-transform">
              <dt className="font-display text-4xl font-bold text-brand tracking-tighter">{m.value}</dt>
              <dd className="mt-2 text-sm font-bold text-foreground/70 uppercase tracking-wide">{m.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {badges.map((b) => (
            <li key={b.label} className="flex items-center gap-2.5 text-sm font-bold text-muted-foreground/60 transition-opacity hover:opacity-100">
              <b.icon className="size-4 text-primary/70" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}