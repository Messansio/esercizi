//  Soluzione Mattia
function valuta(t){
    if(t.figli){
        let tot=0
        for(let figli of t.figli)
            tot += valuta(figli)
        return t.val(tot);
    } else
        return t.val 
}

const albero = {
    val: x => x*2,
    figli: [
        { val: 3 },
        { val: 4 }
    ]
};

console.log(valuta(albero));