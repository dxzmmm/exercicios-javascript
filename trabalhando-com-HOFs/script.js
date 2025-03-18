const calculadora = {
    somar: function(){
        const a = parseFloat(prompt("Insira o valor do primeiro número:"))
        const b = parseFloat(prompt("Insira o valor do segundo número:"))
        if (isNaN(a) || isNaN(b)) {
            return alert("Erro: Insira números válidos.");
        }
        return alert("O resultado foi: " + (a + b));
    },
    multiplicacao: function(){
        const a = parseFloat(prompt("Insira o valor do primeiro número:"))
        const b = parseFloat(prompt("Insira o valor do segundo número:"))
        if (isNaN(a) || isNaN(b)) {
            return alert("Erro: Insira números válidos.");
        }
        return alert("O resultado foi: " + (a * b));
    },
    divisao: function(){
        const a = parseFloat(prompt("Insira o valor do primeiro número:"))
        const b = parseFloat(prompt("Insira o valor do segundo número:"))
        if (isNaN(a) || isNaN(b)) {
            return alert("Erro: Insira números válidos.");
        }
            if(b === 0){
                alert("Divisão por zero é inválido! Tente novamente!");
            } else{
        return alert("O resultado foi: " + (a / b));
    }},
    subtracao: function(){
        const a = parseFloat(prompt("Insira o valor do primeiro número:"))
        const b = parseFloat(prompt("Insira o valor do segundo número:"))
        if (isNaN(a) || isNaN(b)) {
            return alert("Erro: Insira números válidos.");
        }
        return alert("O resultado foi: " + (a - b));
    }

}


function executarOperacao(){
let escolha;
do {
    escolha = parseInt(prompt(`Bem vindo a calculadora de quatro operações escolha uma opção para continuar ou a opção para sair:
        1- Soma
        2- Subtração
        3- Multiplicação
        4- Divisão
        5- Sair`
    ))

    switch (escolha){
        case 1:
            calculadora.somar();
            break;
        case 2:
            calculadora.subtracao();
            break;
        case 3:
            calculadora.multiplicacao();
            break;
        case 4:
            calculadora.divisao();
            break;
        case 5:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
            
    }
} while (escolha !== 5)
}

// executarOperacao();

//Agora High order function simples
console.log("Hofs simples: ")

function soma (a, b){
    return a + b;
}

function escolhaOperacao(operacao, a, b){
    return operacao(a, b);
}

console.log(escolhaOperacao(soma, 50, 60));

function multiplicacao(a, b){
    return a * b;
}

console.log(escolhaOperacao(multiplicacao, 50, 5));

// High order functions com arrays
console.log("Hofs com arrays - .map()");
// .map()

//primeiro temos que ter um objeto

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//agora o escopo do .map()

const nomePersonagem = personagens.map(function (personagens){
    return personagens.nome;
})

console.log(nomePersonagem);

//Hofs com array .filter()
console.log("Hofs com array .filter()");

//agora iremos filtrar algo dentro da lista por exemplo classes iguais ou niveis iguais

//filtrar raça
const filtrarRaca = personagens.filter(function(racaPers){
    return racaPers.raca === "Humano"; 
})

console.log(filtrarRaca);

//filtrar classe
const filtrarClasse = personagens.filter(function(classePers){
    return classePers.classe == "Guerreiro";
})

console.log(filtrarClasse);

//Hofs com arrays .reduce()
console.log("Agora utilizaremos o .reduce()");

//para somarmos valores de um objeto ou array
const somaNiveis = personagens.reduce(function (acumulator, personagem){
    return acumulator + personagem.nivel;
},0)

console.log(somaNiveis);

//para encontrar o maior numero, no caso maior nivel de um personagem dentro do objeto que estamos trabalhando
//serve tanto para mostrar o maior atual quanto o menor atual somente inverter o sinal de < ou >

const maiorNivel = personagens.reduce(function(acumulator, personagemAtual){
   return personagemAtual.nivel > acumulator.nivel ? personagemAtual : acumulator
}, personagens[0]);

console.log(maiorNivel);

const menorNivel = personagens.reduce(function(acumulator, personagemAtual){
    return personagemAtual.nivel < acumulator.nivel ? personagemAtual : acumulator
 }, personagens[0]);
 
console.log(menorNivel);


//agora iremos criar objetos através do objeto principal separando suas classes 

const separarClasses = personagens.reduce(function (acumulador, personagemAtual) {
    if(acumulador[personagemAtual.raca]){
    acumulador[personagemAtual.raca].push(personagemAtual);
} else {
    acumulador[personagemAtual.raca] = [personagemAtual];
}
    return acumulador;
}, {});

console.log(separarClasses);