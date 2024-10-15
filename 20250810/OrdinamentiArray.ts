// Data: 2024-08-10
// Autore: Andrea Messana
// Descrizione: Ordinamento di un array di numeri prima dal più piccolo al più grande e poi dal più grande al più piccolo poi prima pari e poi dispari e infine prima dispari e poi pari
// Utilizzo: node OrdinamentiArray.js

var a = [5, 2, -9, 3, -1, 0];

// Ordinamento crescente
a.sort(function (a, b) {
    return a - b;
});

console.log("Ordinamento crescente: " + a);

// Ordinamento decrescente
a.sort(function (a, b) {
    return b - a;
});

console.log("Ordinamento decrescente: " + a);

// Ordinamento pari e dispari
a.sort(function(a, b) {
    if(a % 2 === 0 && b% 2 !== 0) {
        return -1;
    } else if(a % 2 !== 0 && b % 2 === 0) {
        return 1;
    } else if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    }
    return 0;
});

console.log("Ordinamento pari e dispari: " + a);

// Ordinamento dispari e pari
a.sort(function (a, b)   {
    if(a % 2 !== 0 && b % 2 === 0) {
        return -1;
    } else if(a % 2 === 0 && b % 2 !== 0) {
        return 1;
    } else if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    }
    return 0;
});

console.log("Ordinamento dispari e pari: " + a);