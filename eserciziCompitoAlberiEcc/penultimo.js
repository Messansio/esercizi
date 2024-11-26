function penultimo(a){
    a.sort();
    return a[a.length-2];
}

console.log(penultimo(["pera"]));