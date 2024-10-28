// Date: 20241028
// Name: tinyPair
// Description: Write a function that takes an array of two numbers and determines if the sum of the digits in the two numbers are equal to each other.
// Example:
// tinyPair([123, 321]) ➞ true
// tinyPair([143, 312]) ➞ false
// tinyPair([12, 12]) ➞ true
// autohr: Andrea Messana

function tinyPair(arr) {
  let min = arr[0];
  let max = arr[1];
  if (min > max) {
    min = arr[1];
    max = arr[0];
  }
  return [min, max];
}

// it returns true if the sum of the digits in the two numbers are equal to each other, otherwise false

// variabile min: prende il valore minore tra i due numeri dell'array
// variabile max: prende il valore maggiore tra i due numeri dell'array
// se il valore minore è maggiore del valore maggiore, allora scambia i due valori
// restituisce un array con il valore minore e il valore maggiore
// complessità computazionale: O(n)