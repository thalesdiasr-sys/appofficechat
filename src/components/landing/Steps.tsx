import { UserPlus, QrCode, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Conta Grátis",
    text: "Cadastro ultra-rápido, sem cartão e sem burocracia.",
  },
  {
    icon: QrCode,
    title: "Conexão",
    text: "Conecte seu WhatsApp via QR Code em poucos segundos.",
  },
  {
    icon: TrendingUp,
    title: "Escala",
    text: "Atenda centenas de leads com IA e venda muito mais.",
  },
];

export function Steps() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Simplicidade que converte</h2>
        <p className="mt-4 text-lg text-muted-foreground">Do cadastro ao primeiro atendimento automático em menos de 5 minutos.</p>
      </div>

      <div className="mt-16 relative">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2 hidden lg:block" />
        
        <ol className="relative grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="group relative flex flex-col items-center text-center">
              <div className="relative flex size-20 items-center justify-center rounded-[2rem] bg-white border border-border/50 shadow-sm transition-all group-hover:shadow-lg group-hover:shadow-brand/5 group-hover:border-brand/20 z-10">
                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow-lg">
                  {i + 1}
                </span>
                <s.icon className="size-8 text-foreground transition-colors group-hover:text-brand" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-4 text-sm font-medium text-muted-foreground leading-relaxed max-w-[240px]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}