/*
For a directed graph, we need to:

Check each node in the graph
Count outgoing edges for each node
Track and return the maximum count found
In the graph format from class:

Graph G is likely represented as an adjacency list
Each node has a list of neighbors (outgoing edges)
We can get outgoing degree by checking length of neighbor list    

This solution:

Takes graph G as input
Iterates through all nodes using for...in
Counts outgoing edges using array length
Tracks maximum degree found
Returns highest outgoing degree in graph
The time complexity is O(|V|) where |V| is number of
*/

function outmaxdeg(G) {
    let maxDegree = 0;
    
    // Iterate through all nodes in the graph
    for (const node in G) {
        // Get number of outgoing edges for current node
        const outDegree = G[node].length;
        
        // Update maxDegree if current node has more outgoing edges
        maxDegree = Math.max(maxDegree, outDegree);
    }
    
    return maxDegree;
}