function isSorted1(a) {
    let l = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] <= l) return false;
        l = a[i];
    }
    return true;
}

console.log(isSorted1([1, 1, 3, 4, 5])); // true