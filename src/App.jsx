import React from 'react';
import Header from './components/Header';
import Equipe from './components/Equipe';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <main id="topo">
        <section className="hero">
          <div className="wrap hero">
            <div>
              <p className="eyebrow">Resenha ON · JOVI Camera Challenge 2026</p>
              <h1>A câmera que <em>lê, entende</em> e organiza a rotina do estudante.</h1>
              <p>Resenha ON é um modo de câmera para os smartphones JOVI que transforma quadros, slides e anotações em texto digital pesquisável, na mesma velocidade de uma foto.</p>
              <div className="hero-ctas">
                <a href="#solucao" className="btn">Ver a solução</a>
                <a href="#galeria" className="btn-ghost">Ver protótipo</a>
              </div>
            </div>
            <div className="viewfinder">
              <span className="vf-tag tl">RESENHA ON</span>
              <div className="ring"></div>
              <span className="vf-tag br">MODO ESTUDO</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="wrap">
            <div className="stat"><b>1</b><span>toque para capturar e transcrever</span></div>
            <div className="stat"><b>3</b><span>frentes de uso mapeadas no desafio</span></div>
            <div className="stat"><b>100%</b><span>foco em estudantes full-time</span></div>
            <div className="stat"><b>0</b><span>apps extras para anotar aula</span></div>
          </div>
        </section>

        <section id="solucao" className="solucao">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">A Solução</p>
                <h2>Um modo de câmera dedicado a quem estuda em movimento.</h2>
              </div>
              <p>Hoje a câmera do smartphone é usada quase sempre no automático. A Resenha ON cria um modo próprio, com OCR embarcado, para resolver uma dor real: registrar conteúdo de aula sem perder o ritmo da rotina.</p>
            </div>
            <div className="grid">
              <article className="card frame">
                <p className="n mono">01 / captura</p>
                <h3>Scan de quadro e slide</h3>
                <p>Reconhecimento automático de texto em quadros, projeções e apostilas, com recorte e correção de perspectiva em tempo real.</p>
              </article>
              <article className="card frame">
                <p className="n mono">02 / organização</p>
                <h3>Notas por disciplina</h3>
                <p>O texto extraído é agrupado automaticamente em pastas por matéria e data, pronto para busca e cópia.</p>
              </article>
              <article className="card frame">
                <p className="n mono">03 / compartilhamento</p>
                <h3>Envio em um toque</h3>
                <p>Exportação direta para grupos de estudo e apps de anotação, sem sair do modo câmera.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="publico" className="publico">
          <div className="wrap">
            <div className="grid">
              <div className="persona-photo frame">
                <p className="cap">Estudantes<br />Full-time</p>
              </div>
              <div>
                <p className="eyebrow">Público-Alvo</p>
                <h2>Quem concilia estudo, vida social e ambição — o tempo todo.</h2>
                <ul className="persona-list">
                  <li><b>Rotina</b><span>Estão sempre em movimento, entre aula, trabalho e vida social, buscando progresso e estabilidade.</span></li>
                  <li><b>Uso do celular</b><span>O smartphone é a ferramenta que os mantém conectados, produtivos e inspirados ao longo do dia.</span></li>
                  <li><b>Expressão</b><span>Usam a câmera também para expressar como enxergam o mundo, mesmo na correria do dia a dia.</span></li>
                  <li><b>Dor central</b><span>Perdem conteúdo de aula por falta de um jeito rápido de registrar e organizar o que veem no quadro ou na tela.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="galeria">
          <div className="wrap">
            <p className="eyebrow">Galeria</p>
            <h2>Telas e fluxo da Resenha ON.</h2>
            <ol className="topic-list">
              <li><b>01</b><span>Modo Estudo — captura</span></li>
              <li><b>02</b><span>Recorte automático</span></li>
              <li><b>03</b><span>Texto reconhecido</span></li>
              <li><b>04</b><span>Notas por disciplina</span></li>
              <li><b>05</b><span>Busca no histórico</span></li>
              <li><b>06</b><span>Compartilhar</span></li>
            </ol>
          </div>
        </section>

        <Equipe />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
