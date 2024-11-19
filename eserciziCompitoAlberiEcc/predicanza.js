function predicanza(a, p) {
    // Handle single element case
    if (a.length === 1) return [0, 0];
    
    let currentStart = 0;
    let currentLength = 1;
    let maxStart = 0;
    let maxLength = 1;
    
    // Check each pair of adjacent elements
    for (let i = 1; i < a.length; i++) {
        if (p(a[i-1], a[i])) {
            // Predicate satisfied, continue sequence
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStart = currentStart;
            }
        } else {
            // Reset sequence
            currentStart = i;
            currentLength = 1;
        }
    }
    
    return [maxStart, maxStart + maxLength - 1];
}

console.log(predicanza([2,4,3,6,8,11,2,5], (x,y) => x < y)); // [2,5]
console.log(predicanza([2,4,3,6,8,11,2,5], (x,y) => x > y)); // [1,2]
console.log(predicanza(["ciao","mamma"], (x,y) => x.length <= y.length)); // [0,1]