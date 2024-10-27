function saldoVitorias(vitoria, derrota) {
    return vitoria - derrota
}

let resultado = saldoVitorias(200,5)
let verificador = true
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

switch (true) {
    case resultado >= 0 && resultado < 10:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[0])
        break
    case resultado >= 11 && resultado < 20:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[1])
        break
    case resultado >= 20 && resultado < 50:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[2])
        break
    case resultado >= 51 && resultado < 80:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[3])
        break
    case resultado >= 81 && resultado < 90:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[4])
        break
    case resultado >= 91 && resultado < 100:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[5])
        break
    case resultado >= 101:
        console.log("O Herói tem um saldo de " + resultado + " vitórias e está no nível de " + nivel[6])
        break
    default:
        console.log ("nível inválido")

}
