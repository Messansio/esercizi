function has0xA(n) {
    // Convert to hex and uppercase
    const hex = n.toString(16).toUpperCase();
    // Check if contains 'A'
    return hex.includes('A');
}

console.log(has0xA(10));     // true (0xA)
console.log(has0xA(12));     // false (0xC)
console.log(has0xA(150019)); // true (0x249A3)
console.log(has0xA(193238)); // false (0x2F226)