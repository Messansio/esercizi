function isHeap(t) {
    // Base case: empty tree or leaf node
    if (!t || !t.figli || t.figli.length === 0) return true;
    
    // Check all children values are less than parent
    for (const child of t.figli) {
        if (child.val >= t.val) return false;
    }
    
    // Recursively check all subtrees
    return t.figli.every(child => isHeap(child));
}

const validHeap = {
    val: 10,
    figli: [
        {val: 5, figli: [{val: 3}, {val: 4}]},
        {val: 8, figli: [{val: 6}]}
    ]
};
console.log(isHeap(validHeap)); // true

const invalidHeap = {
    val: 10,
    figli: [
        {val: 5, figli: [{val: 3}, {val: 11}]}, // 11 > 5
        {val: 8}
    ]
};
console.log(isHeap(invalidHeap)); // false