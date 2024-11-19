function sxltdx(T) {
    // Base case
    if (!T) return;
    
    // If both children exist
    if (T.sx && T.dx) {
        // If right value < left value, swap them
        if (T.dx.val < T.sx.val) {
            // Swap entire subtrees
            const temp = T.sx;
            T.sx = T.dx;
            T.dx = temp;
        }
    }
    
    // Recursively process children
    sxltdx(T.sx);
    sxltdx(T.dx);
    
    return T;
}

const tree = {
    val: 19,
    sx: { 
        val: 28,
        dx: { val: 4 }
    },
    dx: {
        val: 15,
        sx: {
            val: 1,
            sx: { val: 3 },
            dx: { val: 1 }
        },
        dx: {
            val: 25,
            sx: { val: 9 }
        }
    }
};

sxltdx(tree);
console.log(JSON.stringify(tree, null, 2));