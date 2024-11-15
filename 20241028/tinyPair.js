// DEF: A <i,j>; A[i] + A[j] > k
// input: A,k
// output: cardinalità dell'insieme di tinyPairs
// time complexity: O(nlogn)

function tinyPairs(A, k) {
    let sorted = mergeSort(A);
    let count = 0;
    let i = 0;
    let j = sorted.length - 1;

    while (i < j) {
        if (sorted[i] + sorted[j] > k) {
            count += j - i;
            j--;
        } else {
            i++;
        }
    }

    return count;
}

// permette l'ordinamento di un' array attraverso coppie numeriche che vengono alternate per risolvere il sorting

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = tinyPairs;