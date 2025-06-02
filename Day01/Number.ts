//Number : data angka
let jarak : number = 1500; //Nilai INT/INTEGER
let berat : number = 90.25; //Nilai FLOAT

// Arithmethic : +,-,*,/,%

// Algoritma kode perhitungan penjumlahan
// 1. menyiapkan data yang harus dijumlahkan
let angka1:number = 20;
let angka2:number = 35;
// 2. memproses penjumlahan dari data yang diberikan
const result :number = angka1 + angka2;
// 3. menampilkan hasil akhir penjumlahan di terminal
console. log (result);

//fungsi math object
const PIMath: number = Math.PI;
console. log(PIMath)

// Pembulatan Nilai
console.log(Math. round(25.6));
console.log(Math. round(25.4));
console.log(Math. ceil(25.1));
console.log(Math. floor(25.9));

console.log(Math. pow(4, 2));
console.log(Math. sqrt(16));
console.log(Math. cbrt(8));

//Min and Max
console.log(Math. min(1, 2, 3, 5, 6));
console.log(Math. max(1, 2, 3, 5, 6));

//Random
console.log(Math. random());

// parsing data
let price: number = 25500;
console. log(
    price.toLocaleString("id",{
        style:"currency",
        currency:"IDR"}));

