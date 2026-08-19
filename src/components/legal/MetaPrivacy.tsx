import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export function MetaPrivacy() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
        
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">Meta Compliance</h1>
            <p className="text-muted-foreground">Última atualização: 19 de agosto de 2026</p>
          </div>
          
          <div className="card-surface p-8 md:p-12 prose prose-slate max-w-none shadow-glow">
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Integração com Direct do Instagram e Facebook Messenger</h2>
              <p className="text-muted-foreground leading-relaxed">
                O OfficeChat utiliza as APIs oficiais da Meta para permitir que empresas gerenciem suas comunicações de forma centralizada e eficiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Uso de Dados da Meta</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao conectar sua conta da Meta ao OfficeChat, acessamos apenas as informações necessárias para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Receber mensagens enviadas por clientes via Direct ou Messenger.</li>
                <li>Enviar respostas e mensagens automatizadas através da plataforma.</li>
                <li>Visualizar o nome e a foto de perfil do cliente para identificação no atendimento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Compromisso com a Privacidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não compartilhamos, vendemos ou utilizamos os dados obtidos via APIs da Meta para fins publicitários ou qualquer outra finalidade que não seja a prestação direta do serviço de atendimento contratado.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                A retenção dessas informações segue os mesmos critérios rigorosos da nossa Política de Privacidade global.
              </p>
            </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
