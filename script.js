let classeValor
// classes

let racaValor
// raças

let vida
let nome 
// personagem

let racaNome
let classeNome
// raça/classe

let listaPergunta
//listas

let ficha
let atributos
//resultado da ficha

let forçaValor
let destrezaValor
let constituicaoValor
let sabedoriaValor
let inteligenciaValor
let carisamValor
//valores dos atributos

function criarFicha () {
alert(`
    Caso queira saber as classes ou as raças digite:
    "CLASSES" para ver a lista de classes ou "RAÇAS" 
    para saber a lista de raças. Caso queira saber 
    os dois de uma só vez, digite "TUDO"
`)

listaPergunta = prompt("O que deseja saber?")

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

// Nome do personagem
nome = prompt("Digite o nome do seu personagem: ").toLowerCase()

// Classe do personagem
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

// Raça do personagem
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

// Calculando vida
vida = classeValor + racaValor

alert(`
    =====FICHA DO SEU PERSONAGEM=====
    NOME: ${nome}
    RAÇA: ${racaNome}
    CLASSE: ${classeNome}
    VIDA: ${vida}
    =================================
`)

// Guardando ficha em uma variável
ficha = `
    =====FICHA DO SEU PERSONAGEM=====
    NOME: ${nome}
    RAÇA: ${racaNome}
    CLASSE: ${classeNome}
    VIDA: ${vida}
    =================================
`
}

// Funções
function mostrarFicha(ficha) {
    alert(ficha)
}

function adicionarAtributos() {
    alert(`
        Os respectivos valores que você pode colocar são:
        8, 10, 12, 13, 14 e 15
    `)

    alert(`
        Você pode colocar esses valores nos seguintes
        atributos: FORÇA, DESTREZA, CONSTITUIÇÃO
        SABEDORIA, INTELIGÊNCIA E CARISMA
    `)

    forçaValor = parseInt(prompt("Valor de força: "))
    destrezaValor = parseInt(prompt("Valor de destreza: "))
    constituicaoValor = parseInt(prompt("Valor de constituição: "))
    sabedoriaValor = parseInt(prompt("Valor de sabedoria: "))
    inteligenciaValor = parseInt(prompt("Valor de inteligencia: "))
    carisamValor = parseInt(prompt("Valor de carisma: "))

    atributos = `
        =====ATRIBUTOS=====
        FORÇA: ${forçaValor} 
        DESTREZA: ${destrezaValor}
        CONSTIUIÇÃO: ${constituicaoValor}
        SABEDORIA: ${sabedoriaValor}
        INTELIGENCIA: ${inteligenciaValor}
        CARISMA: ${carisamValor}
        ===================
    `
    alert(atributos)

    return atributos
}

function mostrarAtributos (atributos) {
    alert(atributos)
}