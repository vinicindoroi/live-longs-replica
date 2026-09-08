const CHECKOUT_URL = "https://livelong.vita-protocol.online/acesso";

const BULLETS = [
  "O método simples de 5 minutos que reacende a conexão do casal.",
  "Por que a rotina apaga o desejo — e como reverter isso em poucos dias.",
  "Os 3 erros mais comuns que sabotam a intimidade de homens acima dos 30.",
  "Um passo a passo prático, discreto e fácil de aplicar hoje à noite.",
];

const FAQ = [
  {
    q: "Em quanto tempo vejo resultado?",
    a: "A maioria dos leitores relata mudanças perceptíveis já na primeira semana de aplicação.",
  },
  {
    q: "É discreto?",
    a: "Sim. O acesso é digital e a cobrança aparece com nome neutro na fatura.",
  },
  {
    q: "E se não funcionar para mim?",
    a: "Você tem garantia total. Se não gostar, devolvemos o valor integral.",
  },
];

export function WhiteTsl() {
  return (
    <main className="tsl-page">
      <article className="tsl-wrap">
        <span className="tsl-eyebrow">Relacionamento &amp; Bem-estar</span>

        <h1>
          O protocolo de 5 minutos que devolveu a intimidade de milhares de
          casais
        </h1>

        <p className="tsl-lead">
          Se a rotina esfriou a relação, o problema quase nunca é falta de amor
          — é falta de método. Nas próximas linhas você vai entender o que
          mudar, e por onde começar hoje mesmo.
        </p>

        <hr />

        <p>
          A maioria dos casais convive anos com um desconforto que ninguém
          coloca em palavras: a sensação de que algo bom se perdeu no caminho.
          As noites viram automáticas, as conversas ficam operacionais e a
          proximidade some sem aviso.
        </p>

        <p>
          A boa notícia é que esse ciclo se rompe com pequenas ações
          consistentes — não com esforço heroico. Foi exatamente isso que
          reunimos em um material curto, direto e aplicável.
        </p>

        <h2>O que você vai encontrar</h2>
        <ul className="tsl-bullets">
          {BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <blockquote className="tsl-quote">
          “Achei que fosse mais um material genérico. Apliquei duas noites
          seguidas e minha esposa foi a primeira a comentar a diferença.”
          <cite>— Rafael M., 38 anos</cite>
        </blockquote>

        <h2>Perguntas frequentes</h2>
        <dl className="tsl-faq">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="tsl-cta-box">
          <p className="tsl-cta-note">
            Acesso imediato, 100% digital e com garantia de satisfação.
          </p>
          <a
            className="tsl-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero acessar o protocolo
          </a>
        </div>

        <p className="tsl-disclaimer">
          Este conteúdo tem caráter informativo e educacional e não substitui
          orientação médica ou terapêutica profissional.
        </p>
      </article>
    </main>
  );
}
