import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Termos de Serviço</h1>
          <p className="text-muted-foreground mb-8">Última atualização: 19 de agosto de 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Serviço (“Termos”) regulam o uso do aplicativo OfficeChat, que possibilita a integração de plataformas externas para envio e recebimento de mensagens pelo Direct do Facebook e Instagram, através das APIs oficiais da Meta.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ao utilizar o OfficeChat, você concorda com estes Termos e se compromete a respeitar as condições aqui estabelecidas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                O OfficeChat é destinado a empresas e profissionais que desejam integrar suas plataformas externas de comunicação com o Direct do Instagram e Messenger.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O usuário deve possuir contas válidas no Facebook e/ou Instagram, devidamente vinculadas às permissões concedidas via Meta for Developers.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                É proibido utilizar o OfficeChat para fins ilegais, envio de spam, práticas abusivas, conteúdo impróprio ou qualquer atividade que viole as Políticas da Meta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Autenticação</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para utilizar o serviço, o usuário deve autorizar o acesso do OfficeChat às suas contas do Facebook/Instagram por meio do processo de autenticação oficial da Meta.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O usuário é responsável por manter seguras suas credenciais de acesso às plataformas vinculadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Responsabilidades do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed">
                O usuário se compromete a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Utilizar o OfficeChat em conformidade com a legislação vigente e com as diretrizes da Meta.</li>
                <li>Garantir que as mensagens enviadas respeitam a privacidade e os direitos de terceiros.</li>
                <li>Não utilizar o serviço para práticas ilícitas, fraudulentas ou que possam prejudicar a reputação do OfficeChat, da Meta ou de outros usuários.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitações de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O OfficeChat atua apenas como intermediador técnico entre plataformas externas e a API da Meta.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não nos responsabilizamos por falhas nas plataformas externas, na API da Meta ou por indisponibilidades que fujam ao nosso controle.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O OfficeChat não é responsável pelo conteúdo das mensagens enviadas ou recebidas pelos usuários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Privacidade e Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de dados pessoais segue as diretrizes descritas na nossa Política de Privacidade. Ao utilizar o serviço, o usuário concorda com a coleta e uso de informações conforme estabelecido naquele documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Alterações e Atualizações</h2>
              <p className="text-muted-foreground leading-relaxed">
                O OfficeChat pode modificar ou atualizar estes Termos de Serviço a qualquer momento. Alterações relevantes serão comunicadas aos usuários antes de entrarem em vigor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Encerramento do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                O usuário pode encerrar o uso do OfficeChat a qualquer momento, revogando as permissões concedidas pelo painel do Facebook/Instagram.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O OfficeChat reserva-se o direito de suspender ou cancelar contas que violem estes Termos ou as políticas da Meta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas ou solicitações relacionadas a estes Termos de Serviço, entre em contato:
              </p>
              <div className="mt-4 p-6 bg-surface rounded-2xl border border-border">
                <p className="font-bold text-foreground">E-mail: <a href="mailto:contato@officechat.com.br" className="text-primary hover:underline">contato@officechat.com.br</a></p>
                <p className="font-bold text-foreground">Site: <a href="https://officechat.com.br" className="text-primary hover:underline">officechat.com.br</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
