function sommaK(A,k,d) {
    s = 0;
    for (n of A) 
        if ( Math.floor(n/Math.pow(10,k))%10 == d) 
            s += n;

    return s;
}

// ==============================================================

