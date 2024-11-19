function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // Found target
        if (arr[mid] === target) {
            return mid;
        }
        
        // Target in right half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Target in left half
        else {
            right = mid - 1;
        }
    }
    
    // Target not found
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 5));  // 4
console.log(binarySearch(arr, 10)); // 9
console.log(binarySearch(arr, 1));  // 0
console.log(binarySearch(arr, 11)); // -1
console.log(binarySearch([], 5));   // -1