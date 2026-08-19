import logoMark from "@/assets/logo-mark.png.asset.json";
import termsPdf from "@/assets/termos-de-servico-officechat.pdf.asset.json";
import privacyPdf from "@/assets/politica-de-privacidade-officechat.pdf.asset.json";
import metaPrivacyPdf from "@/assets/politica-de-privacidade-meta-app-officechat.pdf.asset.json";

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Solução", href: "#solucao" },
      { label: "Recursos", href: "#recursos" },
      { label: "Economia", href: "#economia" },
      { label: "Planos", href: "#planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Teste grátis", href: "https://app.officechat.com.br/login" },
      { label: "Entrar", href: "https://app.officechat.com.br/login" },
      { label: "Suporte", href: "#faq" },
      { label: "White Label", href: "#planos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Serviço", href: termsPdf.url },
      { label: "Política de Privacidade", href: privacyPdf.url },
      { label: "Privacidade Meta App", href: metaPrivacyPdf.url },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface/30 border-t border-border mt-20">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2.5 transition-transform hover:scale-105 w-fit">
              <img src={logoMark.url} alt="OfficeChat" className="size-9 logo-visibility" />
              <span className="font-display text-xl font-bold lowercase tracking-tight">
                office<span className="text-primary">chat</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-base text-muted-foreground leading-relaxed">
              Escalando o atendimento de mais de 500 empresas com inteligência artificial humanizada e processos automatizados.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Espaço para ícones sociais se houver */}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">{c.title}</h3>
                <ul className="mt-6 space-y-4">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") || l.href.includes(".pdf") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") || l.href.includes(".pdf") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            © {new Date().getFullYear()} OfficeChat — Inteligência que converte.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Sistemas Operacionais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}