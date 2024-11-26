function pota3(t) {

    if(!t.sx && !t.dx){

        return undefined;

    }else{
        if(t.sx){
            if(pota3(t.sx) == undefined){
                t.val += t.sx.val
                delete t.sx
            }
        }
    
        if(t.dx){
            if(pota3(t.dx) == undefined){
                t.val += t.dx.val
                delete t.dx
            }
        }
    }

    return t;
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


console.log("duce :"+ JSON.stringify(pota3(a)));