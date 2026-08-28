import React, { useState } from 'react';

function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // REQUISITO DA SPRINT: Usando Math (randomização e arredondamento)
    const protocolo = Math.round(Math.random() * 10000);
    
    const formData = new FormData(e.target);
    const dadosContato = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      protocolo: protocolo,
      data: new Date().toLocaleDateString()
    };

    // REQUISITO DA SPRINT: Salvando no localStorage
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos_resenhaon')) || [];
    localStorage.setItem('contatos_resenhaon', JSON.stringify([...contatosSalvos, dadosContato]));

    setMensagemEnviada(true);
    e.target.reset();
    alert(`Mensagem enviada! Seu protocolo de teste é: ${protocolo}`);
  };

  return (
    <section id="contato" className="contato">
      <div className="wrap">
        <div className="grid">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Quer testar a Resenha ON?</h2>
            <p>Fale com o time para conhecer o protótipo completo e a documentação técnica da solução.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <textarea name="mensagem" placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar mensagem</button>
            {mensagemEnviada && <p style={{color: 'var(--amber)', fontSize: '0.8rem', marginTop: '10px'}}>✓ Salvo no localStorage!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;
