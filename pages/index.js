import React, { useState, useEffect } from "react";

function Home() {
  const whatsappLink =
    "https://wa.me/5532988201668?text=Sim!%20Eu%20quero%20ser%20sua%20namorada!";

  // Nomes dos arquivos das fotos que você vai adicionar
  const fotos = ["/foto1.jpeg", "/foto2.jpeg", "/foto3.jpeg"];

  const [fotoAtual, setFotoAtual] = useState(0);

  // Efeito para trocar a foto automaticamente a cada 3.5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoAtual((prev) => (prev + 1) % fotos.length);
    }, 3500);

    return () => clearInterval(intervalo);
  }, [fotos.length]);

  return (
    <>
      {/* Estilos injetados de forma segura para evitar o erro de hidratação do Next.js */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4c1d95, #6b21a8, #d97706);
          padding: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .card {
          width: 100%;
          max-width: 450px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          color: white;
          overflow: hidden;
        }

        .title {
          font-size: 2.25rem;
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: bold;
          letter-spacing: 0.025em;
          color: #fcd34d;
          text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 1s ease-in-out;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .text-highlight {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.6;
        }

        .text-body {
          font-size: 1rem;
          font-weight: 300;
          color: #e5e7eb;
        }

        .spotify-container {
          width: 100%;
        }

        .spotify-iframe {
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .whatsapp-btn {
          width: 100%;
          padding: 1rem 1.5rem;
          background-color: #f59e0b;
          color: #3b0764;
          font-weight: bold;
          font-size: 1.125rem;
          border-radius: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .whatsapp-btn:hover {
          background-color: #fbbf24;
          transform: scale(1.05);
        }

        /* Otimizações específicas para telas um pouco maiores */
        @media (min-width: 640px) {
          .page-container { padding: 2rem; }
          .title { font-size: 3rem; }
          .text-highlight { font-size: 1.5rem; }
          .text-body { font-size: 1.125rem; }
        }
      `,
        }}
      />

      {/* Estrutura HTML */}
      <div className="page-container">
        <div className="card">
          <h1 className="title">Quer ser minha namorada?</h1>

          <div className="spotify-container">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/track/3ZzyOu6skjfcHIj78NOoMF?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="spotify-iframe"
            ></iframe>
          </div>

          <div className="carousel-container">
            {fotos.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Nossa foto ${index + 1}`}
                className="carousel-image"
                style={{ opacity: index === fotoAtual ? 1 : 0 }}
              />
            ))}
          </div>

          <div className="text-container">
            <p className="text-highlight">Feliz Dia das Mulheres, Meu amor!</p>
            <p className="text-body">
              Sou imensamente feliz por ter você comigo. Você é a minha mulher
              preferida no mundo inteirinho, e cada dia ao seu lado é um
              presente!
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Responder no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
