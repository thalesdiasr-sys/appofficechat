import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para configurar?",
    a: "Menos de 5 minutos. O OfficeChat é 100% em nuvem, você conecta seu WhatsApp via QR Code e já pode começar a atender e automatizar.",
  },
  {
    q: "Preciso deixar o celular ligado?",
    a: "Não. Utilizamos a tecnologia Multi-Device oficial, o que garante que seu atendimento continue funcionando mesmo se seu celular for desligado ou perder a conexão.",
  },
  {
    q: "A IA atende sozinha mesmo?",
    a: "Sim. Você pode treinar a IA com o conhecimento da sua empresa (site, manuais, textos) e ela responderá seus clientes de forma humanizada 24h por dia.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Você cria sua conta em segundos, não pedimos cartão de crédito. Você terá acesso total aos recursos para validar a ferramenta no seu negócio.",
  },
  {
    q: "Posso transferir conversas para humanos?",
    a: "Com certeza. A IA pode qualificar o lead e, se necessário, transferir a conversa para um atendente humano em um departamento específico.",
  },
  {
    q: "O sistema tem CRM?",
    a: "Sim, incluímos um CRM visual estilo Kanban onde você pode organizar seus leads em funis de venda, definir valores e acompanhar cada etapa da negociação.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 scroll-mt-24">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <HelpCircle className="size-3.5" />
          <span>Suporte & Dúvidas</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Perguntas Frequentes</h2>
        <p className="mt-6 text-lg text-muted-foreground">Tudo o que você precisa saber sobre a revolução do atendimento.</p>
      </div>

      <div className="mt-16 rounded-[2.5rem] border border-border/50 bg-white p-2 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem 
              key={f.q} 
              value={f.q} 
              className={`px-8 border-border/50 ${i === faqs.length - 1 ? 'border-b-0' : ''}`}
            >
              <AccordionTrigger className="py-6 text-left text-lg font-bold text-foreground hover:text-brand hover:no-underline transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base font-medium text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}