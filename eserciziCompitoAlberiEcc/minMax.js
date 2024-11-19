function minMax(a) {
    let result = {};

    a.forEach(obj => {
        let keys = Object.keys(obj).map(Number);
        let minKey = Math.min(...keys);
        let maxKey = Math.max(...keys);

        result[minKey] = obj[minKey];
        result[maxKey] = obj[maxKey];
    });

    return result;
}

console.log(minMax([{5:1,12:1,10:1,7:1},{10:1,5:1,18:1},{1:1}])); // {5:1,12:1,5:1,18:1,1:1}