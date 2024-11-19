function magicmap(A, f) {
    return A.reduce((acc, curr) => acc.concat(f(curr)), []);
}

// Esempio di utilizzo:
const array = [1, 2, 3, 4];
const func = x => x * 2;
console.log(magicmap(array, func)); // Output: [2, 4, 6, 8]