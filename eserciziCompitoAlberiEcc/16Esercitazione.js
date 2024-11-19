function indisponibili(l){
    let ris=[]
    for (let libro of l){
        if(libro.disp==0)
            ris.append(libro)
    }
    ris.sort((l1,l2)=>{
        if(l1.titolo<l2.titolo)
            return -1
        if (l2.titolo<l1.titolo)
            return 1
        return 0
    })
}

function contaFogliePari(t){
    if (!t)
        return 0
    if(!t.sx && !t.dx)
        if(t.val%2)
            return 0
        else
            return 1
    return contaFogliePari(t.sx)+contaFogliePari(t.dx)
}

function minMax(a){
    let ris={}
    for (let i=0;i<a.length;i++){
        let max=-Infinity,min=Infinity;
        for (let k in a[i]){
            if(min>Number(k))
                min=k
            if(max<Number(k))
                max=k
        }
        ris[min]=1
        ris[max]=1
    }
    return ris
}
console.log(minMax([{5:1,12:1,10:1,7:1},{10:1,5:1,18:1},{1:1}]))
//{1:1,5:1,12:1,18:1})


function cambioBase(n,b1,b2){
    return dabase10(abase10(n,b1),b2)
}

function abase10(n,b){//da base b a base 10, n è stringa, restituisce numero
    let n10=0
    for (let i=0;i<n.length;i++){
        n10+=Number(n[i])*Math.pow(b,n.length-1-i)
    }
    return n10
}

function dabase10(n,b){//da base 10 a base b, n è numero, restituisce stringa
    if (n==0)
        return "0"
    nb=""
    while(n>0){
        nb=n%b+nb
        n=Math.floor(n/b)
    }
    return nb
}
console.log(cambioBase("2120210",3,5))//"30014"


