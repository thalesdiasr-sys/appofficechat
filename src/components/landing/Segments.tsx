const segments = [
  { name: "Lojas de roupas", emoji: "👕" },
  { name: "Auto peças", emoji: "🚗" },
  { name: "Pet shops", emoji: "🐶" },
  { name: "Clínicas", emoji: "🏥" },
  { name: "Infoprodutores", emoji: "🚀" },
  { name: "E-commerce", emoji: "🛒" },
  { name: "Imobiliárias", emoji: "🏠" },
  { name: "Restaurantes", emoji: "🍔" },
  { name: "Academias", emoji: "💪" },
  { name: "Escritórios", emoji: "💼" },
  { name: "Salões de beleza", emoji: "✂️" },
  { name: "Distribuidoras", emoji: "📦" },
  { name: "Oficinas", emoji: "🛠️" },
  { name: "Supermercados", emoji: "🍎" },
  { name: "Farmácias", emoji: "💊" },
  { name: "Escolas", emoji: "🏫" },
  { name: "Advocacia", emoji: "⚖️" },
  { name: "Contabilidade", emoji: "📊" },
];

export function Segments() {
  const extendedSegments = [...segments, ...segments];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Atendemos seu mercado</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Mais de 500 empresas de diversos nichos já escalaram resultados com OfficeChat.
        </p>
      </div>

      <div className="relative mt-20 overflow-hidden mask-horizontal">
        <div className="flex w-max animate-marquee gap-8 py-4">
          {extendedSegments.map((s, idx) => (
            <div
              key={`${s.name}-${idx}`}
              className="flex items-center gap-4 rounded-3xl border border-border/50 bg-white px-8 py-5 shadow-sm transition-all hover:border-brand/20 hover:scale-105"
            >
              <span className="text-4xl" role="img" aria-label={s.name}>
                {s.emoji}
              </span>
              <span className="whitespace-nowrap text-xl font-bold tracking-tight text-foreground">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}