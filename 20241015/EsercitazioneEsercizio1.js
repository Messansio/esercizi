class UnknownLetterError extends Error {
    constructor(letter) {
        super(`Unknown letter: ${letter}`);
        this.name = "UnknownLetterError";
    }
}

const letters = ['A', 'B', 'C'];

function* unfold(word) {
    for (let i = 0; i < word.length; i++) {
        if (!letters.includes(word[i])) {
            throw new UnknownLetterError(word[i]);
        }
        yield word[i];
    }
}