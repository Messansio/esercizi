function ricercaBinaria(A: number[], p: number, r: number, k: number): number {
    if (p > r)
        return -1;
    if (p === r) 
        if (A[p] === k)
            return p;
        else
            return -1;
    let q = Math.floor((p + r) / 2);
    if (A[q] === k)
        return q;
    if (A[q] > k)
        return ricercaBinaria(A, p, q - 1, k);
    else
        return ricercaBinaria(A, q + 1, r, k);
}