const usuario = {
    nome: "Yuri",
    sobrenome: "Marlon",
    cidade: "Contagem",
    raça: "Branco",
    parentes: ["Priscila", "Carlos", "Nicole"]
}

const { nome, sobrenome, cidade, parentes } = usuario;

console.log(nome, sobrenome);

const [mae, pai] = parentes; //aqui o sistema so ira conseguir referenciar o parentes, porque eu desestruturei ele na parte de cima do codigo... caso contrario teria que usar (usuario.parentes)

console.log(mae, pai);

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

const yuri = createUser(usuario);

console.log(yuri);