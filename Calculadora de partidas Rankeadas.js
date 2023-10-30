let v = 14
let d = 15

let saldo=v-d
let elo=""

function calcular (v,d) {


if (saldo>=0 && saldo<=10) {
elo="Ferro"
}
    else if (saldo>=11 && saldo<=20) {
    elo="Bronze"
    }
    else if (saldo>=21 && saldo<=50) {
    elo= "Prata"
    }
    else if (saldo>=51 && saldo<=80) {
    elo="Ouro"
    }
    else if (saldo>=81 && saldo<=90) {
    elo= "Diamante"
    }
    else if (saldo>=91 && saldo<=100) {
    elo="Lendario"
    }
    else if (saldo>=101) {
    elo="Imortal"
    }
else{
    console.log("O saldo é negativo, entre com outro número")
}

console.log ("O Herói tem saldo de " + saldo + " está no nível de " + elo)

}
calcular();