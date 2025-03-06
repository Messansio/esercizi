/*
We need to find the highest value node reachable from node n in a directed graph G
This requires:
Traversing the graph starting from node n
Keeping track of visited nodes to avoid cycles
Tracking the maximum value found during traversal
We can use DFS (Depth First Search) to explore all possible paths
We'll return the node with maximum value found

This solution:

Uses a Set to track visited nodes
Implements DFS recursively
Compares node values during traversal
Returns the node with highest value reachable from starting node n
Handles cycles in the graph
Works with the graph structure used in class (assuming adjacency list representation)
*/

function sali(G, n) {
    const visited = new Set();
    
    function dfs(node) {
        visited.add(node);
        let maxNode = node;
        
        // Get all neighbors of current node
        const neighbors = G[node] || [];
        
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                const candidateNode = dfs(neighbor);
                // Update maxNode if we found a higher value
                if (G[candidateNode] && G[candidateNode].value > G[maxNode].value) {
                    maxNode = candidateNode;
                }
            }
        }
        
        return maxNode;
    }
    
    return dfs(n);
}