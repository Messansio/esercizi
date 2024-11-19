function partapply(bop, a) {
    // Return new function that captures 'a' in closure
    return function(b) {
        // Apply original binary operation with both arguments
        return bop(a, b);
    };
}

// Addition example
const addOne = partapply((x,y) => x + y, 1);
console.log(addOne(5)); // 6

// String concatenation example
const addD = partapply((x,y) => x + y, "d");
console.log(addD("esisto")); // "desisto"

// Multiplication example
const multiplyByTwo = partapply((x,y) => x * y, 2);
console.log(multiplyByTwo(3)); // 6