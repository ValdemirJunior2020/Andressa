import React from "react";
import Balloons from "./components/balloons";
import Snow from "./components/snow";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Snow flakes={80} />
      <Balloons count={15} />

      <header className="header">
        <img src="/logo.png" alt="Cesta de Natal" className="logo" />
        <h1 className="title">🎁 Cesta de Natal da Andressa 🎄</h1>
        <p className="subtitle">
          Que neste Natal o amor e a esperança encham nossos corações de luz!
        </p>
      </header>

      <main className="content">
        <section className="post">
          <h2>Mensagem Especial ✨</h2>
          <p>
            A época mais linda do ano chegou! Que o espírito natalino traga
            união, fé e gratidão a todos os lares. Agradeço de coração a todos
            que têm me acompanhado nesta jornada. Que possamos celebrar não
            apenas os presentes, mas o presente da vida e da amizade! 💖
          </p>
          <p>Com carinho, <strong>Andressa</strong> 🎅</p>
        </section>
      </main>

      <footer className="footer">
        <p>Feito com 💕 e React — Feliz Natal! 🎄🎅</p>
      </footer>
    </div>
  );
}

export default App;
