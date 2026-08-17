import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png.asset.json";

const links = [
  { label: "Solução", href: "#solucao" },
  { label: "Economia", href: "#economia" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5 transition-transform hover:scale-105" aria-label="OfficeChat">
          <img src={logoMark.url} alt="OfficeChat" className="size-9 logo-visibility" />
          <span className="font-display text-lg font-bold lowercase tracking-tight">
            office<span className="text-primary">chat</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button size="lg" className="h-11 px-6 font-bold bg-primary text-white shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all rounded-xl" asChild>
            <a href="https://app.officechat.com.br/login">Teste Grátis</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="absolute top-full left-0 w-full flex flex-col gap-1 border-b border-border bg-white animate-in fade-in slide-in-from-top-2 px-4 py-4 md:hidden shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-bold text-muted-foreground hover:bg-surface hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button className="mt-4 h-14 text-lg font-bold rounded-xl" asChild>
            <a href="https://app.officechat.com.br/login">Teste Grátis</a>
          </Button>
        </nav>
      )}
    </header>
  );
}