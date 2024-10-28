// Data: 2024-08-10
// Autore: Andrea Messana
// Descrizione: Ordinamento di un array di numeri dal più piccolo al più grande prima dispari poi pari
// Utilizzo: node OrdinamentoDispariPariArray.js

var a = [5, 2, -9, 3, -1, 0];

function compareDispariPari(x, y) {
    if(x % 2 !== 0 && y % 2 === 0) {
        return -1;
    } else if(x % 2 === 0 && y % 2 !== 0) {
        return 1;
    } else if(x < y) {
        return -1;
    } else if(x > y) {
        return 1;
    }
    return 0;
}

console.log(a.sort(compareDispariPari)); // [-9, -1, 3, 5, 0, 2]