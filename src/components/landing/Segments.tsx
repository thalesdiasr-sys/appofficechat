const segments = [
  "Lojas de roupas",
  "Auto peças",
  "Pet shops",
  "Clínicas",
  "Infoprodutores",
  "E-commerce",
  "Imobiliárias",
  "Restaurantes",
  "Academias",
  "Escritórios",
  "Salões de beleza",
  "Distribuidoras",
  "Oficinas",
  "Supermercados",
  "Farmácias",
  "Escolas",
  "Advocacia",
  "Contabilidade",
];

export function Segments() {
  // We duplicate the list to ensure the marquee loop is seamless
  const extendedSegments = [...segments, ...segments];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl text-brand">Feito para o seu segmento</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
          Mais de 500 empresas de diferentes ramos já atendem pelo OfficeChat e escalaram seus resultados com organização e IA.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden mask-horizontal">
        <div className="flex w-max animate-marquee gap-4 py-4">
          {extendedSegments.map((s, idx) => (
            <div
              key={`${s}-${idx}`}
              className="flex items-center gap-2 rounded-2xl border border-border bg-card/50 px-6 py-3 text-sm font-medium shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="h-2 w-2 rounded-full bg-primary/60" />
              <span className="whitespace-nowrap">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}