function contaVocali(s) {
    // Convert to lowercase
    const str = s.toLowerCase();
    
    // Define vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Count vowels using reduce
    return str.split('').reduce((count, char) => 
        count + (vowels.has(char) ? 1 : 0), 0);
}

console.log(contaVocali("Ai lati d'Italia")); // 8
console.log(contaVocali("qwerty")); // 1
console.log(contaVocali("3463234")); // 0
console.log(contaVocali("Nel mezzo del cammin di nostra vita")); // 11