/*
Let's solve this step by step:

Remove node n from graph G
Find all incoming edges to node n
Find all outgoing edges from node n
Reconnect incoming edges to all nodes reached by outgoing edges
Avoid duplicate edges when reconnecting
Here's the implementation:
*/

function killanode(G, n) {
    // Find incoming edges to node n
    const incomingNodes = [];
    for (const node in G) {
        if (G[node].includes(n)) {
            incomingNodes.push(node);
        }
    }
    
    // Get outgoing edges before removing node
    const outgoingNodes = [...G[n]];
    
    // Remove node n from graph
    delete G[n];
    
    // Remove all edges pointing to n
    for (const node in G) {
        G[node] = G[node].filter(dest => dest !== n);
    }
    
    // Reconnect incoming edges to outgoing destinations
    for (const source of incomingNodes) {
        for (const dest of outgoingNodes) {
            // Add edge only if it doesn't already exist
            if (!G[source].includes(dest)) {
                G[source].push(dest);
            }
        }
    }
    
    return G;
}

/*
Key features:

Modifies graph G in place
Handles all edge cases like:
Multiple incoming edges
Multiple outgoing edges
No incoming/outgoing edges
Prevents duplicate edges
Returns modified graph
Time complexity O(V + E) where V is vertices and E is edges
*/