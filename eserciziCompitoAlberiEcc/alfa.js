function alfa(n) {
    // Convert to base 36 and make lowercase
    const base36 = n.toString(36).toLowerCase();
    
    // Count letters a-z (representing values 10-35)
    return base36.split('')
                 .filter(c => c >= 'a' && c <= 'z')
                 .length;
}

console.log(alfa(6));         // 0 (base36: '6')
console.log(alfa(666));       // 2 (base36: 'ie')
console.log(alfa(2147483647)); // 5 (base36: 'zik0zj')