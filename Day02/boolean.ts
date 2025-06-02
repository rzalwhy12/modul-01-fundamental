// BOOLEAN : Data yang bernilai benar (true) atau salah (false)
let isActive: boolean = true;
let isDeleted: boolean = false;

//Menghasilkan nilai boolean
//1. Berdasarkan tipe data lain
//TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(123));
console.log(Boolean(-234));

//FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

//2. Comparaison operator : >, <, >=, <=, ==, ===, !=
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueA >= 12);
console.log(valueA <= 14);
console.log(valueA != 14);
//console.log(valueA === "15");

//3. Logical operator : AND(&&), OR(||), NOT(!)
//AND : akan menghasilkan nilai TRUE jika antar nilai juga bernilai true
console.log(Boolean("ABC")&& Boolean (2));
console.log(valueA < 12 && valueB===15);
console.log(valueA === 10 && valueB === 1);

//OR : akm menghasilkan nilai TRUE jika salah satu data bernilai true
console.log(Boolean("ABC") || Boolean(2));
console.log(valueA < 12 || valueB === 15);
console.log(valueA === 10 || valueB === 1);

//NOT : membalikan nilai
console.log(!Boolean(valueA));
console.log(!(valueA < 12) && valueB === 15);

