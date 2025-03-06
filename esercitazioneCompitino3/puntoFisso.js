function puntoFisso(f) {
    function g(X) {
        // f(X)==X
        const Y=f(X);
        for (k in X)
            if (!(k in Y))
                return 0;
        for (k in Y)
            if (!(k in X))
                return 0;
        return 1;
    }
    return g;
}

function f(X) {
    let y={}
    for (e in X)
        y[e]=true
    y[10] = true;
    return y;
}
let r=puntoFisso(f)
console.log(r({1:true,2:true})); // false
console.log(r({10:true,2:true})); // true

