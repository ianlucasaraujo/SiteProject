const cards = document.querySelectorAll(".card");
const contentBox = document.getElementById("contentBox");
const content = document.getElementById("content");

cards.forEach(card => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
    showContent(card.dataset.card);
  });
});

function removeActiveClasses() {
  cards.forEach(card => card.classList.remove("active"));
}

function showContent(cardNumber) {
  contentBox.classList.add("show");

  if (cardNumber === "1") {
    content.innerHTML = `
      <h2>Desenvolvimento sustentável</h2>
      <p>Desenvolvimento sustentável procura aliar a preservação ambiental ao progresso socioeconômico e político dos países, e isso depende dos Estados, sociedade civil e empresas.</p>
      <p>O desenvolvimento sustentável se apoia em três princípios básicos:</p>
      <ul>
        <li>o ambiental</li>
        <li>o econômico</li>
        <li>o social</li>
      </ul>
      <button onclick="window.open('https://brasilescola.uol.com.br/geografia/desenvolvimento-sustentavel.htm')">Saiba Mais</button>

    `;
  }

  if (cardNumber === "2") {
    content.innerHTML = `
      <h2>Plantação de Árvores</h2>
      <ul>
        <p>Agir na sociedade por meio do plantio de árvores é uma das estratégias mais tangíveis e eficazes para promover o desenvolvimento sustentável. Mais do que apenas "colocar uma muda na terra", o impacto real vem do planejamento, da escolha de espécies nativas e do engajamento comunitário.</p>
        <br></br>
        <p>Aqui estão os pilares de como podemos atuar, acompanhados de fontes confiáveis para aprofundar seu conhecimento.</p>
        <li>1. Recuperação de Áreas Degradadas</li>
        <p>O foco aqui é restaurar o ecossistema original. O plantio de espécies nativas ajuda a recuperar a biodiversidade local e a proteger nascentes de água.</p>
        <p>Ação: Participe ou apoie projetos de reflorestamento bioma-específico (como o <a href="https://pactomataatlantica.org.br/" target="_blank">Pacto pela Restauração da Mata Atlântica</a>).</p>
        
        <li>2. Arborização Urbana</li>
        <p>Árvores em cidades reduzem as "ilhas de calor", melhoram a qualidade do ar e diminuem o estresse dos moradores.</p>
        <p>Ação: Pressione o poder público por planos de arborização urbana e utilize o Guia de Arborização da sua cidade para plantar na sua calçada de forma correta (evitando danos à fiação ou calçadas).</p>
        <p></p>
        
        <li>3. Sistemas Agroflorestais (SAFs)</li>
        <p>Esta é a união da produção de alimentos com a conservação da floresta. É o desenvolvimento sustentável na veia: gera renda e preserva o solo.</p>
        <p>Ação: Apoie o consumo de produtos de agricultura sintrópica e pequenos produtores que utilizam sistemas florestais.</p>
        
      </ul>
    `;
  }

  if (cardNumber === "3") {
    content.innerHTML = `
      <h2>Recomendações</h2>
      <ul>
        <li>Relatórios do IPCC: Demonstram a importância do plantio de árvores no sequestro de carbono para frear as mudanças climáticas.</li>
        <li>Agenda 2030 da ONU (ODS 15): O Objetivo de Desenvolvimento Sustentável 15 foca especificamente na "Vida Terrestre" e no manejo sustentável de florestas.</li>
        <li>Livro "A Vida Secreta das Árvores" (Peter Wohlleben): Ótimo para entender como as árvores se comunicam e por que plantar florestas biodiversas é melhor do que monoculturas.</li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      
    `;
  }
}
