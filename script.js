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
    })
})

function mostrarFicha () {
    let forcaModificador = Math.floor((forca - 10)/2)
    let destrezaModificador = Math.floor((destreza - 10)/2)
    let constituicaoModificador = Math.floor((constituicao - 10)/2)
    let inteligenciaModificador = Math.floor((inteligencia - 10)/2)
    let sabedoriaModificador = Math.floor((sabedoria - 10)/2)
    let carismaModificador = Math.floor((carisma - 10)/2)

       ficha = alert (`

            NOME: ${nome}
            RAÇA: ${raca}
            CLASSSE: ${classe}
            ==================
            FORÇA: ${forca}   modificador: ${forcaModificador}
            DESTREZA: ${destreza}   modificador: ${destrezaModificador} 
            CONSTITUIÇÃO: ${constituicao}   modificador: ${constituicaoModificador} 
            INTEGENCIA: ${inteligencia}   modificador: ${inteligenciaModificador}
            SABEDORIA: ${sabedoria}   modificador: ${sabedoriaModificador}
            CARISMA: ${carisma}   modificador: ${carismaModificador}
            `)
}

//ajeitar o calculador de modificador