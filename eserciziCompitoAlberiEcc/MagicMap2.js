function magicmap(A, f) {
    return (function mapHelper(A, f, i) {
        if (i >= A.length) return [];
        return [f(A[i])].concat(mapHelper(A, f, i + 1));
    })(A, f, 0);
}

// Esempio di utilizzo:
const array = [1, 2, 3, 4];
const func = x => x * 2;
console.log(magicmap(array, func)); // Output: [2, 4, 6, 8]