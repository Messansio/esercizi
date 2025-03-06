function valuta(t) {
    if (t.figli === undefined) {
        return t.val;
    }
    
    let sommaPesiFigli = 0;
    for (let figlio of t.figli) {
        sommaPesiFigli += valuta(figlio);
    }
    
    return t.val(sommaPesiFigli);
}


const alberoFoglia = {
    val: 5
};

const alberoInterno = {
    val: (x) => x * 2,
    figli: [
        { val: 3 },
        { val: 4 }
    ]
};

const alberoComplesso = {
    val: (x) => x + 1,
    figli: [
        {
            val: (x) => x * 2,
            figli: [
                { val: 1 },
                { val: 2 }
            ]
        },
        { val: 3 }
    ]
};

// Test
console.assert(valuta(alberoFoglia) === 5, 'Test 1 fallito');
console.assert(valuta(alberoInterno) === 14, 'Test 2 fallito');
console.assert(valuta(alberoComplesso) === 10, 'Test 3 fallito');

console.log('Tutti i test sono passati!');