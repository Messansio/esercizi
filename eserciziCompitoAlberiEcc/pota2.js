function pota2(t,k){

    let rimossi = 0;
    if (t.val > k){
        rimossi = conta(t);
        return rimossi;
    }

    if(t.sx){
        rimossi += pota2(t.sx,k);
        if(t.sx.val>k){
            delete t.sx;
        }
    }

    if(t.dx){
        rimossi += pota2(t.dx,k);
        if(t.dx.val>k){
            delete t.dx;
        }
    }

    return rimossi;

}

function conta(t){

    let cont=1;

    if(t.sx) cont += conta(t.sx);

    if(t.dx) cont += conta(t.dx);
    
    return cont;

}

var a = {val: 2, 

    dx:{val: 5,
            sx:{val: -1, 
                dx:{val: 4, 
                    sx:{val: 2}, 
                    dx:{val:8}
                }
            }
        },

    sx:{val: 2, 
            dx:{val: -10, 
                dx:{val: 1, 
                    dx:{val: 2}
                }, 
                sx:{val: 3}
            }, 
            sx:{val: 12}
        }
};

let tagli = pota2(a,4);
console.log("T:"+ JSON.stringify(a) + `\nil numero di rami tagliati è:${tagli}`);