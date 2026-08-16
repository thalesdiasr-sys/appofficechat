import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const columns = [
  {
    title: "Navegação",
    links: [
      { label: "Solução", href: "#solucao" },
      { label: "CRM", href: "#crm" },
      { label: "Recursos", href: "#recursos" },
      { label: "Planos", href: "#planos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { label: "Teste grátis", href: "#planos" },
      { label: "Entrar", href: "#planos" },
      { label: "Fale conosco", href: "#planos" },
      { label: "White Label", href: "#planos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de serviço", href: "#" },
      { label: "Política de privacidade", href: "#" },
      { label: "Privacidade Meta App", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="card-surface flex flex-col items-center gap-5 p-10 text-center shadow-glow">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Comece hoje e organize seu atendimento em minutos
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            7 dias grátis, sem cartão de crédito. Cancele quando quiser.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#planos">Testar grátis 7 dias</a>
          </Button>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoMark.url} alt="OfficeChat" className="size-9" />
              <span className="font-display text-lg font-bold lowercase tracking-tight">
                office<span className="text-primary">chat</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Plataforma de multiatendimento com IA para WhatsApp, Instagram e Facebook.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} OfficeChat — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}