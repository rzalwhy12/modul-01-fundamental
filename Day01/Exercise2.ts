/*
Write a code to convert temperature from Celcius to Farenheit
Example : Celcius = 25
Output : 77
*/

//Input data yang akan di convert
let celsius : number = 25;

//Proses data untuk di convert
const Samadengan : number = (celsius*9/5)+32;

//Hasil convert
console. log ("hasilnya adalah Fahrenheit"+" = "+Samadengan)

/*
Write a code to Swap two numbers
Example : a = 4, b = 7
Output : a = 7, b = 4
*/

//Input data yang akan diolah
let satu = 4;
let dua = 7;

//Proses Swab
const An : number = dua;
const Be : number = dua = satu;

//Tampilkan Jawaban
console. log("a = "+An+"  "+"b = "+Be)


/*
Write a code to get first and last character from a string
Example : word = "Programing"
Output: P and g
*/
//Masukan Kata
let kata : String = "Programing";

// Karakter pertama
const hurufPertama : string = kata.charAt(0);
console.log("Huruf pertama:"+ hurufPertama);

// Karakter terakhir
const hurufTerakhir : string = kata.charAt(kata.length - 1);
console.log("Huruf terakhir:"+ hurufTerakhir);

/*
Write a code to calculate the square and cube of a number
Example : number = 4
Output : Square = 16, cube = 64
*/

let ongko : number = 4;
    let kuadrat = Math.pow(ongko, 2); // Sama dengan angka * angka
    console.log("Square = "+kuadrat);

let ongkoloro : number = 4;
    let kuadrat2 = Math.pow(ongkoloro, 3); // Sama dengan angka * angka
    console.log("Cube = "+kuadrat2);

/*
Write a code to convert minutes to hours and minutes
Example: totalMinutes = 135
Output: 2 Hours and 15 minutes
*/

// Input Menit yang akan di convert
let menit : number = 175;

// proses data menit untuk di convert
const jam : number = (Math.floor(menit/60));
const menet : number = menit%60;

//Tampilkan data
console. log (jam+" hours "+menet+" minutes")
