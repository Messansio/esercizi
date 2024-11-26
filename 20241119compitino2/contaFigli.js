
let nSx = 0;
let nDx = 0;

function contafigli(root, callback) {
    if (!root) return;                    // Se non c'è un nodo radice, termina
    
    const queue = [root];                 // Inizializza la coda con il nodo radice
    while (queue.length > 0) {            // Continua finché ci sono nodi da visitare
        const node = queue.shift();       // Preleva il primo nodo dalla coda
        if (node.sx != null)
            nSx++;
        if (node.dx != null)
            nDx++;
        callback(node);
                          // Esegue la callback sul nodo corrente
        for (let child of node.children) { // Per ogni figlio del nodo corrente
            queue.push(child);            // Aggiunge il figlio alla coda
        }
    }
    return {
        nSx,
        nDx
    };
}

var T={
    val: 8,
    sx: {
        val: 9,
        sx: {
            val: 8
        }
    },
    dx: {
        val: 2,
        sx: {
            val: 5
        },
        dx: {
            val: 4,
            sx: {
                val: 8
            }
        }
    }
}

console.log(contafigli(T),[4,2])