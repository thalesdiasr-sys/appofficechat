import { TrendingDown, TrendingUp, DollarSign, Clock, Users, Bot, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Economy() {
  return (
    <section id="economia" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 ring-1 ring-inset ring-emerald-600/20">
          <Calculator className="size-4" />
          <span>Economia Inteligente</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Reduza seus custos em até <span className="text-primary">75%</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          O atendimento tradicional é caro, lento e limitado. Com o OfficeChat, você escala sua operação sem aumentar sua folha de pagamento.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Atendimento Tradicional */}
        <div className="relative flex flex-col rounded-3xl border border-destructive/20 bg-white/50 p-8 shadow-sm transition-all hover:bg-white/80 sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-destructive/10">
              <TrendingDown className="size-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Equipe Humana</h3>
              <p className="text-sm text-muted-foreground">O modelo que trava o seu crescimento</p>
            </div>
          </div>
          
          <div className="mt-10 space-y-8 flex-grow">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <span className="text-xs font-bold text-destructive">✕</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Altos Encargos Trabalhistas</p>
                <p className="text-sm text-muted-foreground">Salários, impostos, férias e benefícios tornam cada novo atendente um peso enorme no caixa.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <span className="text-xs font-bold text-destructive">✕</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Capacidade Limitada</p>
                <p className="text-sm text-muted-foreground">Um humano atende poucas pessoas por vez. Em picos de demanda, seus clientes ficam esperando.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <span className="text-xs font-bold text-destructive">✕</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Erros e Fadiga</p>
                <p className="text-sm text-muted-foreground">Humanos cansam, esquecem detalhes e variam o humor, afetando a qualidade do atendimento.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-destructive/10 pt-8">
            <div className="flex justify-between items-center text-destructive">
              <span className="font-medium">Custo por Lead Qualificado</span>
              <span className="text-2xl font-bold">R$ 15,00+</span>
            </div>
          </div>
        </div>

        {/* OfficeChat IA */}
        <div className="relative flex flex-col rounded-3xl border-2 border-primary bg-white p-8 shadow-xl transition-all sm:p-10">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground shadow-lg">
            A ESCOLHA LUCRATIVA
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
              <Bot className="size-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">OfficeChat IA</h3>
              <p className="text-sm text-primary font-medium">Escalabilidade infinita e custo fixo</p>
            </div>
          </div>

          <div className="mt-10 space-y-8 flex-grow">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle2 className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Um Único Investimento Fixo</p>
                <p className="text-sm text-muted-foreground">Atenda milhares de clientes simultaneamente sem contratar mais ninguém.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle2 className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Disponibilidade Total 24/7</p>
                <p className="text-sm text-muted-foreground">Sua IA nunca dorme. Responde instantaneamente no domingo às 3h da manhã.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle2 className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Padrão Ouro de Atendimento</p>
                <p className="text-sm text-muted-foreground">Respostas precisas, educadas e focadas em conversão, 100% do tempo.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-primary/10 pt-8">
            <div className="flex justify-between items-center text-primary">
              <span className="font-medium">Custo por Lead Qualificado</span>
              <span className="text-2xl font-bold">R$ 2,50</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-white sm:p-16 lg:p-20">
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pare de queimar dinheiro com atendimento ineficiente
            </h3>
            <p className="mt-6 text-lg text-white/70">
              Nossa tecnologia permite que você reduza sua equipe de triagem e foque seus vendedores apenas no fechamento.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-bold" asChild>
                <a href="https://app.officechat.com.br/login">
                  Quero Economizar Agora
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/10">
              <p className="text-5xl font-bold text-primary">-75%</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">Custos de Operação</p>
              <p className="mt-4 text-xs text-white/40 italic">* Média baseada em clientes OfficeChat</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm border border-white/10">
              <p className="text-5xl font-bold text-primary">+300%</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">Produtividade</p>
              <p className="mt-4 text-xs text-white/40 italic">* Leads qualificados por hora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}