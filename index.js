// DESAFIO CALCULADORA DE PARTIDAS RANKEADAS

let vitorias = 151
let derrotas = 50
let ranking = calcRanking(vitorias,derrotas)

console.log(ranking)

function calcRanking (vitorias, derrotas){
    return vitorias-derrotas
}

    if (ranking <= 10){
        nivel = "Ferro"
    } else if (ranking > 10 && ranking <= 20){
        nivel = "Bronze"
    } else if (ranking > 20 && ranking <= 50){
        nivel = "Prata"
    } else if (ranking > 50 && ranking <= 80){
        nivel = "Ouro"
    } else if (ranking > 80 && ranking <= 90){
        nivel = "Diamante"
    } else if (ranking > 90 && ranking <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    console.log("O Herói tem saldo de " + ranking + " está no nível de " + nivel)
        

