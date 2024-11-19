function pota2(t, k) {
    // Base case: empty tree
    if (!t) return 0;
    
    // If current node value exceeds k
    if (t.val > k) {
        // Count nodes in current subtree
        return 1 + 
            pota2(t.sx, k) + 
            pota2(t.dx, k);
    }
    
    // Process subtrees and accumulate removed count
    let count = 0;
    
    // Process and update left subtree
    const leftCount = pota2(t.sx, k);
    if (t.sx && t.sx.val > k) t.sx = null;
    count += leftCount;
    
    // Process and update right subtree
    const rightCount = pota2(t.dx, k);
    if (t.dx && t.dx.val > k) t.dx = null;
    count += rightCount;
    
    return count;
}

const tree = {
    val: 5,
    sx: {
        val: 3,
        sx: {val: 1},
        dx: {val: 4}
    },
    dx: {
        val: 8,
        sx: {val: 6},
        dx: {val: 9}
    }
};

console.log(pota2(tree, 6)); // 2 (removes 8 and 9)
console.log(tree); // Shows modified tree