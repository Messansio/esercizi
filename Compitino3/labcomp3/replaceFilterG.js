function replace_filter_f(f,g) {
    function h(A) {
        B = []
        for(let i = 0; i < A.length; i++) {
            A[i] = f(A[i]);
        }
        for (let i = 0; i < A.length; i++) {
            if (!(g(A[i]))) B.push(A[i]);
        }
        return B
    }
    return h;
}

let f = x => x * 2;
let g = x => x > 4;
let h = replace_filter_f(f, g);

console.log(h([1, 2, 3, 4])); // [2, 4]

f = x => x + 1;
g = x => x % 2 === 0;
h = replace_filter_f(f, g);

console.log(h([1, 2, 3, 4])); // [2, 4]

f = x => x - 1;
g = x => x < 0;
h = replace_filter_f(f, g);

console.log(h([1, 2, 3, 4])); // [0, 1, 2, 3]

f = x => x * x;
g = x => x % 2 !== 0;
h = replace_filter_f(f, g);

console.log(h([1, 2, 3, 4])); // [4, 16]