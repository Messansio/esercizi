//versione facile
function ordnung(t) {
    if (t.length>0) {
        
        for (let i = 0; i < t.length; i++) {
            
            if(t[i].length>0){
                
                t[i].sort()
            }
        }
        
    }
    return t.sort();
    
}


console.log(ordnung([[5,7,3],[8,3,5],[1],[5]]));