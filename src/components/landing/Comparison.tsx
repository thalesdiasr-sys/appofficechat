import { Check, X, ShieldCheck } from "lucide-react";

const rows: Array<[string, boolean, boolean, boolean]> = [
  ["Sem taxa por usuário extra", true, false, false],
  ["Mensagens ilimitadas", true, false, true],
  ["CRM Kanban Nativo", true, false, false],
  ["Agentes de IA Treináveis", true, false, false],
  ["Follow-up Automático", true, true, false],
  ["API Oficial Meta Inclusa", true, false, false],
  ["Setup em 2 minutos", true, false, false],
];

function Cell({ ok, isMain }: { ok: boolean; isMain?: boolean }) {
  return ok ? (
    <div className={`mx-auto flex size-8 items-center justify-center rounded-full ${isMain ? 'bg-brand/10 text-brand' : 'bg-emerald-50 text-emerald-600'}`}>
      <Check className="size-4" />
    </div>
  ) : (
    <div className="mx-auto flex size-8 items-center justify-center rounded-full bg-destructive/5 text-destructive/40">
      <X className="size-4" />
    </div>
  );
}

export function Comparison() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
          <ShieldCheck className="size-3.5" />
          <span>Comparativo Premium</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Por que nos escolher?</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Somos a única plataforma que une IA humanizada com CRM nativo sem taxas ocultas.
        </p>
      </div>

      <div className="mt-20 overflow-x-auto rounded-[2.5rem] border border-border/50 bg-white p-2 shadow-sm">
        <table className="w-full min-w-[600px] border-separate border-spacing-0 overflow-hidden rounded-[2rem]">
          <thead>
            <tr>
              <th className="bg-surface/30 p-8 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-b border-border/50">Recursos</th>
              <th className="bg-brand/5 p-8 text-center border-b border-brand/20">
                <span className="font-display text-lg font-bold lowercase tracking-tight text-foreground">
                  office<span className="text-brand">chat</span>
                </span>
              </th>
              <th className="bg-surface/30 p-8 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-b border-border/50">Outras</th>
              <th className="bg-surface/30 p-8 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-b border-border/50">WhatsApp Web</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, a, b, c], idx) => (
              <tr key={label} className="group">
                <td className={`p-6 text-sm font-bold text-foreground border-b border-border/40 ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                  {label}
                </td>
                <td className={`bg-brand/[0.02] p-6 text-center border-b border-brand/10 ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                  <Cell ok={a} isMain />
                </td>
                <td className={`p-6 text-center border-b border-border/40 ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
                  <Cell ok={b} />
                </td>
                <td className={`p-6 text-center border-b border-border/40 ${idx === rows.length - 1 ? 'border-b-0' : ''}`}>
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