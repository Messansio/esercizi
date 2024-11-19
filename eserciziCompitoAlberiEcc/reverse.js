// 1. Iterative solution with loop and indices
function reverseIterative(a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = a[a.length - 1 - i];
    }
    return result;
}

// 2. Using array methods
function reverseArrayMethods(a) {
    return [...a].reverse();
}

// 3. Recursive with array methods
function reverseRecursiveArray(a) {
    if (a.length <= 1) return [...a];
    return [...a.slice(-1), ...reverseRecursiveArray(a.slice(0, -1))];
}

// 4. Recursive with destructuring
function reverseRecursiveDestructuring(a) {
    if (a.length <= 1) return [...a];
    const [first, ...rest] = a;
    return [...reverseRecursiveDestructuring(rest), first];
}