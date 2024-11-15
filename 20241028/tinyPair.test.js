const tinyPairs = require('./tinyPair');

test('tinyPairs with example case 1', () => {
    expect(tinyPairs([1, 2, 3, 4], 5)).toBe(4);
});

test('tinyPairs with example case 2', () => {
    expect(tinyPairs([1, 2, 3, 4], 7)).toBe(1);
});

test('tinyPairs with example case 3', () => {
    expect(tinyPairs([1, 2, 3, 4], 10)).toBe(0);
});

test('tinyPairs with example case 4', () => {
    expect(tinyPairs([5, 1, 3, 4, 2], 6)).toBe(7);
});

test('tinyPairs with example case 5', () => {
    expect(tinyPairs([1, 1, 1, 1], 1)).toBe(6);
});