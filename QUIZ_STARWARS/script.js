// Array de perguntas com respostas (na primeira pergunta, adicionamos "Raymus Antilles")
const perguntas = [
  {
    pergunta: "Qual o nome do Darth Vader?",
    respostas: [
      { opcao: "Babu Frik", correto: false },
      { opcao: "Anakin Skywalker", correto: true },
      { opcao: "Chirrut Îmwe", correto: false },
      { opcao: "Tiaan Jerjerrod", correto: false },
      { opcao: "Kassius Konstantine", correto: false },
      { opcao: "Bo-Katan Kryze", correto: false },
      { opcao: "Raymus Antilles", correto: false } // Nova opção adicionada
    ]
  },
  {
    pergunta: "Qual o nome do Planeta do Luke?",
    respostas: [
      { opcao: "Terra", correto: false },
      { opcao: "Alderaan", correto: false },
      { opcao: "Bespin", correto: false },
      { opcao: "Tatooine", correto: true },
      { opcao: "Dagobah", correto: false },
      { opcao: "Corellia", correto: false },
      { opcao: "Coruscant", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome do Planeta do Mestre Yoda?",
    respostas: [
      { opcao: "Tatooine", correto: false },
      { opcao: "Terra", correto: false },
      { opcao: "Alderaan", correto: false },
      { opcao: "Bespin", correto: false },
      { opcao: "Dagobah", correto: true },
      { opcao: "Corellia", correto: false },
      { opcao: "Coruscant", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome da nave do Han Solo?",
    respostas: [
      { opcao: "Super Star Destroyer", correto: false },
      { opcao: "Death Star", correto: false },
      { opcao: "Slave I", correto: false },
      { opcao: "X-Wing", correto: false },
      { opcao: "Millennium Falcon", correto: true },
      { opcao: "Tantive IV", correto: false },
      { opcao: "Razer Crest", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome do Darth Sidious?",
    respostas: [
      { opcao: "Moff Gideon", correto: false },
      { opcao: "Cornelius Evazan", correto: false },
      { opcao: "Galen Erso", correto: false },
      { opcao: "Jan Dodonna", correto: false },
      { opcao: "Sheev Palpatine", correto: true },
      { opcao: "Mas Amedda", correto: false },
      { opcao: "Raymus Antilles", correto: false }
    ]
  }
];

/* 
  Variáveis para controle do quiz:
  - indiceAtual: Índice da pergunta atual.
  - acertos: Número de respostas corretas.
*/
let indiceAtual = 0;
let acertos = 0;

// Seleção dos elementos do HTML para atualização dinâmica
const progressoElemento = document.querySelector(".progresso");
const progressoText = document.getElementById("progresso-text");
const feedbackIcons = document.getElementById("feedback-icons");
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

/**
 * Função carregarPergunta:
 * - Atualiza o progresso (número da pergunta).
 * - Exibe a pergunta e cria os botões de resposta.
 */
function carregarPergunta() {
  // Atualiza o número da pergunta
  progressoText.innerHTML = `${indiceAtual + 1} / ${perguntas.length}`;
  // Obtém a pergunta atual
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  // Limpa as respostas anteriores
  respostasElemento.innerHTML = "";

  // Cria um botão para cada resposta
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    // Evento de clique para cada resposta
    botao.onclick = function () {
      // Cria um elemento de feedback (check ou X)
      const icon = document.createElement("span");
      if (resposta.correto) {
        acertos++;
        icon.innerText = "✓";
        icon.classList.add("feedback-correct");
      } else {
        icon.innerText = "✗";
        icon.classList.add("feedback-incorrect");
      }
      // Adiciona o ícone de feedback à área de progresso (mantendo os anteriores)
      feedbackIcons.appendChild(icon);

      // Avança para a próxima pergunta
      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };

    respostasElemento.appendChild(botao);
  }
}

/**
 * Função finalizarJogo:
 * - Exibe a tela final com o número de acertos.
 */
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  // Esconde a área de perguntas e exibe a tela final
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

// Inicia o quiz ao carregar a página
carregarPergunta();

/*
  Comentários:
  - Utilizamos "for" para iterar sobre as respostas e criar os botões dinamicamente.
  - Após cada resposta, um ícone (✓ ou ✗) é adicionado à barra de progresso para feedback imediato.
  - Ao final do quiz, o número total de acertos é exibido.
*/
