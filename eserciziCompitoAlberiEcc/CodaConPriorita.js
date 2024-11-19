function enqueue(Q,e,pri) {
    let i = 0;
    while (i < Q.length && Q[i].pri >= pri) {
        i++;
    }
    Q.splice(i,0,{el:e,pri:pri});
}

function enqueue(Q, e, pri = null) {
    if (pri === null) {
        // Se pri non è passato, aggiungi l'elemento in fondo alla coda
        Q.push({ el: e, pri: -Infinity });
    } else {
        let i = 0;
        while (i < Q.length && Q[i].pri >= pri) {
            i++;
        }
        Q.splice(i, 0, { el: e, pri: pri });
    }
}

function dequeue(Q) {
    if(Q.length==0)
        return undefined;
    return Q.shift().el;
}

// Esempio di utilizzo:

let Q = [];
enqueue(Q, 'a', 3);
enqueue(Q, 'b', 1);
enqueue(Q, 'c', 2);
enqueue(Q, 'd');
enqueue(Q, 'e', 1);
enqueue(Q, 'f');
console.log(Q);
console.log(dequeue(Q)); // Output: 'a'
console.log(dequeue(Q)); // Output: 'c'
console.log(dequeue(Q)); // Output: 'b'
console.log(dequeue(Q)); // Output: 'e'
console.log(dequeue(Q)); // Output: 'd'
console.log(dequeue(Q)); // Output: 'f'
console.log(dequeue(Q)); // Output: undefined