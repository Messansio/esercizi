function pota3(t) {
    // Base cases
    if (!t) return;
    if (!t.sx && !t.dx) return;
    
    // Check and process left child
    if (t.sx) {
        if (!t.sx.sx && !t.sx.dx) {
            // Left child is leaf
            t.val += t.sx.val;
            t.sx = null;
        } else {
            // Left child is not leaf, process recursively
            pota3(t.sx);
        }
    }
    
    // Check and process right child
    if (t.dx) {
        if (!t.dx.sx && !t.dx.dx) {
            // Right child is leaf
            t.val += t.dx.val;
            t.dx = null;
        } else {
            // Right child is not leaf, process recursively
            pota3(t.dx);
        }
    }
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

pota3(tree);
console.log(tree);
/* Result:
{
    val: 5,
    sx: { val: 8 },  // 3 + 1 + 4
    dx: { val: 23 }  // 8 + 6 + 9
}
*/