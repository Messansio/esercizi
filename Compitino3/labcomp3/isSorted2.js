function isSorted2(a) {
    return a.every((value, index) => index === 0 || value > arr[index -1]);
}