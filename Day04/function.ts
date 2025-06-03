//FUNCTION
/**
 * Definisi : Sekumpulan program yang disatukan untuk mengerjakan proses khusus yang biasanya bersifat reusable.
 * Kategori : Built-in function dan user-defined function
 * Aturan penulisan :
 * - Penamaan function mengikuti aturan nama variable
 * - Bisa menerima parameter/argumen : penampung dari function, untuk menerima nilai dari luar function
 * - Function biasanya menghasilkan nilai output melalui keyword return didalamnya
 * - Opsi penulisan bisa menggunakan Declarative func, Function Expression atau Arrow Function
 */

//Contoh tanpa function
//INPUT : dua variable yang menampung data untuk di jumlahkan
let angkA:number = 10;
let angkB:number = 13;
//PROCESS : memproses penjumlahan kedua variable
const Hasil : number = angkA + angkB;
//OUTPUT : menampilkan hasil penjumlahan
console.log(Hasil);

//buat kode diatas menjadi Declarative Function
/**
 * Declarative func :
 * function namaFunc(param1, param2,...){
 *  /code
 * }
 */
// Membuat Function
function penjumlahan() {
    let angkA: number = 2;
    let angkB: number = 5;

    const hasil: number = angkA+angkB;

    return hasil;
}

let printpenjumlahan = penjumlahan();
console.log(printpenjumlahan);

console.log(penjumlahan());

// Function with parameter for reusable
function pengurangan(AngkA :number, AngkB:number){
    const hasil:number=AngkA-AngkB;
    return hasil;
}
console.log(pengurangan(10,20));
console.log(pengurangan(8,5));
console.log(pengurangan(10,2));


