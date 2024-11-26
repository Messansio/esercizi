function pota(t,k){

    //let app = Object.assign({},t);
    
    if (t.val > k){
        return undefined;
    }

    let app = {val:t.val}

    
    if(t.dx){
        if(!(t.dx.val>k)){
            app.dx = pota(t.dx,k)
        }
    }

    if(t.sx){
        if(!(t.sx.val>k)){
            app.sx = pota(t.sx,k)
        }
    }
    return app;

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

console.log("T tagliato è:"+ JSON.stringify(pota(a,4)) + "\n\nT intero è:"+ JSON.stringify(a));