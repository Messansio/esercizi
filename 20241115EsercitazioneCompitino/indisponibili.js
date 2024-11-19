function indisponibili(A) {
    let libriIndisponibili = A.filter(libro => libro.disp === 0);
    libriIndisponibili.sort((a, b) => a.titolo.localeCompare(b.titolo));

    return libriIndisponibili;
}

// Esempio di array di oggetti libri
const libri = [
    { titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien', disp: 1 },
    { titolo: '1984', autore: 'George Orwell', disp: 0 },
    { titolo: 'Il Grande Gatsby', autore: 'F. Scott Fitzgerald', disp: 0 },
    { titolo: 'Cime Tempestose', autore: 'Emily Brontë', disp: 1 },
    { titolo: 'Moby Dick', autore: 'Herman Melville', disp: 0 }
];

// Test della funzione
console.log(indisponibili(libri));