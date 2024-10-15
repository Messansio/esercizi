// Data: 2024-08-10
// Autore: Andrea Messana
// Descrizione: Ordinamento di un array di numeri dal più grande al più piccolo
// Utilizzo: node OrdinamentoContrarioArray.js

var a = [5, 2, -9, 3, -1, 0];

function compare(x, y) {
    if(x < y) {
        return 1;
    } else if(x > y) {
        return -1;
    }
    return 0;
}

console.log(a.sort(compare)); // [5, 3, 2, 0, -1, -9]