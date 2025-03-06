function puntoFisso(f) {
    function g(X) {
        const Y = f(X);
        for (n in X)
            if (!(n in Y))
                return 0;
        for (n in Y)
            if(!(n in X))
                return 0;
        return 1;
    }
    return g;
}

/* senzza cicli
function puntoFisso(f) {
    function g(X) {
        const Y = f(X);
        const xKeys = Object.keys(X);
        const yKeys = Object.keys(Y);
        return xKeys.every(k => k in Y) && 
               yKeys.every(k => k in X) ? 1 : 0;
    }
    return g;
}
*/