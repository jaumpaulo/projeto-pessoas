alert("Caso queira uma lista das classes ou raças, digite HELP")

let mago
let druida
let paladino
let ladino
let guerreiro
//classes

let humano
let anao
let elfo
let orc
let gigante
//raças


//raça/classe

let classeHelp
let racaHelp
//variaveis dos HELPs

let classe = prompt("Digite uma classe: ")
//escolha classe

if (classe === "HELP"){
    alert(`
        As classes são:
        MAGO
        DRUIDA
        PALADINO
        LADINO
        GUERREIRO`)

        classeHelp = prompt("Agora digite uma classe: ")
}

if (raca === "HElP"){
    alert(`
         As raças são: 
         HUMANO
         ANÃO
         ELFO
         ORC
         GIGANTE`)

         racaHelp = prompt("Agora digite uma raça: ") 
}

if (classe == "mago") {
    mago = 8
}

if (classe == "druida") {
    druida = 12
}

if (classe == "guerreiro") {
    guerreiro = 15
}

if (classe == "paladino") {
    paladino = 15
}

if (classe == "laidino") {
    ladino = 8
}

if (classeHelp == "mago") {
    mago = 8
}

if (classeHelp == "druida") {
    druida = 12
}

if (classeHelp == "guerreiro") {
    guerreiro = 15
}

if (classeHelp == "paladino") {
    paladino = 15
}

if (classeHelp == "ladino") {
    ladino = 8
}
//vida das classes

let raca = prompt("Digite uma raça: ")
//raca

if (raca == "HElP") {
    alert(`
        Essas são as raças: 
        HUMANO
        ELFO
        ANÃO
        ORC
        GIGANTE`)

    racaHelp = prompt ("Esolha uma raça: ")
}

if (raca == "humano") {
    humano = 2
}

if (raca == "elfo") {
    elfo = 3
}

if (raca == "anão") {
    anao = 1
}

if (raca == "orc") {
    orc = 5
}

if (raca == "gigante") {
    gigante = 6
}

if (racaHelp == "humano") {
    humano = 2
}

if (racaHelp == "elfo") {
    elfo = 3
}

if (racaHelp == "anão") {
    anao = 1
}

if (racaHelp == "orc") {
    orc = 5
}

if (racaHelp == "gigante") {
    gigante = 6
}
//vida da raça

alert (`=====FICHA DO PERSONAGEM=====
    NOME:
    RAÇA:
    CLASSE:
    =============================`)