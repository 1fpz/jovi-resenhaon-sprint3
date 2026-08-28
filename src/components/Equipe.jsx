import React from 'react';

function Membro({ nome, role, rm }) {
  return (
    <article className="member">
      <div className="info">
        <h3>{nome}</h3>
        <p className="role">{role}</p>
        <p className="rm">{rm}</p>
      </div>
    </article>
  );
}

function Equipe() {
  return (
    <section id="equipe" className="equipe">
      <div className="wrap">
        <p className="eyebrow">Nossa Equipe — Resenha ON</p>
        <h2>Quem constrói a Resenha ON.</h2>
        <div className="grid">
          <Membro nome="Michel Tatsuya Hanada" role="Front-End & UX" rm="RM 571987" />
          <Membro nome="Felipe Ilek Felice" role="Back-End & Python" rm="RM 571322" />
          <Membro nome="Marcos Vinícius Serafim Tudisco Mendes" role="Storytelling & UX Research" rm="RM 569366" />
        </div>
      </div>
    </section>
  );
}

export default Equipe;
