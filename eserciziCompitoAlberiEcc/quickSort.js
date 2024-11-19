function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }
    
    function quickSortHelper(arr, low, high) {
        if (low < high) {
            const pi = partition(arr, low, high);
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    }
    
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]

console.log(quickSort([5, 4, 3, 2, 1]));
// [1, 2, 3, 4, 5]

console.log(quickSort([1]));
// [1]

console.log(quickSort([]));
// []