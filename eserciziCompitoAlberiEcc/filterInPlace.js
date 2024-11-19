function fip(a, p) {
    // writeIndex tracks where to write next valid element
    let writeIndex = 0;
    
    // Scan through array
    for (let i = 0; i < a.length; i++) {
        // If element satisfies predicate, keep it
        if (p(a[i])) {
            // Only write if positions are different
            if (i !== writeIndex) {
                a[writeIndex] = a[i];
            }
            writeIndex++;
        }
    }
    
    // Truncate array to remove extra elements
    a.length = writeIndex;
    
    return a;
}

let arr = [3, 5, 10, 1, 4];
fip(arr, x => x % 2); // Keeps odd numbers
console.log(arr); // [3, 5, 1]

arr = [1, 2, 3, 4, 5];
fip(arr, x => x > 3); // Keeps numbers greater than 3
console.log(arr); // [4, 5]