function rim_disp(a) {
    
    if (a.figli) {
        for (let i = 0; i < a.figli.length; i++) {

            if(rim_disp(a.figli[i])=="dovrebbe funzionare, spero"){

                a.figli.splice(i--,1);
                
            }

        }
        if(a.figli.length == 0){
            
            delete a.figli
        }
    }

    if (!a.figli && a.val%2 == 1){

        return "dovrebbe funzionare, spero";
    }
    return a;
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


console.log(JSON.stringify(rim_disp(TR)));
