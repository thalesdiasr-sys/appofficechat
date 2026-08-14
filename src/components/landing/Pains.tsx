import { X, Check } from "lucide-react";

const pains = [
  ["Leads respondidos tarde", "Você perde a venda para o concorrente que respondeu primeiro."],
  ["Equipe sobrecarregada", "Atendentes respondendo as mesmas perguntas o dia todo."],
  ["Sem visibilidade do funil", "Ninguém sabe em que etapa cada lead está."],
  ["Atendimento custa caro", "Mais demanda significa mais gente na folha de pagamento."],
];

const gains = [
  ["Resposta em segundos", "Fluxos automáticos atendem no instante da primeira mensagem."],
  ["Equipe organizada por setor", "Departamentos, filas e tags distribuindo cada conversa."],
  ["CRM Kanban visual", "Funil nativo dentro do WhatsApp, com etapa e valor do negócio."],
  ["Mais resultado, menos custo", "O trabalho de uma equipe inteira com poucos atendentes."],
];

export function Pains() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">O problema real</h2>
        <p className="mt-3 text-muted-foreground">
          Não é falta de leads. É falta de organização no atendimento.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="card-surface border-destructive/30 p-8">
          <h3 className="text-xl font-semibold">Sem o OfficeChat</h3>
          <ul className="mt-6 space-y-5">
            {pains.map(([title, text]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                  <X className="size-3.5 text-destructive" />
                </span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface border-primary/30 p-8 shadow-glow">
          <h3 className="text-xl font-semibold">Com o OfficeChat</h3>
          <ul className="mt-6 space-y-5">
            {gains.map(([title, text]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="size-3.5 text-primary" />
                </span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}