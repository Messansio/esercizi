magicmap=(A,f,i=0)=>i<A.length?[f(A[i])].concat(magicmap(A,f,i+1)):[]
 
// Esempio di utilizzo:
const array = [1, 2, 3, 4];
const func = x => x * 2;
console.log(magicmap(array, func)); // Output: [2, 4, 6, 8]