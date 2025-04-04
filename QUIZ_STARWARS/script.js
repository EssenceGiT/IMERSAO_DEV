// Array de perguntas com respostas
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
  Variáveis de controle:
  - indiceAtual: índice da pergunta atual.
  - acertos: contador de respostas corretas.
*/
let indiceAtual = 0;
let acertos = 0;

// Seleciona os elementos HTML que serão atualizados dinamicamente
const progressoText = document.getElementById("progresso-text");
const feedbackIcons = document.getElementById("feedback-icons");
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

/**
 * Função carregarPergunta:
 * - Atualiza o progresso e exibe a pergunta atual.
 * - Cria os botões de resposta dinamicamente.
 */
function carregarPergunta() {
  progressoText.innerHTML = `${indiceAtual + 1} / ${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  // Cria botões para cada resposta
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    
    // Ao clicar, exibe feedback e avança para a próxima pergunta
    botao.onclick = function () {
      const icon = document.createElement("span");
      if (resposta.correto) {
        acertos++;
        icon.innerText = "✓";
        icon.classList.add("feedback-correct");
      } else {
        icon.innerText = "✗";
        icon.classList.add("feedback-incorrect");
      }
      // Adiciona o ícone de feedback sem apagar os anteriores
      feedbackIcons.appendChild(icon);

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
 * - Mostra o botão de "Tentar Novamente".
 */
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  // Esconde a área de perguntas e respostas
  conteudo.style.display = "none";
  // Exibe a tela final com o resultado e o botão de reiniciar
  conteudoFinal.style.display = "flex";
}

/**
 * Função reiniciarQuiz:
 * - Reinicia o quiz, limpando variáveis e reexibindo a área de conteúdo.
 */
function reiniciarQuiz() {
  indiceAtual = 0;
  acertos = 0;
  feedbackIcons.innerHTML = "";
  conteudo.style.display = "flex";
  conteudoFinal.style.display = "none";
  carregarPergunta();
}

// Inicia o quiz ao carregar a página
carregarPergunta();

// Adiciona evento para o botão "Tentar Novamente"
document.getElementById("reiniciarQuiz").addEventListener("click", reiniciarQuiz);

/*
  Comentários:
  - Usamos "for" para iterar sobre as respostas e criar botões dinamicamente.
  - Após cada resposta, um ícone (✓ ou ✗) é adicionado à barra de progresso para feedback imediato.
  - Ao final, o resultado é exibido e o usuário pode reiniciar o quiz.
*/
