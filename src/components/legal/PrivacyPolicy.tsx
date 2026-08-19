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
            <p className="text-muted-foreground">Início · Política de Privacidade</p>
            <p className="text-muted-foreground mt-2">Como coletamos, utilizamos e protegemos seus dados na plataforma OfficeChat e em todas as integrações.</p>
            <p className="text-muted-foreground mt-2">Última atualização: 19 de agosto de 2026</p>
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
              <p className="text-muted-foreground leading-relaxed">Podemos coletar as seguintes categorias de dados:</p>
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
                <li>Criar e gerenciar agendamentos automáticos.</li>
                <li>Gerar relatórios operacionais.</li>
                <li>Melhorar a experiência e segurança da plataforma.</li>
              </ul>
              <p className="text-muted-foreground font-bold mt-4">Não vendemos, alugamos ou comercializamos dados pessoais.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Integração com serviços Google</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caso o usuário conecte sua conta Google, utilizamos o protocolo oficial OAuth 2.0 para autorização. Os dados do Google são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Criar, editar ou cancelar eventos no Google Calendar.</li>
                <li>Ler eventos para evitar conflitos de horário.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não utilizamos dados do Google para publicidade, remarketing ou qualquer finalidade não relacionada à funcionalidade contratada. O usuário pode revogar o acesso a qualquer momento nas configurações da sua conta Google.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Integração com Meta (Facebook e Instagram)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quando o usuário conecta páginas do Facebook ou contas do Instagram, utilizamos as APIs oficiais da Meta para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Receber e enviar mensagens.</li>
                <li>Gerenciar interações com clientes.</li>
                <li>Acessar dados básicos da página necessários para operação da plataforma.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Os dados acessados são utilizados exclusivamente para habilitar o atendimento e a comunicação. O OfficeChat não utiliza dados da Meta para publicidade própria, venda de informações ou compartilhamento indevido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies e tecnologias de rastreamento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Manter sessões ativas e autenticação.</li>
                <li>Melhorar desempenho e segurança.</li>
                <li>Analisar métricas de uso da plataforma.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O usuário pode gerenciar ou desativar cookies diretamente nas configurações do navegador, observando que algumas funcionalidades podem ser impactadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Compartilhamento de dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados podem ser compartilhados apenas quando necessário para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Prestação do serviço contratado.</li>
                <li>Infraestrutura em nuvem e hospedagem segura.</li>
                <li>Cumprimento de obrigações legais ou regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Segurança das informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida. As integrações utilizam protocolos seguros e criptografia conforme padrões de mercado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Retenção de dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os dados são armazenados apenas pelo período necessário para a prestação do serviço ou conforme exigido por obrigações legais. O usuário pode solicitar a exclusão de seus dados pelo e-mail sac@officechat.com.br.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Direitos do titular</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos termos da Lei Geral de Proteção de Dados (LGPD), o usuário pode:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Solicitar confirmação da existência de tratamento.</li>
                <li>Acessar seus dados.</li>
                <li>Corrigir informações incompletas ou incorretas.</li>
                <li>Solicitar exclusão quando aplicável.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Uso responsável pelos clientes</h2>
              <p className="text-muted-foreground leading-relaxed">
                O cliente é responsável por utilizar a plataforma em conformidade com as políticas da Meta, Google e demais provedores integrados, bem como com a legislação aplicável. O OfficeChat não se responsabiliza por uso indevido realizado por usuários finais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Alterações nesta política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contato</h2>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-foreground font-semibold mb-2">Dúvidas sobre privacidade?</p>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas ou solicitações relacionadas à privacidade, entre em contato:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">E-mail:</span> sac@officechat.com.br
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Site:</span> officechat.com.br
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
