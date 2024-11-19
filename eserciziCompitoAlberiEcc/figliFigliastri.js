/*
    ho un albero binario T
    creare un albero T' con li stessi nodi di T, ma i figli sinistri e destri scambiati
    in modo che il figlio sinistro sia sempre minore o uguale al figlio destro
    se è presente un solo figlio allora verrà sempre consierato il più grande e andrà messo a destra
*/

const { printTree } = require('./printTree.js');

function sortSib(T) {
    if (!T) return null;

    // Crea il nuovo nodo T2
    let T2 = {
        val: T.val,
        dx: null,
        sx: null
    };

    // Ricorsivamente crea i figli sinistri e destri scambiati
    let left = sortSib(T.sx);
    let right = sortSib(T.dx);

    // Ordina i figli in modo che il figlio sinistro sia minore o uguale al figlio destro
    if (left && right) {
        if (left.val <= right.val) {
            T2.sx = left;
            T2.dx = right;
        } else {
            T2.sx = right;
            T2.dx = left;
        }
    } else if (left) {
        T2.dx = left; // Se c'è solo un figlio, va messo a destra
    } else if (right) {
        T2.dx = right; // Se c'è solo un figlio, va messo a destra
    }

    return T2;
}

// Esempio di utilizzo della funzione printTree
const tree = {
    val: 8,
    sx: {
        val: 2,
        sx: {
            val: 5,
            sx: null,
            dx: null
        },
        dx: {
            val: 4,
            sx: {
                val: 8,
                dx: null,
                sx: null
            },
            dx: null
        }
    },
    dx: {
        val: 9,
        sx: {
            val: 8,
            sx: null,
            dx: null
        },
        dx: null
    }
};

const newTree = sortSib(tree);
printTree(newTree);