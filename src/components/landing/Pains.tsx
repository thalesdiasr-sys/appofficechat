import { X, Check, ShieldAlert, Rocket } from "lucide-react";

const pains = [
  ["Leads perdidos por demora", "Perder vendas por não responder no instante exato."],
  ["Equipe sobrecarregada", "Atendentes repetindo as mesmas frases o dia todo."],
  ["Caos sem organização", "Não saber quem é o responsável por cada conversa."],
];

const gains = [
  ["Resposta em 10 segundos", "IA que atende e qualifica no momento da mensagem."],
  ["Escala sem contratações", "IA absorve 80% do trabalho repetitivo da equipe."],
  ["CRM Visual 360°", "Total controle do seu funil de vendas nativo."],
];

export function Pains() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 overflow-hidden">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-destructive ring-1 ring-destructive/20">
            <ShieldAlert className="size-3.5" />
            <span>O Problema</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            O caos no atendimento está matando seu lucro
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Seus leads não esperam. Cada minuto de demora é um passo a menos para o fechamento.
          </p>

          <ul className="mt-10 space-y-6">
            {pains.map(([title, text]) => (
              <li key={title} className="flex gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-destructive/20 text-destructive text-[10px] font-bold">✕</div>
                <div>
                  <p className="font-bold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-[2.5rem] border border-brand/20 bg-white p-8 shadow-2xl shadow-brand/5 sm:p-12 lg:p-16 transition-all hover:scale-[1.01]">
          <div className="absolute -top-4 -left-4 rounded-full bg-brand p-3 text-white shadow-lg shadow-brand/20">
            <Rocket className="size-6" />
          </div>
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            <span>A Solução OfficeChat</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Transforme caos em lucro previsível</h3>
          
          <ul className="mt-10 space-y-6">
            {gains.map(([title, text]) => (
              <li key={title} className="flex gap-4">
                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}