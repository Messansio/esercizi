function appiattisci(a) {
    return a.reduce((flat, item) => {
        // If item is array, recursively flatten
        if (Array.isArray(item)) {
            return flat.concat(appiattisci(item));
        }
        // If item is number, add to result
        return flat.concat(item);
    }, []);
}

console.log(appiattisci([8, [2, 2], 1])); 
// [8, 2, 2, 1]

console.log(appiattisci([[1], 8, [1, 2], 2, []])); 
// [1, 8, 1, 2, 2]

console.log(appiattisci([1, [2, [3, 4], 5], 6])); 
// [1, 2, 3, 4, 5, 6]

console.log(appiattisci([])); 
// []