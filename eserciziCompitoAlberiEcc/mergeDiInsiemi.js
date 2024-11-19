function merge(a, b) {
    // Add all keys from b to a
    for (const key in b) {
        a[key] = 1;
    }
    return a;
}

let A = {a: 1, b: 1, c: 1};
let B = {c: 1, d: 1, e: 1};
merge(A, B);
console.log(A); // {a:1, b:1, c:1, d:1, e:1}
console.log(B); // {c:1, d:1, e:1}

let C = {};
let D = {a: 1, b: 1};
merge(C, D);
console.log(C); // {a:1, b:1}
console.log(D); // {a:1, b:1}