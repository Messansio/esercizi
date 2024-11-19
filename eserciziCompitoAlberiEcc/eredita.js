function eredita(T) {
    // Base cases
    if (!T) return;
    if (!T.figli || T.figli.length === 0) return;

    // Get number of children
    const numChildren = T.figli.length;
    
    // Calculate inheritance value per child
    const valuePerChild = T.val / numChildren;
    
    // Distribute value to children
    for (let child of T.figli) {
        child.val += valuePerChild;
    }
    
    // Set parent's value to 0
    T.val = 0;
    
    // Recursively apply to all children
    for (let child of T.figli) {
        eredita(child);
    }
}