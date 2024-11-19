function firma(s) {
    // Handle empty string
    if (!s) return 0;
    
    // Convert to lowercase
    const str = s.toLowerCase();
    
    // Create binary string replacing vowels/spaces with 1, others with 0
    const binaryString = str.split('')
        .map(char => /[aeiou\s]/.test(char) ? '1' : '0')
        .join('');
    
    // Convert binary to decimal
    return parseInt(binaryString, 2);
}

console.log(firma("Vincenzo Gervasi")); // 18853
console.log(firma("Alina Sirbu")); // 1385
console.log(firma("")); // 0
console.log(firma("xyz")); // 0
console.log(firma("aaa")); // 7