import { Bubble } from '@typebot.io/react'
const whatsappNumber = '5511968882732';
const whatsappMessage = encodeURIComponent(
  'Olá! Vim pelo site Invest.Next e quero saber como começar.'
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const estrategias = [
  {
    titulo: 'Renda com IA',
    texto: 'Use ferramentas de inteligência artificial para criar serviços, automatizar tarefas e atender pequenos negócios.',
  },
  {
    titulo: 'Marketing Digital',
    texto: 'Aprenda a atrair clientes pelo Instagram, WhatsApp, Google e conteúdo online.',
  },
  {
    titulo: 'Organização Financeira',
    texto: 'Monte um plano simples para controlar gastos, criar reserva e melhorar sua vida financeira familiar.',
  },
  {
    titulo: 'Negócio Online',
    texto: 'Comece pequeno, valide uma oferta e transforme conhecimento em renda real.',
  },
];

export default function InvestNext() {
  const produtos = [
  {
    nome: "Guia Renda com IA",
    preco: "R$ 29,90",
    desc: "Aprenda formas simples de usar IA para criar renda digital.",
    link: "https://wa.me/5511968882732"
  },
  {
    nome: "Mentoria Start Digital",
    preco: "R$ 97",
    desc: "Plano prático para criar sua primeira estrutura online.",
    link: "https://wa.me/5511968882732"
  },
  {
    nome: "Automação com IA",
    preco: "R$ 197",
    desc: "Criação de chatbot, site e captação automática de clientes.",
    link: "https://wa.me/5511968882732"
  }
]
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #050816;
          color: white;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(0, 255, 163, 0.22), transparent 35%),
            radial-gradient(circle at top right, rgba(0, 174, 255, 0.18), transparent 35%),
            linear-gradient(135deg, #050816 0%, #0b1020 55%, #020617 100%);
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
        }

        .logo {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo span {
          color: #00ffa3;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding: 70px 0 90px;
        }

        .tag {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #baf7dd;
          margin-bottom: 22px;
          font-weight: 700;
        }

        h1 {
          font-size: clamp(42px, 7vw, 78px);
          line-height: 0.95;
          margin-bottom: 24px;
          letter-spacing: -3px;
        }

        h1 span {
          color: #00ffa3;
          text-shadow: 0 0 30px rgba(0, 255, 163, 0.35);
        }

        .hero p {
          color: #cbd5e1;
          font-size: 20px;
          line-height: 1.6;
          max-width: 620px;
          margin-bottom: 32px;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          border-radius: 18px;
          padding: 16px 24px;
          font-weight: 900;
          transition: 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00ffa3, #00c2ff);
          color: #03110c;
          box-shadow: 0 18px 45px rgba(0, 255, 163, 0.22);
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        .btn:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 32px;
          padding: 28px;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
        }

        .status {
          color: #00ffa3;
          background: rgba(0, 255, 163, 0.12);
          padding: 8px 12px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 13px;
        }

        .money-box {
          background: #07111f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 18px;
          margin-bottom: 14px;
        }

        .money-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #cbd5e1;
        }

        .money-row strong {
          color: #00ffa3;
        }

        .bar {
          height: 9px;
          border-radius: 999px;
          background: #1e293b;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #00ffa3, #00c2ff);
        }

        .highlight {
          margin-top: 24px;
          background: linear-gradient(135deg, #00ffa3, #00c2ff);
          color: #03110c;
          border-radius: 22px;
          padding: 24px;
        }

        .section {
          padding: 80px 0;
        }

        .section h2 {
          text-align: center;
          font-size: clamp(34px, 5vw, 56px);
          margin-bottom: 14px;
          letter-spacing: -2px;
        }

        .section-subtitle {
          text-align: center;
          color: #cbd5e1;
          max-width: 760px;
          margin: 0 auto 42px;
          font-size: 18px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .service {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 26px;
          padding: 26px;
          transition: 0.2s ease;
        }

        .service:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 255, 163, 0.5);
        }

        .icon {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 163, 0.13);
          font-size: 24px;
          margin-bottom: 18px;
        }

        .service h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .service p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .cta {
          margin: 40px auto 90px;
          max-width: 980px;
          text-align: center;
          background: linear-gradient(135deg, #00ffa3, #00c2ff 55%, #8b5cf6);
          color: #03110c;
          border-radius: 40px;
          padding: 54px 26px;
          box-shadow: 0 30px 90px rgba(0, 194, 255, 0.22);
        }

        .cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          margin-bottom: 16px;
          letter-spacing: -2px;
        }

        .cta p {
          font-size: 19px;
          max-width: 720px;
          margin: 0 auto 26px;
          line-height: 1.5;
          font-weight: 700;
        }

        .cta .btn {
          background: #020617;
          color: white;
        }

        footer {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding: 30px 0;
          color: #94a3b8;
          text-align: center;
        }

        .whatsapp-float {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 50;
          background: #25d366;
          color: #04130a;
          text-decoration: none;
          font-weight: 900;
          padding: 16px 22px;
          border-radius: 999px;
          box-shadow: 0 18px 40px rgba(37, 211, 102, 0.35);
          transition: 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.06);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 40px;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .navbar {
            flex-direction: column;
            gap: 18px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .buttons {
            flex-direction: column;
          }

          .btn {
            text-align: center;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              INVEST<span>.NEXT</span>
            </div>
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </nav>

          <section className="hero">
            <div>
              <div className="tag">⚡ Finanças, IA e renda digital</div>
              <h1>
                Construa sua próxima <span>renda</span> com estratégia.
              </h1>
              <p>
                A Invest.Next ajuda você e sua família a organizar a vida financeira,
                aprender habilidades digitais e começar um caminho real para ganhar dinheiro online.
              </p>
              <div className="buttons">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Quero começar agora
                </a>
                <a className="btn btn-secondary" href="#estrategias">
                  Ver estratégias
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-top">
                <div>
                  <p style={{ color: '#94a3b8', marginBottom: 6 }}>Painel Invest.Next</p>
                  <h2>Plano de crescimento</h2>
                </div>
                <span className="status">ONLINE</span>
              </div>

              <div className="money-box">
                <div className="money-row">
                  <span>Reserva financeira</span>
                  <strong>75%</strong>
                </div>
                <div className="bar"><div className="fill" style={{ width: '75%' }} /></div>
              </div>

              <div className="money-box">
                <div className="money-row">
                  <span>Habilidade digital</span>
                  <strong>60%</strong>
                </div>
                <div className="bar"><div className="fill" style={{ width: '60%' }} /></div>
              </div>

              <div className="money-box">
                <div className="money-row">
                  <span>Primeiros clientes</span>
                  <strong>45%</strong>
                </div>
                <div className="bar"><div className="fill" style={{ width: '45%' }} /></div>
              </div>

              <div className="highlight">
                <h2>Comece pequeno.</h2>
                <p>O próximo nível vem de ação, consistência e uma oferta simples.</p>
              </div>
            </div>
          </section>
        </div>

        <section id="estrategias" className="section">
          <div className="container">
            <h2>O que a Invest.Next pode oferecer</h2>
            <p className="section-subtitle">
              Um caminho simples para sair da confusão, aprender o digital e criar novas possibilidades de renda.
            </p>

            <div className="grid">
              {estrategias.map((item) => (
                <div className="service" key={item.titulo}>
                  <div className="icon">⚡</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <section className="cta">
            <h2>Sua virada começa com uma conversa.</h2>
            <p>
              Clique no botão abaixo e fale comigo no WhatsApp para dar o primeiro passo com a Invest.Next.
            </p>
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
          </section>
        </div>

        <footer>
          <div className="container">
            <strong>INVEST.NEXT</strong> — © 2026. Construindo o próximo nível financeiro.
          </div>
        </footer>

        <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      <Bubble
  typebot="lead-generation-rkm7wzj"
  apiHost="https://typebot.io"/>
  </main>
    </>
  );
}