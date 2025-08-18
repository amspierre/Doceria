// Esconde o header ao rolar
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.top = '-100px';
    } else {
      header.style.top = '0';
    }
  });
});




  document.querySelectorAll('.card').forEach(card => {
  const btnMais = card.querySelector('.mais');
  const btnMenos = card.querySelector('.menos');
  const quantidade = card.querySelector('.quantidade');

  btnMais.addEventListener('click', () => {
    quantidade.textContent = parseInt(quantidade.textContent) + 1;
  });

  btnMenos.addEventListener('click', () => {
    let valor = parseInt(quantidade.textContent);
    if(valor > 0) quantidade.textContent = valor - 1;
  });
});

document.querySelector('.fazer-pedido').addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  let pedidoResumo = 'Seu pedido:\n';
  let totalItens = 0;
  let pedidoWhats = '';

  cards.forEach(card => {
    const nome = card.querySelector('p').textContent;
    const qtd = parseInt(card.querySelector('.quantidade').textContent);
    if(qtd > 0) {
      pedidoResumo += `${nome}: ${qtd}\n`;
      totalItens += qtd;
      pedidoWhats += `${nome}: ${qtd}\n`;
    }
  });

  pedidoResumo += `Total de itens: ${totalItens}`;
  alert(pedidoResumo);

  const nomePessoa = prompt("Qual o seu nome?");
  if (nomePessoa && totalItens > 0) {
    const numero = '5549988824951'; // Coloque seu número com DDI + DDD
    const mensagem = `Olá, meu nome é ${nomePessoa} e este é meu pedido:\n${pedidoWhats}`;
    const url = `https://wa.me/5549989092760?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  } else if(totalItens === 0) {
    alert("Adicione pelo menos um item ao pedido!");
  }
});