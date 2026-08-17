import { TrendingDown, TrendingUp, DollarSign, Clock, Users, Bot } from "lucide-react";

export function Economy() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Economize mais de <span className="text-primary">70%</span> no seu custo operacional
        </h2>
        <p className="mt-3 text-muted-foreground">
          Compare a eficiência do atendimento tradicional com o poder da Inteligência Artificial do OfficeChat.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Atendimento Tradicional */}
        <div className="card-surface border-destructive/20 p-8 opacity-80 transition-all hover:opacity-100">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10">
              <TrendingDown className="size-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold">Atendimento Tradicional</h3>
          </div>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <Users className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-destructive">Equipe cara e limitada</p>
                <p className="text-sm text-muted-foreground">Cada novo atendente aumenta drasticamente sua folha de pagamento e impostos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <Clock className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-destructive">Horário comercial restrito</p>
                <p className="text-sm text-muted-foreground">Leads que chegam à noite ou fim de semana esperam horas para serem atendidos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <DollarSign className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-destructive">Alto custo por lead</p>
                <p className="text-sm text-muted-foreground">O custo humano para qualificar um lead frio torna a operação ineficiente.</p>
              </div>
            </div>
          </div>
        </div>

        {/* OfficeChat IA */}
        <div className="card-surface relative border-primary/30 p-8 shadow-glow transition-transform hover:-translate-y-1">
          <div className="absolute -right-2 -top-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
            RECOMENDADO
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Com OfficeChat IA</h3>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Bot className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-primary">Custo fixo e escalável</p>
                <p className="text-sm text-muted-foreground">Atenda 100 ou 10.000 clientes com o mesmo investimento mensal fixo.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-primary">Atendimento 24/7 instantâneo</p>
                <p className="text-sm text-muted-foreground">Zero tempo de espera. Sua IA responde, qualifica e agenda em segundos, dia e noite.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="size-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-primary">Qualificação automatizada</p>
                <p className="text-sm text-muted-foreground">Sua equipe só entra em contato com leads prontos para comprar, economizando tempo precioso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-8 rounded-3xl bg-primary/5 p-8 text-center ring-1 ring-primary/10 md:flex-row md:text-left">
        <div className="flex-1">
          <h4 className="text-2xl font-bold">Resultado Financeiro Real</h4>
          <p className="mt-2 text-muted-foreground max-w-lg">
            Empresas que migraram para o OfficeChat reduziram seu custo por lead qualificado de <span className="font-bold text-foreground">R$ 15,00</span> para menos de <span className="font-bold text-primary">R$ 2,50</span>.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
          <div>
            <p className="text-4xl font-bold text-primary">-75%</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Custo de Equipe</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">+300%</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Conversão Inicial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
