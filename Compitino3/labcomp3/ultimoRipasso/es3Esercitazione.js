function paripari(A) {
    if (A == []) return [];
    let B = [];
    for (let i = 0; i < A.length; i++) {
        if (i % 2 === 0 && A[i] % 2 === 0)
            B.push(A[i]);
    }
    return [B[0], B[B.length-1]];
}

console.log(paripari([1,2,4,4,6,7])); // [4,6]
console.log(paripari([1,2,3,4])); // []
console.log(paripari([2,3,5])); // [2, 2]
console.log(paripari([1,1,1,1])); // []