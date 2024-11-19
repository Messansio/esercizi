function cifrePopolari(n) {
    const str = n.toString().replace('.', '');
    const count = {};

    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let mostFrequent = null;
    let leastFrequent = null;
    let maxCount = -Infinity;
    let minCount = Infinity;

    for (let key in count) {
        let numKey = parseInt(key);
        if (count[key] > maxCount || (count[key] === maxCount && numKey < mostFrequent)) {
            maxCount = count[key];
            mostFrequent = numKey;
        }

        if (count[key] < minCount || (count[key] === minCount && (leastFrequent === null || numKey < leastFrequent))) {
            minCount = count[key];
            leastFrequent = numKey;
        }
    }

    return {
        [mostFrequent]: maxCount,
        [leastFrequent]: minCount
    };
}

// Esempio di utilizzo
console.log(cifrePopolari(3.1415926535)); // Output: { 2: 1, 5: 3 }