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
  // We duplicate the list to ensure the marquee loop is seamless
  const extendedSegments = [...segments, ...segments];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Feito para o seu segmento</h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          Mais de 500 empresas de diferentes ramos já atendem pelo OfficeChat e escalaram seus resultados com organização e IA.
        </p>
      </div>

      <div className="relative mt-16 overflow-hidden mask-horizontal">
        <div className="flex w-max animate-marquee gap-6 py-6">
          {extendedSegments.map((s, idx) => (
            <div
              key={`${s.name}-${idx}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-8 py-5 text-lg font-semibold shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card hover:scale-105"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="whitespace-nowrap">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}