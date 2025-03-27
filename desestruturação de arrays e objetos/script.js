const usuario = {
    nome: "Marcos",
    sobrenome: "André",
    cidade: "Contagem",
    parentes: ["Luciana", "Carlos", "Julia"]
}

const { nome, sobrenome, cidade, parentes } = usuario;

console.log(nome + " " + sobrenome); //Marcos André

const [mae, pai] = parentes; //aqui o sistema so ira conseguir referenciar o parentes, porque eu desestruturei ele na parte de cima do codigo... caso contrario teria que usar (usuario.parentes)

console.log(mae, pai); //Luciana, Carlos

//criando funções com parametros de arrays e objetos desestruturados:
function createUser({ nome, sobrenome, cidade, parentes }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        nome,
        sobrenome,
        cidade,
        parentes
    }
}

const marcos = createUser(usuario);

console.log(marcos); //id random, Marcos, André, Contagem, Luciana, Carlos, Julia
