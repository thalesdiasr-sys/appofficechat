import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/5 blur-3xl rounded-full -z-10" />

        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">Política de Cookies</h1>
            <p className="text-muted-foreground">Como o OfficeChat utiliza cookies e tecnologias semelhantes, e como você pode gerenciar seu consentimento.</p>
            <p className="text-muted-foreground mt-2">Última atualização: 3 de setembro de 2026</p>
          </div>

          <div className="card-surface p-8 md:p-12 prose prose-slate max-w-none shadow-glow">

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">O que são cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles permitem que o site lembre de informações sobre a sua visita, como preferências, sessão ativa e interações com a plataforma, tornando a experiência mais eficiente e personalizada.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Também utilizamos tecnologias semelhantes, como armazenamento local (localStorage) e pixels de rastreamento, que seguem as mesmas regras descritas nesta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Consentimento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e do Marco Civil da Internet (Lei nº 12.965/2014), utilizamos cookies essenciais para o funcionamento da plataforma, e cookies não essenciais apenas mediante o seu consentimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ao acessar o site, você pode aceitar ou recusar os cookies não essenciais por meio do aviso de consentimento exibido na tela. Você pode alterar sua escolha a qualquer momento nas configurações do seu navegador ou entrando em contato conosco.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Os cookies essenciais, necessários para autenticação, segurança e funcionamento básico do site, não dependem de consentimento, conforme permitido pela legislação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
              <div className="space-y-6 mt-6">
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-foreground font-semibold mb-2">Cookies essenciais</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Necessários para navegação e uso das funcionalidades: manter sua sessão ativa, autenticação na plataforma, segurança e prevenção a fraudes. Sem eles, o site e o aplicativo não funcionam corretamente.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-foreground font-semibold mb-2">Cookies de desempenho e análise</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Coletam informações de forma agregada sobre como os visitantes usam o site, como páginas mais acessadas e erros encontrados, para melhorarmos continuamente a experiência.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-foreground font-semibold mb-2">Cookies funcionais</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Permitem lembrar de escolhas que você faz, como preferências de idioma e configurações da interface, oferecendo uma experiência mais personalizada.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <p className="text-foreground font-semibold mb-2">Cookies de integração e marketing</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Definidos por meio de integrações com serviços como Google, Facebook e Instagram, exclusivamente para viabilizar as funcionalidades contratadas (como conexão de contas e recebimento de mensagens). Não os utilizamos para publicidade própria ou venda de dados.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Provedores que utilizam cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Abaixo está a lista dos provedores e serviços que podem definir cookies quando você utiliza o site e a plataforma OfficeChat:
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 font-semibold text-foreground">Provedor</th>
                      <th className="py-3 pr-4 font-semibold text-foreground">Finalidade</th>
                      <th className="py-3 font-semibold text-foreground">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">OfficeChat</td>
                      <td className="py-3 pr-4">Sessão, autenticação, segurança e preferências da plataforma.</td>
                      <td className="py-3">Essencial</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Google</td>
                      <td className="py-3 pr-4">Autenticação via OAuth e integração com o Google Calendar.</td>
                      <td className="py-3">Essencial / Funcional</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">Meta (Facebook e Instagram)</td>
                      <td className="py-3 pr-4">Conexão de contas e envio/recebimento de mensagens pelas APIs oficiais.</td>
                      <td className="py-3">Essencial / Integração</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground">Ferramentas de análise</td>
                      <td className="py-3 pr-4">Métricas agregadas de uso do site, para melhoria da experiência.</td>
                      <td className="py-3">Desempenho</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Como gerenciar os cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador (Chrome, Firefox, Safari, Edge, entre outros), bem como limpar os cookies já armazenados no seu dispositivo.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ao bloquear cookies essenciais, algumas funcionalidades do site e da plataforma podem não funcionar corretamente, como manter sua sessão aberta ou receber notificações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Retenção</h2>
              <p className="text-muted-foreground leading-relaxed">
                Os cookies de sessão são removidos quando você encerra o navegador. Cookies permanentes permanecem armazenados pelo tempo necessário para cumprir sua finalidade ou até que você os exclua manualmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Alterações nesta política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças nos serviços ou na legislação. A versão mais recente estará sempre disponível nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contato</h2>
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <p className="text-foreground font-semibold mb-2">Fale com a gente</p>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas ou solicitações relacionadas a cookies e privacidade, entre em contato:
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
