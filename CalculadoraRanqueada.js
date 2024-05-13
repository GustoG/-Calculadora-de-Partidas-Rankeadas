//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
function calcularNivel(vitorias, derrotas){
    const saldoVit = vitorias - derrotas;
    let nivel;
    if ( vitorias < 10){ 
        nivel = "Ferro"
    } else if ( vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze"
    } else if ( vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"  
    } else if ( vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    } else if ( vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    } else if ( vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    } else if ( vitorias >= 101){
        nivel = "Imortal"
    }
return "O Herói tem de saldo de " + saldoVit + " está no nível de " + nivel
}
const resultado = calcularNivel( 200, 20);
console.log(resultado);