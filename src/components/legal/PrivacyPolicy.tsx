import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
        
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: 19 de agosto de 2026</p>
          </div>
          
          <div className="card-surface p-8 md:p-12 prose prose-slate max-w-none shadow-glow">
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Quem somos</h2>
              <p className="text-muted-foreground leading-relaxed">
                O OfficeChat é uma plataforma SaaS de atendimento, automação, CRM e comunicação empresarial. Em caso de dúvidas, entre em contato pelo e-mail sac@officechat.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados que coletamos</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong>Dados de cadastro:</strong> nome, e-mail, telefone, empresa.</li>
                <li><strong>Dados de acesso:</strong> endereço IP, navegador, dispositivo, logs de uso.</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas e recebidas dentro da plataforma.</li>
                <li><strong>Dados de integração:</strong> informações autorizadas via Google, Instagram, Facebook ou outras APIs conectadas pelo usuário.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidade do uso dos dados</h2>
              <p className="text-muted-foreground leading-relaxed">Utilizamos as informações exclusivamente para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Prestar os serviços contratados.</li>
                <li>Permitir integração com canais como WhatsApp, Instagram, Facebook e Google Calendar.</li>
                <li>Viabilizar envio e recebimento de mensagens.</li>
                <li>Gerar relatórios operacionais.</li>
                <li>Melhorar a experiência e segurança da plataforma.</li>
              </ul>
              <p className="text-muted-foreground font-bold mt-4">Não vendemos, alugamos ou comercializamos dados pessoais.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Integração com serviços Google</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caso o usuário conecte sua conta Google, utilizamos o protocolo oficial OAuth 2.0 para autorização. Os dados do Google são utilizados exclusivamente para gerenciar eventos no Google Calendar e evitar conflitos de horário.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não utilizamos dados do Google para publicidade, remarketing ou qualquer finalidade não relacionada à funcionalidade contratada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Integração com Meta (Facebook e Instagram)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quando o usuário conecta páginas do Facebook ou contas do Instagram, utilizamos as APIs oficiais da Meta para receber e enviar mensagens e gerenciar interações com clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Os dados acessados são utilizados exclusivamente para habilitar o atendimento e a comunicação. O OfficeChat não utiliza dados da Meta para publicidade própria ou venda de informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies e tecnologias de rastreamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para manter sessões ativas e autenticação, melhorar desempenho e segurança, e analisar métricas de uso da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Segurança das informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado. As integrações utilizam protocolos seguros e criptografia conforme padrões de mercado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Direitos do titular</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos termos da Lei Geral de Proteção de Dados (LGPD), o usuário pode solicitar acesso, correção ou exclusão de seus dados pelo e-mail sac@officechat.com.br.
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
