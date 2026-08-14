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
];

export function Segments() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
      <div className="card-surface p-10 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Feito para o seu segmento</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Mais de 500 empresas de diferentes ramos já atendem pelo OfficeChat.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {segments.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}