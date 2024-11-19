function unionemi(a, b) {
    const result = { ...a };
    for (const key in b) {
        result[key] = (result[key] || 0) + b[key];
    }
    return result;
}

function intersezionemi(a, b) {
    const result = {};
    for (const key in a) {
        if (key in b) {
            result[key] = Math.min(a[key], b[key]);
        }
    }
    return result;
}

console.log(unionemi({1:4, 2:1}, {1:3, 3:1}));
// {1:7, 2:1, 3:1}

console.log(intersezionemi({1:4, 2:1}, {1:3, 3:1}));
// {1:3}

console.log(intersezionemi({1:4, 2:1}, {}));
// {}