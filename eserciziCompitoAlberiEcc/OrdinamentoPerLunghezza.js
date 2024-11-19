function ordlun(a) {
    return [...a].sort((s1, s2) => {
        // Compare lengths first
        const lenDiff = s1.length - s2.length;
        // If lengths equal, compare alphabetically
        return lenDiff === 0 ? s1.localeCompare(s2) : lenDiff;
    });
}

console.log(ordlun(["pera", "zucca", "mela"])); 
// ["mela", "pera", "zucca"]

console.log(ordlun(["dattero", "zucca", "mela"])); 
// ["mela", "zucca", "dattero"]

console.log(ordlun([])); 
// []