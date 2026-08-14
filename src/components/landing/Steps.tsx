import { UserPlus, QrCode, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua conta grátis",
    text: "Cadastro em 2 minutos, sem cartão de crédito e sem burocracia.",
  },
  {
    icon: QrCode,
    title: "Conecte seu WhatsApp",
    text: "Via QR Code ou API Oficial da Meta. Instagram e Facebook no mesmo lugar.",
  },
  {
    icon: TrendingUp,
    title: "Comece a vender mais",
    text: "Organize equipe, departamentos e tags — e deixe a IA atender 24h.",
  },
];

export function Steps() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Simples assim</h2>
        <p className="mt-3 text-muted-foreground">Três passos para sair do caos do atendimento.</p>
      </div>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="card-surface relative p-7">
            <span className="font-display absolute right-6 top-5 text-5xl font-bold text-muted/60">
              {i + 1}
            </span>
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand">
              <s.icon className="size-5 text-primary-foreground" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}