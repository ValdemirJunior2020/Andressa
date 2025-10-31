

import React, { useState } from "react";

import Balloons from "./components/balloons";
import Snow from "./components/snow";



export default function App() {
  const [copiado, setCopiado] = useState(false);
  const chavePix = "44-999198183";

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(chavePix);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      alert("Não foi possível copiar. Chave Pix: " + chavePix);
    }
  };

  return (
    <div className="page">
      <Snow />
      <Balloons count={14} />

      <main className="container">
        <header className="header">
          <h1>Cesta de Natal 🎄</h1>
          <p className="author">por Andressa Gonçalves Mendes Meira</p>
        </header>

        <section className="card">
          <p><strong>O sucesso não é destino</strong>, é a jornada construída com suas próprias ações; e os obstáculos fazem parte essencial do processo!</p>
          <p>Se você também acredita nisso, vamos dar constância a esse aplauso 👏</p>
          <p>Dezembro é um mês desafiador para nós Empreendedores no ramo da beleza, mas vamos transformá-lo :)</p>
          <p>Neste mês encantador quero presenteá-las com uma <strong>Cesta de Natal</strong> cheia de coisas que amamos!</p>
          <p>E mais um <strong>Segundo Presente</strong> 🎁</p>
        </section>

        <section className="cta">
          <h2>Vamos participar? 🧚‍♀️</h2>
          <ul className="info">
            <li><span className="label">Valor:</span> <strong>R$ 15,00</strong></li>
            <li>
              <span className="label">Chave Pix:</span>
              <strong className="pix">{chavePix}</strong>
              <button className="btn" onClick={copiarPix}>{copiado ? "Copiado!" : "Copiar"}</button>
            </li>
            <li><span className="label">Banco:</span> <strong>Bradesco</strong></li>
          </ul>
          <p className="fine-print">* Envie o comprovante por mensagem para confirmação.</p>
        </section>

        <footer className="footer">
          <p>Com carinho, <strong>Andressa</strong> ✨</p>
        </footer>
      </main>
    </div>
  );
}
