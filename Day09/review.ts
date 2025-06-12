/**
 * KISI KISI EXAM MODUL 1 :
- Introduction programing
- Data Type (Primitive, Non-primitive)
- var, let dan const
- introduce JS
- Looping statement
- Interface dan object declaration
- Function hoisting
- Encapsulation
- Data Stucture
- Big 0 notation
 */

//Variable : penampung data

/**
 * rumus penulisan variable ==> keywordVariable namaVariable = value;
 * keywordVariable : var , let , count
 * nama variable :
 * - Tidak boleh diawali dengan angka.
 * - Boleh diawali simbol _ atau $
 * - Jika terdiri dari lebih daari suku kata harus digabung dengan metode camelcase
 */

// Karakter keyword variable
// Keyword var : redeclare, reassign, global variable

// Redeclare
var nama : string = "Abdi";
var nama : string = "Edo";

// Reassign
nama = "Aldo";

// keyword let : non-redeclare, reassign, block-scoped variable

// non-Redeclare
let usia : number = 20;
// let usia : number = 2;

// Reassign
usia = 40;

// contoh block scoped variable
function introduce(){
    let usia: number = 15;
    return `usiaku ${usia}`
}

// keyword Const : Non-Redeclare, Non-Reassign, constant variable
const PI = Math. PI;
const listAngka : number[]=[2,3,4,5,6,7];
interface Ihuman{
    nama : string,
    tglLahir:string,
    gender:"pria"|"wanita"
}
const human:Ihuman = {
    nama:"Abdi",
    tglLahir:"2000-12-03",
    gender:"pria"
}

// Looping statement : penulisan code yang ditunjukan untuk mengulang eksekusi suatu kode

/**
 * WHILE LOOP : Mengulang program yang akan selalu dijalankan selama kondisi masih terpenuhi
 * Aturan penulisan :
 * while(kondisi){
 *    /kode
 * }
 */

let count : number = 1;

while(count < 10){
    console.log(`Loope ke-${count}`);
    count++
}

while (true){
    let random : number = Math.random();
    console.log(random);
    if(random < 0.25){
        break;
    }
    
}

/**
 * DO ... WHILE
 * aturan penulisan :
 * do{
 *     code
 * } while(condition)
 */

let counter : number =1;
do{
    console.log(counter);
    counter++
}while(counter < 10);

/**
 * FOR LOOP : Digunakan ketika batas looping ditentukan sejak awal
 * Aturan Penulisan :
 * for(counterDeclaration ; counter_condition ; counter){
 *    code
 * }
 */

for(let i : number = 1; i<10;i++){
    console.log(i);
}

// for ... in : looping yang berkaitan dengan tipe data object
for (const property in human) {
console.log(property);
console.log(human[property]);
}

console.log(human.nama);
console.log(human["nama"]);

// for ... of : looping yang berhubungan dengan akses value data array
const listProduct : string[] = ["kopi","teh","Es jeruk"];
for (const value of listProduct) {
    console.log(value);
}

// Array : tipe data yang mampu menampung berbagai macam tipe data lain
/**
 * ciri-ciri :
 *  - Data yang disimpan kedalam array akan di bungkus dengan kurung siku . contoh :[1,2,3]
 * - Setiap data yang disimpan didalam array, akan memiliki alamat index yang dimulai dari 0
 * 
 */

const listSiswa : string[]=["aldo","Aldi"];

interface Isiswa {
    nis:string,
    nama : string,
    kelas:"IPA"|"IPS"
}

const listSiswa2 : Isiswa[]=[
    {
        nis:"202020",
        nama:"Aldo",
        kelas:"IPA"
    },
    {
        nis:"202505",
        nama:"Aldi",
        kelas:"IPS"
    }
]

console.log(`${listSiswa2[0]}`);
console.log(`${JSON.stringify(listSiswa2[0])}`);

// JSON
const stringObject = `${JSON.stringify(listSiswa2[0])}`;
console.log(typeof stringObject);
console.log(stringObject);
console.log(JSON.parse(stringObject));

// FUNCTION : cara untuk menyatukan sekumpulan program yang ditujukan untuk menyelesaikan tugas khusus
/**
 * kategori : Built-in function dan user-defined function
 * Aturan penerapan function :
 * - Function harus tersedia lebih dulu
 * - Penamaan function mengikuti aturan penamaan variable
 * - Secara opsional bisa menerima parameter/argumen : penampung data dari function untuk menerima data dari luar function
 * - function secara opsional bisa menghasilkan output melalui keyword return didalamnya
 * - Opsi penulisan function ada tiga : Declaration func, Func. Expression dan Arrow Function
 */

/**
 * Declarative function :
 * function namaFunction(param1?, param2?,...){
 *      code
 * }
 */
function penjumlahan (): number{
    let angkaA:number=2;
    let angkaB:number=3;

    const result:number= angkaA+angkaB;

    return result;
}
console.log(penjumlahan());

// angka diluar function

function penjumlahan2 (angkaA : number, angkaB:number) : number{

    const result:number= angkaA+angkaB;

    return result;
}
console.log(penjumlahan2(2,3));
console.log(penjumlahan2(2,5));
console.log(penjumlahan2(6,3));


/**
 * Function Expression :
 * const namaFunction = function(param1?, param2?,...){
 *      code
 * }
 */

// console.log(pengurangan());
const pengurangan = function (): number {
let angkaA: number = 2;
let angkaB: number = 3;

const result: number = angkaA - angkaB;

return result;
};

const penguranganB = function (angkaA: number, angkaB: number): number {
const result: number = angkaA - angkaB;

return result;
};

console.log(penguranganB(4, 5));
console.log(penguranganB(12, 5));

/**
 * Arrow function :
 * const namaFunc = (param1?, param2?,...) => {
 *      / code
 * }
 */

const perkalian = () => {
let angkaA: number = 10;
let angkaB: number = 20;

  const result: number = angkaA * angkaB;

return result;
};

const perkalianB = (angkaA: number, angkaB: number) => angkaA * angkaB;

console.log(perkalianB(10, 20));
console.log(perkalianB(15, 2));