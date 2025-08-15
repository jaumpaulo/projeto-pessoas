let classeValor
//classes

let racaValor
//raças

let vida
let nome 
//personagem

let racaNome
let classeNome
//raça/classe

alert(`
    caso queira saber as classes ou as raças digite:
    "CLASSES" para ver a lista de classes ou "RAÇAS" 
    para saber a lista de raças. caso queira saber 
    os dois de uma só vez, digite "TUDO"
    `)

let listaPergunta = prompt("O que deseja saber?")

if (listaPergunta === "CLASSES") {
    alert(`
        LISTA DE CLASSES: 
        MAGO
        DRUIDA
        PALADINO
        LADINO
        GUERREIRO
        `)
}

if (listaPergunta === "RAÇAS") {
    alert(`
        LISTA DAS RAÇAS: 
        HUMANO
        ANÃO
        ELFO
        ORC
        GIGANTE
        `)
}

if (listaPergunta === "TUDO") {
    alert(`
        LISTA CLASSES/RAÇAS:

        CLASSES:           RAÇAS:
        MAGO               HUMANO
        DRUIDA             ANÃO
        PALADINO           ELFO
        LADINO             ORC
        GUERREIRO          GIGANTE
        `)
}

alert("Agora vamos começar a fazer a ficha!")

nome = prompt("Digite o nome do seu personagem: ").toLowerCase()

classeNome = prompt("Digite a classe do seu personagem: ").toLowerCase()
if (classeNome == "mago") {
    classeValor = 8
}

if (classeNome == "druida") {
    classeValor = 12
}

if (classeNome == "paladino") {
    classeValor = 15
}

if (classeNome == "ladino") {
    classeValor = 9
}

if (classeNome == "guerreiro") {
    classeValor = 15
}
//informações da classe

racaNome = prompt("Digite a raça do seu personagem: ").toLowerCase()
if (racaNome == "humano") {
    racaValor = 2
} 

if (racaNome == "anão") {
    racaValor = 1
}

if (racaNome == "elfo") {
    racaValor = 3
}

if (racaNome == "orc") {
    racaValor = 4
}

if (racaNome == "gigante") {
    racaValor = 6
}
//informações da raça

vida = classeValor + racaValor
//vida do personagem

alert(`
    =====FICHA DO SEU PERSONAGEM=====
    NOME: ${nome}
    RAÇA: ${racaNome}
    CLASSE: ${classeNome}
    VIDA: ${vida}
    =================================
    `)

const ficha = `
    =====FICHA DO SEU PERSONAGEM=====
    NOME: ${nome}
    RAÇA: ${racaNome}
    CLASSE: ${classeNome}
    VIDA: ${vida}
    =================================
    `

    function mostrarFicha (ficha) {
        alert(ficha)
    }
