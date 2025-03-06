function math(op, ...numeri) {
    switch(op) {
        case '+': return numeri.reduce((cumulo, valore) => cumulo + valore);
        case '-': return numeri.reduce((cumulo, valore) => cumulo - valore);
        case '*': return numeri.reduce((cumulo, valore) => cumulo * valore);
        case '/': return numeri.reduce((cumulo, valore) => cumulo / valore);
        default: return NaN;
    }
}

console.log(math('+', 1, 2, 3, 4, 5)); // 15