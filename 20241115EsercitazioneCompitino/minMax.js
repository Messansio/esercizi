function minMax(array, min, max) {
    const compare = (a, b) => {
        const keysA = Object.keys(a).sort();
        const keysB = Object.keys(b).sort();
        if (keysA.length !== keysB.length) return keysA.length - keysB.length;
        for (let i = 0; i < keysA.length; i++) {
            if (keysA[i] !== keysB[i]) return keysA[i].localeCompare(keysB[i]);
            if (a[keysA[i]] !== b[keysA[i]]) return a[keysA[i]] - b[keysA[i]];
        }
        return 0;
    };

    const isWithinLimits = (elemento, min, max) => {
        return compare(elemento, min) >= 0 && compare(elemento, max) <= 0;
    };

    const filtrati = array.filter(elemento => {
        if (elemento === undefined || elemento === null) {
            return false;
        }
        return isWithinLimits(elemento, min, max);
    });

    if (filtrati.length === 0) {
        return [];
    }

    const minimo = filtrati.reduce((min, elemento) => isWithinLimits(elemento, min, max) && compare(elemento, min) < 0 ? elemento : min, filtrati[0]);
    const massimo = filtrati.reduce((max, elemento) => isWithinLimits(elemento, min, max) && compare(elemento, max) > 0 ? elemento : max, filtrati[0]);

    return [minimo, massimo];
}

// Esempio di utilizzo con oggetti
const array = [{5:1,12:1,10:1,7:1},{10:1,5:1,18:1},{1:1}];
const min = {1:1};
const max = {5:1,12:1,18:1};
console.log(minMax(array, min, max)); // Output: [{1:1}, {10:1,5:1,18:1}]