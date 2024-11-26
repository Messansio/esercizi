function sommak(A,k,d) {
    let somma = 0;
    for (let i = 0; i < A.length; i++) {
        let tmp = Math.floor(A[i]/Math.pow(10,k))%10;
        if (tmp == d) {
            somma = A[i] + somma;
        }
    }
    return parseInt(somma);
}

console.log(sommak([141,161,240,2],1,4));