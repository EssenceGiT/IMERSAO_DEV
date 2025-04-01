function jogar() {
    // Pergunta a idade do jogador
    let idade = prompt("How old are you?");
    if (idade < 18) {
        alert("You can't play this game. 😢");
        return;
    }
    
    // Opções do jogo
    const opcoes = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    };
    
    // Jogador escolhe uma opção
    let escolhaJogador = parseInt(prompt("Choose: \n1 - Rock \n2 - Paper \n3 - Scissors"));
    
    if (!opcoes[escolhaJogador]) {
        alert("Invalid choice! Try again.");
        return;
    }
    
    // Computador escolhe aleatoriamente
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    alert(`You chose: ${opcoes[escolhaJogador]} \nComputer chose: ${opcoes[escolhaComputador]}`);
    
    // Verifica o vencedor
    if (escolhaJogador === escolhaComputador) {
        alert("It's a Draw! 😱");
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) || 
        (escolhaJogador === 2 && escolhaComputador === 1) || 
        (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
        alert("You Win! 🥳");
    } else {
        alert("Computer Won 🥲!");
    }
}
