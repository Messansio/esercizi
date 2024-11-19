function omerge(o1, o2) {
    // Create result object
    const result = {};
    
    // Get all keys
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    
    // Get unique keys using Set operations
    const allKeys = new Set([...keys1, ...keys2]);
    const commonKeys = new Set(keys1.filter(k => keys2.includes(k)));
    const uniqueKeys = [...allKeys].filter(k => !commonKeys.has(k));
    
    // Copy values for unique keys
    for (const key of uniqueKeys) {
        if (key in o1) result[key] = o1[key];
        if (key in o2) result[key] = o2[key];
    }
    
    return result;
}

// Test case 1
const o1 = {pippo: 1, pluto: 2, paperino: 3};
const o2 = {pluto: 5, qui: 7, qua: 3};
console.log(omerge(o1, o2)); // {pippo: 1, paperino: 3, qui: 7, qua: 3}

// Test case 2
const o3 = {pippo: 1, pluto: 2};
console.log(omerge(o3, o3)); // {}