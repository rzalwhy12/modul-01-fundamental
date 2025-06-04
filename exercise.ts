/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
//INPUT
const arr : number[] = [12, 15, 23, 18, 4, 45, 32];
let total : number =0;
let jawab : string ="";

for(let i=0;i<arr.length;i++){
    total += arr[i];
}
//PROSES
const ratarata = total/arr.length;
const terkecil : number = Math.min(...arr);
const terbesar : number = Math.max(...arr);


//OUTPUT
console.log(`dari data ${arr} mempunyai :\n nilai terkecil : ${terkecil}\n Nilai terbesar : ${terbesar}\n Rata - rata : ${ratarata} `);




/*
2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/






/*
3. Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/





/*
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/





/*
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/