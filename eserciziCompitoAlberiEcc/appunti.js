//cambio base
function cambiaBase(v,b1,b2){

    let n = parseInt(v,b1)

    n = n.toString(b2)

    return n
}

//per evitare [obj]
JSON.stringify()

//conta rami
function conta(t){
    if(t){

        let cont=1;
    
        if(t.sx) cont += conta(t.sx);
    
        if(t.dx) cont += conta(t.dx);
        
        return cont;

    }
    return 0;

}

//ricerca binaria(a array, x cosa da cercare)
function searchB(x,a){
    if (a.length==0)
        return false
    
    let i=Math.floor(a.length/2)
    if (a[i]==x)
        return true
    
    if(a[i]>x)
        return searchB(x,a.slice(0,i))
    else
        return searchB(x,a.slice(i+1))
}

//applica funzione a tutti i valori di un albero k-ario
function treeApply(a,f){
    if (!a)
        return
    
    a.val=f(a.val)
    
    if (a.figli)
        for (let figlio of a.figli)
            treeApply(figlio,f)
}

//calcolo massimo divisore comune
function mdc(a,b){
    a=Math.abs(a)
    b=Math.abs(b)
    while(b>0){
        let c=a%b
        a=b
        b=c
    }
    return a
}

x=-30
y=45
console.log(mdc(x,y))
console.log(x)

function semplifica(a){
    let d=mdc(a.num,a.den)
    a.num/=d
    a.den/=d
    if (a.den<0){ //normalizzo anche i negativi - una frazione negativa ha sempre il meno al numeratore
        a.num*=-1
        a.den*=-1
    }
}

//isHeap
function isHeap(a){
    if(!a)
        return true
  
    if (a.figli){
        for (let f of a.figli){
            if (a.val<f.val)
                return false
            if (!isHeap(f))
                return false 
        }
    }
    return true
}