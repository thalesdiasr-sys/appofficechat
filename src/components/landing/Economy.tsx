import { TrendingDown, TrendingUp, Bot, Calculator, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Economy() {
  return (
    <section id="economia" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand ring-1 ring-brand/20">
          <Calculator className="size-3.5" />
          <span>Matemática do Lucro</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl">
          Economize <span className="text-brand">75%</span> e venda muito mais
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          O modelo tradicional de atendimento é o maior gargalo do seu crescimento. 
          Escalar com IA é a única forma de manter margens altas em 2026.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Atendimento Tradicional */}
        <div className="group relative flex flex-col rounded-[2.5rem] border border-border/50 bg-white p-8 transition-all hover:border-destructive/20 sm:p-12">
          <div className="flex items-center gap-5">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-destructive/5 text-destructive transition-colors group-hover:bg-destructive/10">
              <ShieldAlert className="size-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Equipe Humana</h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">O gargalo que trava seu lucro</p>
            </div>
          </div>
          
          <div className="mt-12 space-y-10 flex-grow">
            <div className="flex items-start gap-5">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/5 text-destructive text-[10px] font-bold">✕</div>
              <div>
                <p className="text-lg font-bold text-foreground">Custo Fixo Pesado</p>
                <p className="text-sm font-medium text-muted-foreground mt-1.5 leading-relaxed">Salários e encargos que consomem sua margem de lucro a cada nova contratação.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/5 text-destructive text-[10px] font-bold">✕</div>
              <div>
                <p className="text-lg font-bold text-foreground">Limitação de Escala</p>
                <p className="text-sm font-medium text-muted-foreground mt-1.5 leading-relaxed">Humanos atendem um por vez. Em picos de demanda, o cliente desiste e vai para o concorrente.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex justify-between items-center text-destructive">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Custo por Lead</span>
              <span className="text-3xl font-display font-bold tracking-tighter">R$ 15,00+</span>
            </div>
          </div>
        </div>

        {/* OfficeChat IA */}
        <div className="relative flex flex-col rounded-[2.5rem] border-2 border-brand bg-white p-8 shadow-2xl shadow-brand/5 sm:p-12 transition-all hover:scale-[1.01]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-6 py-2 text-xs font-bold text-white shadow-xl shadow-brand/20 uppercase tracking-widest">
            Altamente Lucrativo
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Bot className="size-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">OfficeChat IA</h3>
              <p className="text-sm font-bold text-brand mt-0.5">Escalabilidade infinita</p>
            </div>
          </div>

          <div className="mt-12 space-y-10 flex-grow">
            <div className="flex items-start gap-5">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CheckCircle2 className="size-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Investimento Único</p>
                <p className="text-sm font-medium text-muted-foreground mt-1.5 leading-relaxed">Atenda 1.000 pessoas ao mesmo tempo pelo mesmo valor. Custo fixo, lucro variável.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CheckCircle2 className="size-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Disponibilidade 24/7</p>
                <p className="text-sm font-medium text-muted-foreground mt-1.5 leading-relaxed">Sua IA nunca dorme ou fica doente. Resposta instantânea inclusive em feriados.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand/10">
            <div className="flex justify-between items-center text-brand">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Custo por Lead</span>
              <span className="text-3xl font-display font-bold tracking-tighter">R$ 2,50</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-[3rem] bg-surface/50 border border-border/50 p-8 sm:p-16 lg:p-20 relative">
        <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              A decisão que vai dobrar seu lucro este ano
            </h3>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
              Não é sobre substituir humanos, é sobre dar superpoderes à sua equipe e reduzir o desperdício de leads.
            </p>
            
            <Button size="xl" className="mt-10 h-16 px-10 text-lg font-bold bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-2xl transition-all rounded-2xl w-full sm:w-auto" asChild>
              <a href="https://app.officechat.com.br/login">
                Quero Economizar Agora
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-border/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand/5 flex flex-col items-center text-center">
              <p className="text-7xl font-display font-bold text-brand mb-6 tracking-tighter">-75%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 leading-relaxed">CUSTOS DE<br/>OPERAÇÃO</p>
            </div>
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-border/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand/5 flex flex-col items-center text-center">
              <p className="text-7xl font-display font-bold text-brand mb-6 tracking-tighter">+300%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 leading-relaxed">CONVERSÃO EM<br/>VENDAS</p>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}