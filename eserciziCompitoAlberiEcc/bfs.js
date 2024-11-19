/**
 * Implementa l'algoritmo di ricerca in ampiezza (Breadth-First Search)
 * @param {Object} root - Il nodo radice dell'albero
 * @param {Function} callback - Funzione da eseguire su ogni nodo
 * 
 * Questo algoritmo:
 * 1. Parte dal nodo radice
 * 2. Esplora tutti i nodi dello stesso livello prima di passare al livello successivo
 * 3. Utilizza una coda (queue) per tenere traccia dei nodi da visitare
 * 4. Per ogni nodo:
 *    - Esegue la callback sul nodo corrente
 *    - Aggiunge tutti i figli del nodo alla coda
 */
function bfs(root, callback) {
    if (!root) return;                    // Se non c'è un nodo radice, termina
    const queue = [root];                 // Inizializza la coda con il nodo radice
    while (queue.length > 0) {            // Continua finché ci sono nodi da visitare
        const node = queue.shift();       // Preleva il primo nodo dalla coda
        callback(node);                   // Esegue la callback sul nodo corrente
        for (let child of node.children) { // Per ogni figlio del nodo corrente
            queue.push(child);            // Aggiunge il figlio alla coda
        }
    }
}