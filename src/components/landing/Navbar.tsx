import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const links = [
  { label: "Solução", href: "#solucao" },
  { label: "CRM", href: "#crm" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label="OfficeChat">
          <img src={logoMark.url} alt="OfficeChat" className="size-9 logo-visibility" />
          <span className="font-display text-lg font-bold lowercase tracking-tight">
            office<span className="text-primary">chat</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="hero" size="sm" asChild>
            <a href="https://app.officechat.com.br/login">Teste grátis</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </Button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" className="mt-2" asChild>
            <a href="https://app.officechat.com.br/login">Teste grátis</a>
          </Button>
        </nav>
      )}
    </header>
  );
}