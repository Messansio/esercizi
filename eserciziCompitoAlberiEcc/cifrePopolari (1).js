function cifrepopolari(n){
    let count = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
    for (let char of String(n)) {
        count[char]++;
    }
    if(count["."])  delete count["."]
    let min = count[0]
    let minpos = 0
    let max = count[0]
    let maxpos = 0
    let chiavi = Object.keys(count)
    for(let el of chiavi){
        if(min > count[el]){
            minpos=el
            min = count[el]
        }
        if(max < count[el]){
            maxpos=el
            max = count[el]
        }
    }
    return {[minpos]:min,[maxpos]:max}
}
console.log(cifrepopolari(3.1415926535));