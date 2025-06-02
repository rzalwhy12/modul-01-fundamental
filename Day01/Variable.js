// VARIABLE : penampung data

/*
- rumus penulisan varianle ==> keywordVariable namaVariable = data;
- keywordVariable : var, let, const
- namaVariable :- Harus diawali dengan huruf atau simbol _ atau $
                - Bila terdiri dari dua suku kata ataulebih, maka tidak boleh dipisah dengan spasi.
- data : tipe data yang ingin di simpan diantaranya string, number, boolean, undefined, array, object.
*/

// mendeklarasikan Variable
var namaMurid;

// Meng-inisialisasi Variable
var UsiaMurid = 17;

// Karakter tiap keyword variable
// Keyword var : redeclare, reassign
var alamat = "Jl. pemuda Surabaya";
var alamat = "Sukolilo Surabaya"; //Membuat Ulang variable yang sudah ada

//Reassign
alamat = "Rungkut Surabaya";

//Keyword let : non-redeclare, reassign
let program = "web development";
//let program "Digital marketing";
program = "Data Science" // reassign

// Keyword const : non-redeclare, non-reassign
const PI = 3.14;
const Uridomain = "http://google.com";

