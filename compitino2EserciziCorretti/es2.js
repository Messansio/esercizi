function media(s) {
    if (s.voti.length == 0)
        return 0;

    let sum = 0;
    for (let voto of s.voti)
        sum += voto;
    return sum / s.voti.length
}

function primoDellaClasse(C) {
    let mediaMax = -Infinity;
    let primo;

    for (let s of C) {
        if (media(s) > mediaMax) {
            mediaMax = s.media;
            primo = s;
        }
    }
    return primo;
}