let pontosJogador = 0;
let pontosVader = 0;

function iniciarJogo() {
  document.querySelector(".content").classList.add("hidden");
  document.getElementById("game-area").classList.remove("hidden");
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("reiniciar").classList.add("hidden");
  document.getElementById("mensagem-acao").textContent = "";
  pontosJogador = 0;
  pontosVader = 0;
}

function jogar(escolhaJogador) {
  // Gera ação aleatória para Vader (1 a 3)
  let acaoVader = Math.floor(Math.random() * 3) + 1;

  // Atualiza mensagem com as escolhas (CORRIGIDO: uso de crases ``)
  document.getElementById(
    "mensagem-acao"
  ).textContent = `Você escolheu: ${formatarAcao(
    escolhaJogador
  )} | Vader escolheu: ${formatarAcao(acaoVader)}`;

  // Verifica resultado da rodada com base nas regras:
  // Ataque vence Bloqueio, Bloqueio vence Força, Força vence Ataque.
  let resultado = resultadoRodada(escolhaJogador, acaoVader);

  if (resultado === 0) {
    alert("Empate nesta rodada!");
  } else if (resultado === 1) {
    alert("Você venceu esta rodada!");
    pontosJogador++;
  } else {
    alert("Vader venceu esta rodada!");
    pontosVader++;
  }

  // Verifica se há diferença de 3 pontos para encerrar o jogo
  if (Math.abs(pontosJogador - pontosVader) >= 3) {
    if (pontosJogador > pontosVader) {
      mostrarResultado(true);
    } else {
      mostrarResultado(false);
    }
  }
}

function resultadoRodada(jogador, vader) {
  if (jogador === vader) return 0;

  // Ataque (2) vence Bloqueio (1)
  if (jogador === 2 && vader === 1) return 1;
  if (jogador === 1 && vader === 2) return -1;

  // Bloqueio (1) vence Força (3)
  if (jogador === 1 && vader === 3) return 1;
  if (jogador === 3 && vader === 1) return -1;

  // Força (3) vence Ataque (2)
  if (jogador === 3 && vader === 2) return 1;
  if (jogador === 2 && vader === 3) return -1;

  return 0;
}

function mostrarResultado(venceu) {
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  let mensagem = document.createElement("p");
  let img = document.createElement("img");
  img.classList.add("resultado-img");

  if (venceu) {
    mensagem.textContent = "May the force be with you!";
    img.src = "https://i.postimg.cc/rs796Dgk/yoda-star-wars.gif";
  } else {
    mensagem.textContent = "I have you now!";
    img.src = "https://i.postimg.cc/2SkDb3rG/your-force-is-strong.gif";
    alert("Vader venceu a partida!");
  }

  resultadoDiv.appendChild(mensagem);
  resultadoDiv.appendChild(img);
  document.getElementById("game-area").classList.add("hidden");
  document.getElementById("reiniciar").classList.remove("hidden");
}

function reiniciarJogo() {
  document.getElementById("game-area").classList.remove("hidden");
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("reiniciar").classList.add("hidden");
  document.getElementById("mensagem-acao").textContent = "";
  pontosJogador = 0;
  pontosVader = 0;
}

function formatarAcao(acao) {
  switch (acao) {
    case 1:
      return "Bloquear";
    case 2:
      return "Atacar";
    case 3:
      return "Usar a Força";
    default:
      return "";
  }
}

// Garante que as funções estejam disponíveis globalmente
window.iniciarJogo = iniciarJogo;
window.jogar = jogar;
window.reiniciarJogo = reiniciarJogo;
