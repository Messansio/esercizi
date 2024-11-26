function cambiaBase(v,b1,b2){

    let n = parseInt(v,b1)

    n = n.toString(b2)

    return n
}
console.log(cambiaBase(256,10,16));
