function somaTotal(...numbers) {
    return numbers.reduce((acumulador, numeros) => acumulador + numeros, 0)
}

console.log(somaTotal(1,5,7,23,4));

function exibirInfos(nome, ...informacoes) {
    console.log(nome);
    console.log(informacoes);
}

exibirInfos("Yuri", 22, "Solteiro", "Contagem", "Programador JS");