const frase = "olá mundo!";
console.log(...frase); //aqui separamos os caracteres com um espaço...

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
console.log([...array1,...array2]); //juntando arrays

const objeto1 = {
    nome: "yuri",
    idade: 22,
}
const objeto2 = {
    estadoCivil: "Solteiro",
    nacionalidade: "Brasileiro",
}
console.log({...objeto1,...objeto2}); //juntando objetos 

const arrayLista = ["Vini Jr.", "Rafinha", "Mbappe", "Modrid", "Endrick", "Rodrigo", "Belligham"];

const arrayCopia = arrayLista;

// arrayCopia.pop();
// arrayCopia.pop();
// arrayCopia.pop();
// arrayCopia.push("Curtois");

// console.log(arrayLista);
// console.log(arrayCopia);

const arrayCopiaNovo = [...arrayLista];
arrayCopiaNovo.pop();
arrayCopiaNovo.pop();
arrayCopiaNovo.pop()
arrayCopiaNovo.pop()
arrayCopiaNovo.push("Curtois");

console.log(arrayLista);
console.log(arrayCopiaNovo);

