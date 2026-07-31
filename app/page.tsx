const pillars = [
  {
    index: "01",
    title: "Produto antes da interface",
    text: "Fluxos começam pela decisão que a pessoa precisa tomar — e só então viram telas, serviços e estados.",
  },
  {
    index: "02",
    title: "Segurança como arquitetura",
    text: "Autorização no backend, isolamento de dados e rastreabilidade fazem parte do desenho, não da revisão final.",
  },
  {
    index: "03",
    title: "Operação que se explica",
    text: "Estados vazios, falhas e permissões são tratados com a mesma atenção que o caminho feliz.",
  },
];

const capabilities = [
  "Arquitetura full stack",
  "Sistemas multi-tenant",
  "RBAC e trilhas de auditoria",
  "Automação de operações",
  "Experiência de produto B2B",
  "Qualidade e observabilidade",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aloyr — início">
          <span>AY</span>
          <strong>Aloyr</strong>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#trabalho">Trabalho</a>
          <a href="/engenharia/">Engenharia</a>
          <a href="#abordagem">Abordagem</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> Engenharia de produto · Full stack</div>
        <h1>Sistemas complexos,<br /><em>tornados legíveis.</em></h1>
        <div className="hero-footer">
          <p>
            Projeto experiências B2B onde produto, arquitetura e segurança
            trabalham como um sistema único.
          </p>
          <a className="circle-link" href="#trabalho" aria-label="Ver trabalho selecionado">↘</a>
        </div>
      </section>

      <section className="statement" aria-label="Princípio de trabalho">
        <p>Clareza para quem usa.</p>
        <p>Rigor para quem opera.</p>
        <p>Confiança para quem decide.</p>
      </section>

      <section className="work" id="trabalho">
        <div className="section-label">Trabalho selecionado <span>2026</span></div>
        <article className="case-card">
          <div className="case-copy">
            <div className="case-number">CASO / 01</div>
            <h2>Uma operação inteira<br />em uma única leitura.</h2>
            <p>
              Demonstração conceitual de uma plataforma de operações para
              escritórios. Dados, empresas e fluxos são integralmente fictícios.
            </p>
            <div className="case-tags">
              <span>Product design</span><span>Full stack</span><span>Security by design</span>
            </div>
            <div className="case-links">
              <a className="text-link" href="https://ylaros.github.io/zns-portfolio-demo/">
                Abrir demonstração <span>↗</span>
              </a>
              <a className="text-link secondary-link" href="https://github.com/Ylaros/zns-portfolio-demo">
                Ver código <span>↗</span>
              </a>
            </div>
          </div>
          <div className="case-visual" aria-label="Composição abstrata de um painel operacional">
            <div className="visual-top"><span>OPERAÇÃO / VISÃO GERAL</span><b>● ONLINE</b></div>
            <div className="visual-grid">
              <div className="visual-metric"><small>PROCESSOS</small><strong>42</strong><i>+8%</i></div>
              <div className="visual-chart">
                {[48, 66, 52, 78, 62, 88, 72, 94].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="visual-list">
                <div><span>Aurora Demo</span><b>Concluído</b></div>
                <div><span>Horizonte Lab</span><b>Em análise</b></div>
                <div><span>Vértice Teste</span><b>Pendente</b></div>
              </div>
            </div>
            <div className="privacy-stamp">100% SYNTHETIC DATA</div>
          </div>
        </article>
      </section>

      <section className="approach" id="abordagem">
        <div className="section-label">Como eu trabalho <span>Princípios</span></div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.index}>
              <span>{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="capabilities">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
        <a className="engineering-cta" href="/engenharia/">
          <span>Stack & código</span>
          <strong>Conheça as tecnologias e veja exemplos autorais.</strong>
          <i>↗</i>
        </a>
      </section>

      <section className="security-note" aria-label="Compromisso de privacidade">
        <span className="lock-mark">⌁</span>
        <div>
          <p>Este portfólio foi construído sem copiar código, telas ou dados do produto real.</p>
          <small>Nenhum cliente, documento, credencial ou detalhe de infraestrutura é apresentado.</small>
        </div>
      </section>

      <footer id="contato">
        <div>
          <span>Tem um problema difícil?</span>
          <h2>Vamos torná-lo<br /><em>mais simples.</em></h2>
        </div>
        <a href="https://github.com/Ylaros" aria-label="Perfil Aloyr no GitHub">GitHub ↗</a>
        <p>© 2026 Aloyr · Construído com intenção.</p>
      </footer>
    </main>
  );
}
