import { Check, X } from "lucide-react";

const rows: Array<[string, boolean, boolean, boolean]> = [
  ["Sem cobrança por usuário extra", true, false, false],
  ["Mensagens e conversas ilimitadas", true, false, true],
  ["CRM Kanban nativo incluso", true, false, false],
  ["Follow-up automático incluso", true, true, false],
  ["Integração nativa Mercado Pago / Asaas", true, false, false],
  ["Teste grátis de 7 dias sem cartão", true, false, false],
];

function Cell({ ok }: { ok: boolean }) {
  return ok ? (
    <Check className="mx-auto size-5 text-primary" aria-label="Sim" />
  ) : (
    <X className="mx-auto size-5 text-muted-foreground" aria-label="Não" />
  );
}

export function Comparison() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Por que OfficeChat</h2>
        <p className="mt-3 text-muted-foreground">
          Compare com as principais plataformas do mercado.
        </p>
      </div>

      <div className="card-surface mt-12 overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-5 text-left font-medium text-muted-foreground">Recurso</th>
              <th className="p-5 font-display text-base font-bold text-brand">OfficeChat</th>
              <th className="p-5 font-medium text-muted-foreground">Plataforma A</th>
              <th className="p-5 font-medium text-muted-foreground">Plataforma B</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b, c]) => (
              <tr key={label} className="border-b border-border/60 last:border-0">
                <td className="p-5 text-left">{label}</td>
                <td className="bg-primary/5 p-5 text-center">
                  <Cell ok={a} />
                </td>
                <td className="p-5 text-center">
                  <Cell ok={b} />
                </td>
                <td className="p-5 text-center">
                  <Cell ok={c} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}