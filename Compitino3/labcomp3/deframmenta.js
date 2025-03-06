function deframmenta(a) {
    return a.filter((val, index) => {
        if (index === 0)
            return val === a[index+1];
        if (index === a[index-1])
            return val === a[index-1];
        return val === a[index-1] || val === a[index+1];
    })
}

// pene
console.log(JSON.stringify(deframmenta([1,1,2,3,3,3,2,2,4])));
console.log(JSON.stringify(deframmenta([0,0,0,0,0,1,0,1,1])));
console.log(JSON.stringify(deframmenta([1,0])));