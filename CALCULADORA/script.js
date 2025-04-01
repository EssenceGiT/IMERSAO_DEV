function conversor() {
    const valor = parseFloat(prompt("Digite um valor em reais:"));
    
    if (isNaN(valor)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    const taxasDeCambio = {
        1: ["Dólar", 0.18, "USD"],
        2: ["Euro", 0.16, "EUR"],
        3: ["Libra", 0.14, "GBP"],
        4: ["Yen", 26.29, "JPY"],
        5: ["Dólar Canadense", 0.25, "CAD"],
        6: ["Peso Argentino", 188.08, "ARS"],
        7: ["Rublos Russos", 14.57, "RUB"],
        8: ["Won Sul-Coreano", 258.30, "KRW"]
    };
    
    let opcoesMoedas = "Escolha uma moeda para conversão:\n";
    for (const [key, [moeda]] of Object.entries(taxasDeCambio)) {
        opcoesMoedas += `${key} - ${moeda}\n`;
    }
    
    const escolha = parseInt(prompt(opcoesMoedas));
    
    if (!taxasDeCambio.hasOwnProperty(escolha)) {
        alert("Opção inválida. Tente novamente.");
        return;
    }
    
    const [moedaEscolhida, taxa, currencyCode] = taxasDeCambio[escolha];
    const valorConvertido = (valor * taxa).toLocaleString("pt-BR", {
        style: "currency",
        currency: currencyCode,
    });
    
    alert(`R$ ${valor.toFixed(2)} é equivalente a ${valorConvertido} - ${moedaEscolhida}`);
}
