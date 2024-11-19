function convert(numBase10, base) {
    let num = numBase10;
    if (base < 2 || base > 36 || num < 0) {
        return "-1";
    }
    if (num === 0) return "0";

    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";
    while (num > 0) {
        let remainder = num % base;
        result = digits[remainder] + result;
        num = Math.floor(num / base);
    }
    return result;
}

const assert = require('assert');

function createTestCase(given, expected, func) {
    const COLORS = {
        info: '\x1b[36m',
        success: '\x1b[32m',
        error: '\x1b[31m',
        reset: '\x1b[0m'
    };

    const colorize = (color, text) => `${COLORS[color]}${text}${COLORS.reset}`;
    console.log(colorize('info', `Testing with input: ${given.join(', ')}`));
    const result = func(...given);
    
    try {
        assert.strictEqual(result, expected);
        console.log(colorize('success', '✓ Test passed!'));
    } catch (error) {
        console.log(colorize('error', `✗ Test failed: expected ${expected} but got ${result}`));
    }
}

createTestCase([0, 2], "0", convert);
createTestCase([10, 2], "1010", convert);
createTestCase([10, 16], "a", convert);
createTestCase([10, 36], "a", convert);
createTestCase([10, 37], "-1", convert);
createTestCase([10, 1], "-1", convert);