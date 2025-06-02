/*
Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

//masukan angka yang akan di proses
let angkasatu : number = 5;
let angkadua : number = 3;
// 2. memproses perkalian dari data yang diberikan
const hasil : number = angkasatu * angkadua;
// 3. menampilkan hasil akhir Perkalian di terminal
console.log ("Hasil dari perkalian dua bilangan itu adalah"+" "+hasil);


/*
Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

//Masukan panjang dan lebar
let lenght : number = 5;
let width : number = 3;
let angka : number =2;
var penjelasan : string = "Hasil dari keliling segitiga adalah"
//Memproses rumus keliling persegi panjang dari data yang di berikan
const result2 : number = lenght*angka+width*angka;
//Menampilkan hasil akhir dari keliling persegi panjang
console. log (penjelasan+" "+result2);

/*
Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539
*/

//Masukan data yang akan  di proses
let radius : number = 5;
var Penjelasan1 : String = "Diameternya adalah";
var Penjelasan2 : String = "Keliling adalah";
var Penjelasan3 : String = "luasnya adalah";
//Memperoses diameter, circumference and area of a circle
const Diameter : number = radius * 2;
const circumference :number =Math. round(radius*2*Math.PI);
const areaOfaCircle : number =Math. round (Math.PI * radius * radius);
//Menanpilkan hasil diameter, circumference and area of a circle
console. log (Penjelasan1+" "+Diameter);
console. log (Penjelasan2+" "+circumference);
console. log (Penjelasan3+" "+ areaOfaCircle);

/*
Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

// Masukan Data yang akan di proses
let a : number = 80;
let b : number = 65;
// Proses data
const Answer : number = 180 - (a + b);
// Tampilkan data
console. log ("jawabanya adalah"+" "+Answer)

/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
*/

//Masukan Data yang akan di proses
let DAY : number = 400;
let DAY2 : number = 366;

//Proses data yang telah disediakan
const Tahun1 : number = (Math. round(DAY/365))
const Bulan1 : number = (Math. round((DAY-365)/30))
const Hari : number = (DAY-(365+30))

const Tahun2 : number = (Math. round(DAY2/365))
const Bulan2 : number = (Math. round((DAY2-365)/30))
const Hari1 : number = (DAY2-365)


//Menampilkan data yang telah di olah
console. log (Tahun1+" "+"Years"+","+Bulan1+" "+"Month"+","+Hari+" "+"day")
console. log (Tahun2+" "+"Years"+","+Bulan2+" "+"Month"+","+Hari1+" "+"day")

/*
Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
*/

//Masukan Tanggal yang akan di selisihkan
let hari1 : number = 2;
let bulan1 : number = 4;
let tahun1 : number = 2023;

let hari2 : number = 4;
let bulan2 : number = 4;
let tahun2 : number = 2023;

//Proses data
const Jawaban1 : number = ((tahun2*365)+(bulan2*30)+hari2)-((tahun1*365)+(bulan1*30)+hari1);

//Hasil Selisih
console.log ("selisihnya adalah "+Jawaban1+" Hari");