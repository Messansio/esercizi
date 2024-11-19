function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    
    // Outer loop - passes through array
    for (let i = 0; i < len - 1; i++) {
        swapped = false;
        
        // Inner loop - compare adjacent elements
        for (let j = 0; j < len - 1 - i; j++) {
            // If current > next, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swaps occurred, array is sorted
        if (!swapped) break;
    }
    
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
// [11, 12, 22, 25, 34, 64, 90]

console.log(bubbleSort([5, 4, 3, 2, 1]));
// [1, 2, 3, 4, 5]

console.log(bubbleSort([1, 2, 3, 4, 5])); 
// [1, 2, 3, 4, 5] (already sorted - early exit)