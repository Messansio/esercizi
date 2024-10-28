// Data: 2024-08-10
// Autore: Andrea Messana
// Descrizione: Ordinamento di un array di numeri con algoritmo Bubble Sort
// Utilizzo: node ordinamentoArrayBubbleSort.js

var a = [5, 2, -9, 3, -1, 0];

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for(var i = 0; i < a.length - 1; i++) {
            if(a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return a;
}

console.log(bubbleSort(a));

// Output: [-9, -1, 0, 2, 3, 5] 

// L'algoritmo Bubble Sort è un algoritmo di ordinamento che confronta coppie di elementi adiacenti e li scambia se sono in ordine sbagliato.
// Questo processo viene ripetuto fino a quando non ci sono più scambi da fare.
// Bubble Sort è un algoritmo semplice ma inefficiente, con una complessità computazionale di O(n^2).
// In questo esempio, l'array a viene ordinato utilizzando l'algoritmo Bubble Sort e il risultato viene stampato a schermo.
// L'output sarà [-9, -1, 0, 2, 3, 5], che rappresenta l'array a ordinato dal più piccolo al più grande.