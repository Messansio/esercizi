function prodotto(A,B) {
    let C = {};
    if(A == {}) return B;
    if(B == {}) return A;
    for (n in A)
        for (m in B)
            C[n+m] = 1;
    return C;
}
console.log(prodotto({'a':1,'b':1,'c':1},{'e':1,'f':1,'g':1}));

/* senza cicli
    function prodotto(A, B) {
        return Object.keys(A)
            .flatMap(a => Object.keys(B)
                .map(b => a + b))
            .reduce((acc, key) => ({...acc, [key]: 1}), {});
    }

   console.log(prodotto({'a':1,'b':1,'c':1}, {'e':1,'f':1,'g':1}));
*/