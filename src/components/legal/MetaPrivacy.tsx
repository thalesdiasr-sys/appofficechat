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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">Política de Privacidade Meta App</h1>
            <p className="text-muted-foreground">Início · Privacidade Meta App</p>
            <p className="text-muted-foreground mt-2">Como coletamos, usamos e protegemos os dados ao integrar o OfficeChat com Direct do Facebook e Instagram via Meta for Developers.</p>
            <p className="text-muted-foreground mt-2">Última atualização: 19 de agosto de 2026</p>
          </div>
          
          <div className="card-surface p-8 md:p-12 prose prose-slate max-w-none shadow-glow">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esta Política de Privacidade descreve como o OfficeChat coleta, utiliza e protege as informações dos usuários ao integrar plataformas externas com o Direct do Facebook e Instagram, por meio das permissões concedidas no Meta for Developers.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nosso compromisso é garantir transparência, segurança e conformidade com as diretrizes da Meta e com a legislação vigente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Coleta de Informações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso aplicativo pode coletar os seguintes dados:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li><strong>Dados de Conta do Facebook/Instagram:</strong> informações básicas de perfil e ID de usuário, apenas para autenticação e identificação dentro da integração.</li>
                  <li><strong>Mensagens do Direct:</strong> recebimento, envio e gerenciamento de mensagens do Direct do Instagram e do Messenger, exclusivamente para viabilizar a comunicação entre empresas e clientes.</li>
                  <li><strong>Dados de Uso:</strong> informações sobre interações dentro do app (como data/hora de envio de mensagens e status de leitura).</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Não coletamos senhas e não armazenamos informações além do estritamente necessário para o funcionamento da integração.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso das Informações</h2>
                <p className="text-muted-foreground leading-relaxed">As informações coletadas são utilizadas para:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Permitir que plataformas externas enviem e recebam mensagens no Direct do Instagram e Messenger.</li>
                  <li>Facilitar a comunicação entre empresas e seus clientes.</li>
                  <li>Garantir autenticação e segurança no acesso ao app.</li>
                  <li>Melhorar a experiência de uso e corrigir eventuais falhas técnicas.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Não utilizamos os dados para fins de publicidade direcionada, nem os compartilhamos com terceiros fora do escopo desta integração.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As informações são compartilhadas apenas com:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Meta (Facebook/Instagram): conforme exigido pelas APIs oficiais.</li>
                  <li>Plataformas externas autorizadas pelo usuário: limitadas ao envio e recebimento de mensagens.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-bold">Nunca vendemos ou comercializamos dados pessoais.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Armazenamento e Segurança</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os dados são armazenados de forma segura, com criptografia e protocolos de proteção atualizados.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Mantemos as informações apenas pelo período necessário para fornecer os serviços descritos.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  O usuário pode solicitar a exclusão de seus dados a qualquer momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Direitos do Usuário</h2>
                <p className="text-muted-foreground leading-relaxed">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados – Brasil) e regulamentações internacionais (como GDPR, quando aplicável), os usuários têm direito a:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Acessar, corrigir ou excluir seus dados.</li>
                  <li>Revogar permissões concedidas ao app pelo painel do Facebook/Instagram.</li>
                  <li>Solicitar esclarecimentos sobre o uso de suas informações.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies e Tecnologias Semelhantes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O OfficeChat não utiliza cookies para rastrear usuários. Tecnologias semelhantes podem ser empregadas apenas para autenticação segura e funcionamento da API da Meta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Alterações relevantes serão notificadas aos usuários antes de entrarem em vigor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-foreground font-semibold mb-2">Fale com a gente</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Em caso de dúvidas, solicitações ou para exercer seus direitos sobre os dados, entre em contato:
                  </p>
                  <div className="mt-4 space-y-1">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">E-mail:</span> contato@officechat.com.br
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Site:</span> officechat.com.br
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
