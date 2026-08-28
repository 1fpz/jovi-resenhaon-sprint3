import React from 'react';

function Header() {
  return (
    <header>
      <div className="nav-grid">
        <a href="#topo" className="logo">Resenha<span>ON</span></a>
        <nav aria-label="Navegação principal">
          <ul>
            <li><a href="#solucao">A Solução</a></li>
            <li><a href="#publico">Público-Alvo</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#equipe">Nossa Equipe</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <a href="#contato" className="btn">Falar com o time</a>
      </div>
    </header>
  );
}

export default Header;
