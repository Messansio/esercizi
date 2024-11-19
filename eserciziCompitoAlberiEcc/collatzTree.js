function collatz(A) {
    // Funzione per calcolare la sequenza di Collatz per un numero n
    function generateCollatzSequence(n) {
        const sequence = [];
        while (n !== 1) {
            sequence.push(n);
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
        }
        sequence.push(1); // Aggiungi il nodo finale 1
        return sequence;
    }

    // Funzione per costruire un albero k-ario
    function buildTree(sequences) {
        const tree = {};

        sequences.forEach(sequence => {
            let currentNode = tree;
            sequence.forEach(num => {
                if (!currentNode[num]) {
                    currentNode[num] = {}; // Crea un nodo figlio
                }
                currentNode = currentNode[num];
            });
        });

        return tree;
    }

    // Genera tutte le sequenze di Collatz per i numeri in A
    const collatzSequences = A.map(num => generateCollatzSequence(num));

    // Costruisce l'albero delle sequenze
    const collatzTree = buildTree(collatzSequences);

    return collatzTree;
}

// Esempio di utilizzo
const input = [3, 6, 7, 21]; // Numeri di esempio
const tree = collatz(input);
console.log(JSON.stringify(tree, null, 2)); // Stampa l'albero in formato leggibile
