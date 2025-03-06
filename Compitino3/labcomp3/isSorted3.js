function isSorted3(a) {
    a = a.filter((value) => !isNaN(value));
    let l = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] <= l) return false;
        l = a[i];
    }
    return true;
}