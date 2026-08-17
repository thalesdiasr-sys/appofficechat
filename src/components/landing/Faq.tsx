import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva para configurar?",
    a: "Minutos. O OfficeChat é 100% em nuvem (PWA), funciona no PC e no celular sem instalar nada.",
  },
  {
    q: "Preciso deixar o celular ligado?",
    a: "Não. A conexão é Multi-Device: o atendimento continua funcionando mesmo com o celular desligado.",
  },
  {
    q: "Existem módulos adicionais?",
    a: "Sim. Você pode ativar disparos em massa, IA avançada e catálogo interno conforme a necessidade do seu negócio.",
  },
  {
    q: "O teste grátis pede cartão de crédito?",
    a: "Não. São 2 dias grátis com acesso completo, sem cartão e cancelando quando quiser.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
        <p className="mt-3 text-muted-foreground">Tudo que você precisa saber antes de começar.</p>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}