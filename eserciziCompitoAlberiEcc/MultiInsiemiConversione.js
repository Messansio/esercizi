function cvtmi(a) {
    return a.reduce((acc, curr) => {
        // Increment count if exists, otherwise set to 1
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

console.log(cvtmi(["pera", "zucca", "mela"]));
// { mela: 1, pera: 1, zucca: 1}

console.log(cvtmi(["pera", "pera", "pera", "zucca"]));
// {pera: 3, zucca: 1}

console.log(cvtmi([1,2,3,4,3,4,5,2,1,1,9]));
// {1:3, 2:2, 3:2, 4:2, 5:1, 9:1}