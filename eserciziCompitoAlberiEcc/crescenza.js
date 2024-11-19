function crescenza(a) {
    // Handle single element case
    if (a.length === 1) return [0, 0];
    
    let currentStart = 0;
    let currentLength = 1;
    let maxStart = 0;
    let maxLength = 1;
    
    // Iterate through array
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[i-1]) {
            // Continue current sequence
            currentLength++;
            
            // Update max if current is longer
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
    
    // Return [start, end] indices
    return [maxStart, maxStart + maxLength - 1];
}

console.log(crescenza([2,4,3,6,8,11,2,5])); // [2,5]
console.log(crescenza([5])); // [0,0]
console.log(crescenza([0,3,5,8,10,12,15])); // [0,6]