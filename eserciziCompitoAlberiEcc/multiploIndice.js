function mulidx(a) {
    return a.filter((elem, idx) => {
        // Skip index 0 since anything divided by 0 is undefined
        if (idx === 0) return typeof elem === 'string';
        
        // Handle numbers
        if (typeof elem === 'number') {
            return elem % idx === 0;
        }
        
        // Handle strings
        if (typeof elem === 'string') {
            return elem.length % idx === 0;
        }
        
        // Skip other types
        return false;
    });
}

console.log(mulidx(["",4,[true],"Grande Giove",7,10])); 
// ['', 4, 'Grande Giove', 10]

console.log(mulidx([5,3,"Grande Giove","Giove Grande",8,11])); 
// [3, 'Grande Giove', 'Giove Grande', 8]