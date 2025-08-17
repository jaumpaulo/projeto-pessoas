let nome //nome do personagem

let classe //classe do personagem
let raca //raça do personagem

let forca
let destreza
let constituicao
let inteligencia
let sabedoria
let carisma
//atributos do personagem

let ficha //ficha do personagem

document.addEventListener("DOMContentLoaded", function() {
    const guardar = document.getElementById("gerar")
    guardar.addEventListener("click", function() {
         nome = document.getElementById("nome").value
         raca = document.getElementById("raca").value
         classe = document.getElementById("classe").value
         forca = parseInt(document.getElementById("forca").value)
         destreza = parseInt(document.getElementById("destreza").value)
         constituicao = parseInt(document.getElementById("constituicao").value)
         inteligencia = parseInt(document.getElementById("inteligencia").value)
         sabedoria = parseInt(document.getElementById("sabedoria").value)
         carisma = parseInt(document.getElementById("carisma").value)

         ficha = (`
            NOME: ${nome}
            RAÇA: ${raca}
            CLASSSE: ${classe}
            ==================
            FORÇA: ${forca}
            DESTREZA: ${destreza}
            CONSTITUIÇÃO: ${constituicao}
            INTEGENCIA: ${inteligencia}
            SABEDORIA: ${sabedoria}
            CARISMA: ${carisma}
            `)
    })
    
})
function mostrarFicha () {
        alert(ficha)
    }
