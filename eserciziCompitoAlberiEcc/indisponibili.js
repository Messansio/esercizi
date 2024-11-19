function indisponibili(libri) {
    // Filtra i libri non disponibili
    const nonDisponibili = libri.filter(libro => libro.disp === 0);
    
    // Ordina i libri non disponibili in ordine alfabetico per titolo
    nonDisponibili.sort((a, b) => a.titolo.localeCompare(b.titolo));
    
    return nonDisponibili;
}

// Esempio di utilizzo:
const libri = [
    { titolo: 'Libro 1', disp: 1 },
    { titolo: 'Libro 2', disp: 0 },
    { titolo: 'Libro 3', disp: 1 },
    { titolo: 'Libro 4', disp: 0 },
];

console.log(indisponibili(libri)); // Output: [{ titolo: 'Libro 2', disp: 0 }, { titolo: 'Libro 4', disp: 0 }]