// STRING : data yang berisi karakter huruf, angka atau symbol dan ditandai dengan symbol quotes.
let namaToko: String = "TOKO OLGA"
namaToko = "TOKO DONAT";

//Template literal
let alamatToko: String = `Jl. Gentgeng kali Surabaya`;

// Penggabungan data string
// Cara 1 : menggunakan penjumlahan +
let printInfo: String = namaToko + " " + alamatToko + " " + " Telp. 082737238";
console.log(printInfo);

//Cara 2 : Template Literal
printInfo = `${namaToko} ${alamatToko} Telp. 08222222`;
console.log(printInfo)

// Fungsi bawaan tipe data string
//string, length : menghitung panjang data string
let message: string = "Hello";
console.log(message.length)

//String. toLowerCase() : Merubah semua karakter ke huruf kecil
console.log(message.toLowerCase());

//String. toUpperCase() : Merubah semua karakter ke huruf Besar
console.log(message.toUpperCase());

//String.include() : memastikan suatu kata atau karakter ada didalam data string
console.log(message.includes("e"));