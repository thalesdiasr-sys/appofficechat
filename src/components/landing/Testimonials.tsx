import { Star } from "lucide-react";

const items = [
  {
    name: "Juliana Soares",
    role: "Loja de Roupas — Maringá/PR",
    text: "Eu perdia muito lead fora do horário comercial. Hoje a IA responde de madrugada e no dia seguinte eu só fecho a venda.",
  },
  {
    name: "Ricardo Tavares",
    role: "Auto Peças — Cascavel/PR",
    text: "O CRM Kanban organizou tudo. Sei exatamente em que etapa cada orçamento está — vendi 3x mais em três meses.",
  },
  {
    name: "Fernanda Mello",
    role: "Pet Shop — Curitiba/PR",
    text: "Configurei sozinha em uma tarde. Os fluxos automáticos resolvem 70% das dúvidas antes de chegar na minha equipe.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Quem usa, vende mais</h2>
        <p className="mt-3 text-muted-foreground">Resultados reais de negócios como o seu.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="card-surface flex flex-col p-7">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="bg-brand text-primary-foreground flex size-10 items-center justify-center rounded-full font-semibold">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-medium">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}