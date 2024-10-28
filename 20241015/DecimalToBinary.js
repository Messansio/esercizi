// This program converts a decimal number to binary number.
// author: Andrea Messana
// date: 2024-10-15
// version: 1.0

function decimalToBinary(decimal) {
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

// Test cases
// 1. Decimal number is 10
// Expected output: 1010

console.log(decimalToBinary(10));