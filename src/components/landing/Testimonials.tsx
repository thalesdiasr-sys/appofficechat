import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Juliana Soares",
    role: "Proprietária de E-commerce",
    text: "Eu perdia muitos leads fora do horário comercial. Hoje a IA responde de madrugada e qualifica o cliente. No dia seguinte, minha equipe só precisa fechar a venda.",
    avatar: "JS",
  },
  {
    name: "Ricardo Tavares",
    role: "Gerente de Vendas",
    text: "O CRM Kanban nativo organizou nosso fluxo. Agora sabemos exatamente em que etapa cada orçamento está. Nossas vendas triplicaram em apenas 90 dias.",
    avatar: "RT",
  },
  {
    name: "Fernanda Mello",
    role: "Diretora de Operações",
    text: "A implantação foi surpreendentemente rápida. Os fluxos automáticos filtram 80% das dúvidas comuns, deixando o time focado no que realmente traz lucro.",
    avatar: "FM",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Histórias de Sucesso</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Empresas que transformaram o atendimento em uma máquina de vendas com OfficeChat.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {items.map((t) => (
          <figure 
            key={t.name} 
            className="group relative flex flex-col rounded-[2.5rem] border border-border/50 bg-white p-10 transition-all hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
          >
            <Quote className="absolute top-8 right-8 size-10 text-brand/5 transition-colors group-hover:text-brand/10" />
            
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-brand text-brand" />
              ))}
            </div>
            
            <blockquote className="mt-8 flex-1 text-base font-medium italic leading-relaxed text-foreground/80">
              “{t.text}”
            </blockquote>
            
            <figcaption className="mt-10 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand font-bold text-lg">
                {t.avatar}
              </div>
              <div>
                <span className="block text-base font-bold text-foreground">{t.name}</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{t.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}