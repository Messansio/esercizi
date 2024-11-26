function tagliaRami(T,v){
    if(T.figli){
        for(let i=0; i<T.figli.length;){
            console.log("prima "+T.figli.length + "  " + i);
            if((T.figli[i].val)==v){
                T.figli.splice(i,1)
                console.log('-');
                
            }else{
                i++
                console.log("+");
            }
            console.log("dopo "+T.figli.length + "  " + i);
        }
        for(let i=0; i<T.figli.length;i++){
            tagliaRami(T.figli[i],v)
        }
    }
    return T
}

var TR={
    val: 1,
    figli: [
        {val: 5, figli: [
            {val: 7},
            {val: 11, figli: [
                {val: 4}
            ]}
        ]},
        {val: 4},
        {val: 12, figli: [
            {val: 4, figli: [
                {val: 11, figli: [
                    {val: 3},
                    {val: 5},
                    {val: 19},
                    {val: 5, figli: [
                        {val: 1}
                    ]}]
                }
            ]}
        ]}
    ]}

console.log(tagliaRami(TR,3));