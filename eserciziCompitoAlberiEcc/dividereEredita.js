function eredita(t) {
    function processNode(node, inheritance = 0) {
        // Add inheritance to current value
        const totalValue = node.val + inheritance;
        
        // Leaf node - return its total value
        if (!node.figli || node.figli.length === 0) {
            return totalValue;
        }
        
        // Calculate share per child
        const sharePerChild = totalValue / node.figli.length;
        
        // Get max value among children
        return Math.max(...node.figli.map(child => 
            processNode(child, sharePerChild)
        ));
    }
    
    return processNode(t);
}

const t1 = {
    val: 16,
    figli: [
        {val: 4},
        {val: 2, figli: [{val: 8}, {val: 2}]}
    ]
};
console.log(eredita(t1)); // 13

const t2 = {
    val: 100,
    figli: [
        {val: 10},
        {val: 20},
        {val: 30}
    ]
};
console.log(eredita(t2)); // 43.33...