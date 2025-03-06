function replace_filter_f(f,g) {
    function fun(A) {
        let B = [];
        let C = [];
        for (i in A)
            B.push(f(A[i]));
        for (i in B)
            if (!(g(B[i])))
                C.push(B[i]);
        return C;
    }
    return fun;
}
let out = replace_filter_f(x=>x+1, x=>x%2==0);
console.log(out([4,1,3,2]));