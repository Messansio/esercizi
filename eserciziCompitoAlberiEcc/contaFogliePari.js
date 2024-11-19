const { printTree } = require('./printTree.js');

function contaFogliePari(T) {
    if (T === null || T === undefined) {
        return 0;
    }

    if (!T.left && !T.right) {
        return T.val % 2 === 0 ? 1 : 0;
    }

    return contaFogliePari(T.left) + contaFogliePari(T.right);
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

printTree(tree);
console.log(contaFogliePari(tree)); // Output: 2