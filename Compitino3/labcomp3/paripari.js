function paripari(A) {
    const evenAtEvenPos = A.filter((num, index) => 
        index % 2 === 0 && num % 2 === 0
    );
    if (evenAtEvenPos.length === 0) {
        return [];
    }
    if (evenAtEvenPos.length === 1) {
        return [evenAtEvenPos[0]];
    }
    return [evenAtEvenPos[0], evenAtEvenPos[evenAtEvenPos.length - 1]];
}

// Test cases
console.log(paripari([1,2,4,4,6,7])); // [4,6]
console.log(paripari([1,2,3,4])); // []
console.log(paripari([2,3,4,5])); // [2]
console.log(paripari([1,1,1,1])); // []