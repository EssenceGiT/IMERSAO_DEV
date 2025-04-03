// Array com 10 heróis disponíveis
const heroisDisponiveis = [
  "Luke Skywalker",
  "Leia Organa",
  "Han Solo",
  "Chewbacca",
  "Obi-Wan Kenobi",
  "Mestre Yoda",
  "Rey",
  "R2-D2",
  "Andor",
  "Lando Calrissian"
];

// Array com 10 vilões
const viloesDisponiveis = [
  "Darth Vader",
  "Darth Maul",
  "Imperador Palpatine",
  "General Grievous",
  "Boba Fett",
  "Almirante Thrawn",
  "Grande Inquisidor",
  "Kylo Ren",
  "Conde Dookan",
  "Jabba The Hutt"
];

let forcaHerois = 0;
let forcaViloes = 0;

document.addEventListener("DOMContentLoaded", function () {
  exibirListaHerois();
  exibirListaViloes();

  document.getElementById("submitHerois").addEventListener("click", function () {
    // Coleta os números digitados pelo usuário
    const hero1 = parseInt(document.getElementById("hero1").value);
    const hero2 = parseInt(document.getElementById("hero2").value);
    const hero3 = parseInt(document.getElementById("hero3").value);

    // Validação dos inputs
    if (!validarSelecao(hero1) || !validarSelecao(hero2) || !validarSelecao(hero3)) {
      alert("Por favor, insira números entre 1 e 10 para todos os heróis.");
      return;
    }

    // Opcional: Verificar se os números são distintos
    if (new Set([hero1, hero2, hero3]).size < 3) {
      alert("Escolha 3 heróis diferentes.");
      return;
    }

    // Obter os nomes dos heróis escolhidos (os índices são número-1)
    const heroi1Nome = heroisDisponiveis[hero1 - 1];
    const heroi2Nome = heroisDisponiveis[hero2 - 1];
    const heroi3Nome = heroisDisponiveis[hero3 - 1];

    // Calcula a força dos heróis (número aleatório de 1 a 10 para cada)
    forcaHerois = gerarForca() + gerarForca() + gerarForca();

    // Para os vilões, seleciona aleatoriamente 3 vilões (sem repetição)
    const viloesSelecionados = selecionarViloes(3);
    forcaViloes = gerarForca() + gerarForca() + gerarForca();

    // Exibe informações para o usuário
    const infoJogador = `Seu time: ${heroi1Nome}, ${heroi2Nome}, ${heroi3Nome} (Força: ${forcaHerois})`;
    const infoComputador = `Time do Computador: ${viloesSelecionados.join(", ")} (Força: ${forcaViloes})`;

    document.getElementById("informacoesJogador").textContent = infoJogador;
    document.getElementById("informacoesComputador").textContent = infoComputador;

    // Compara as forças e exibe o resultado final
    let resultadoFinal = "";
    if (forcaHerois > forcaViloes) {
      resultadoFinal = "Seu time saiu vitorioso dessa disputa! Que a Força esteja com você.";
    } else if (forcaHerois < forcaViloes) {
      resultadoFinal = "Seu time foi derrotado! O Lado Negro dominou a galáxia.";
    } else {
      resultadoFinal = "O Lado da Luz e o Lado Negro da Força se equipararam em poder! Empate!";
    }
    document.getElementById("resultadoFinal").textContent = resultadoFinal;

    // Esconde a seleção e mostra o resultado
    document.getElementById("selecao-herois").classList.add("hidden");
    document.getElementById("resultadoBtn").style.display = "none";
    document.getElementById("jogarNovamente").classList.remove("hidden");
  });

  // Botão para reiniciar o jogo
  document.getElementById("jogarNovamente").addEventListener("click", function () {
    reiniciarJogo();
  });
});

// Exibe a lista dos 10 heróis disponíveis
function exibirListaHerois() {
  const listaDiv = document.getElementById("lista-herois");
  let html = "<ul>";
  heroisDisponiveis.forEach((heroi, index) => {
    html += `<li>${index + 1} - ${heroi}</li>`;
  });
  html += "</ul>";
  listaDiv.innerHTML = html;
}

// Exibe a lista dos 10 vilões disponíveis
function exibirListaViloes() {
  const listaDiv = document.getElementById("lista-viloes");
  let html = "<h3>Vilões:</h3><ul>";
  viloesDisponiveis.forEach((vilao, index) => {
    html += `<li>${index + 1} - ${vilao}</li>`;
  });
  html += "</ul>";
  listaDiv.innerHTML = html;
}

// Função para validar se o número está entre 1 e 10
function validarSelecao(num) {
  return Number.isInteger(num) && num >= 1 && num <= 10;
}

// Gera um número aleatório de 1 a 10
function gerarForca() {
  return Math.floor(Math.random() * 10) + 1;
}

// Seleciona aleatoriamente 'n' vilões sem repetição
function selecionarViloes(n) {
  const copiaViloes = [...viloesDisponiveis];
  const selecionados = [];
  for (let i = 0; i < n; i++) {
    const indice = Math.floor(Math.random() * copiaViloes.length);
    selecionados.push(copiaViloes.splice(indice, 1)[0]);
  }
  return selecionados;
}

// Reinicia o jogo limpando inputs e resultados
function reiniciarJogo() {
  document.getElementById("hero1").value = "";
  document.getElementById("hero2").value = "";
  document.getElementById("hero3").value = "";
  document.getElementById("informacoesJogador").textContent = "";
  document.getElementById("informacoesComputador").textContent = "";
  document.getElementById("resultadoFinal").textContent = "";
  document.getElementById("selecao-herois").classList.remove("hidden");
  document.getElementById("jogarNovamente").classList.add("hidden");
  forcaHerois = 0;
  forcaViloes = 0;
}
