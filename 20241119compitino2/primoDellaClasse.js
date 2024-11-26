var C=[
    {nome:"Giuseppe", matricola: "152403", voti: [18, 24, 30, 26]},
    {nome:"Jacopo", matricola: "433710", voti: [30, 26, 28, 28, 25]},
    {nome:"Vincenzo", matricola: "150300", voti: [28, 22, 30, 30, 27, 28]},
    {nome:"Alina", matricola: "610292", voti: [30, 26, 30, 24, 22, 27]},
    {nome:"Tommaso", matricola: "630181", voti: [25, 24, 28, 30, 21, 26]}
]

function primoDellaClasse(C) {
    if (!C) return undefined;
    let mediaAlta = 0;
    let StudenteBest = C[0];
    for (var i = 0; i < C[0].voti.length; i++) {
        mediaAlta += C[0].voti[i];
      }
    mediaAlta = mediaAlta/C[0].voti.length;
    
    for (let i = 1; i < C.length; i++) {
        media = 0;
        for (var j = 0; j < C[i].voti.length; j++) {
            media += C[i].voti[j];
          }
        media = media / C[i].voti.length;
        if (media > mediaAlta) {
            mediaAlta = media;
            StudenteBest = C[i];
        }
    }
    return StudenteBest;
}