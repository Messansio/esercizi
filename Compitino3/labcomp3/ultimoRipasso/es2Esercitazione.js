function prodotto(A,B) {
    let C = {};
    if (A == {}) return B;
    if (B == {}) return A; 
    for(n in A)
        for(m in B)
            C[n+m] = 1;
    return C;
}
let A = {'a':1,'b':1,'c':1};
let B = {'d':1,'e':1,'f':1};
console.log(prodotto(A,B));