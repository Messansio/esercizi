function magicmap(A, f) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result.push(f(A[i]));
    }
    return result;
}

// Esempio di utilizzo:
const array = [1, 2, 3, 4];
const raddoppia = x => Math.pow(x,2);
console.log(magicmap(array, raddoppia)); // Output: [2, 4, 6, 8]