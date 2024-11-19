function slimfit(A, P) {
    let bestFunction = null;
    let minError = Infinity;

    for (let f of A) {
        let error = 0;
        for (let [x, y] of P) {
            let diff = y - f(x);
            error += diff * diff;
        }
        if (error < minError) {
            minError = error;
            bestFunction = f;
        }
    }

    return bestFunction;
}

// Esempio di utilizzo:
const functions = [
    x => x * 2,
    x => x * x,
    x => x + 3
];

const points = [
    [1, 2],
    [2, 4],
    [3, 6]
];

const bestFit = slimfit(functions, points);
console.log(bestFit(2)); // Output: 4 (se la funzione migliore è x => x * 2)