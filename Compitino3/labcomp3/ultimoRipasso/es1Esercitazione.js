function punto_fisso(f) {
    function g(X) {
        let Y = f(X);
        for (n in X) {
            if (!(n in Y)) return 0;
        for (n in Y)
            if (!(n in X)) return 0;
        }
        return 1;
    }
}