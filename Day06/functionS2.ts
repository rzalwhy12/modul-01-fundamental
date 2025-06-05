// Callback Function :  - Sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukan melalui parameter
//                      - Sebuah fungsi yang langsung dibuat didalam parameter fungsi lain

/**
 * Aturan penulisam :
 * 
 * function namafunction(callbackFn){
 *      callbackFn();
 * }
 * 
 * - callbackFn : parameter yang harus diisi dengan fungsi
 * 
 */

// mainFunction declaration
function printCalculation(callbackFn){
    // Menjalankan fungsi dari parameter callbackFn dan ditampung kedalam variable result
    const result = callbackFn(); 

    return(`hasil perhitungan dari callback adalah ${result}`)
}

console.log(printCalculation(function(){
    let angkaA:number=10;
    let angkaB:number=30

    return angkaA+angkaB;
}));

console.log(printCalculation(function(){
    let angkaA:number=10;
    let angkab:number=5;

    return angkaA-angkab;
}))

//function pembagian(){
//    let numbA:number=20;
//    let numbB:number=4;

//    const result:number = numbA/numbB;

//    return ` hasil pembagian adalah ${result}`;
//}

//console.log(pembagian());

//Jarang digunakan karena kurang efektif

function printhasil(callback){
    let angkaA:number=10
    let angkaB:number=2
//Menjalankan fungsi dari parameter callback dan ditampung outputnya kedalam variable result
    const result = callback(angkaA,angkaB)

    return angkaA/angkaB
}

//console.log(printhasil(angkaA,angkaB))

//Array function : forEach, map, filter
//Array.forEach(callbackFn) : sebagai pilihan selain for loop untuk mengakses isi dari tiap data array
const stundent:string[]=["abdi","Edi","Aldo"]

//for loop
for(let i=0;i<stundent.length;i++){
    const value = stundent[i];
    console.log(`${i + 1}. ${value}`);
}

stundent.forEach((value,index) =>{
    console.log(`${index+1}. ${value}`);
    
});

//Duplikasi cara kerja array.forEach
function dublicateforEach(arrayData:any[], callbackFn){
// testing index
    for(let index=0 ; index < stundent.length;index++){
        const value = arrayData[index];
        callbackFn(value, index);
        console.log(value);
    }
}

dublicateforEach(stundent, (value:any, index:number) =>{
    console.log(`${index + 1}. ${value}`); //result
});

// array.map(callbackFn): untuk merubah seluruh data array yang baru
// [1,2,3] -> [2,4,6]
// [1,2,3] -> [ganjil,genap,ganjil]
//["Abdi","Edo","Aldo"] -> ["1.Abdi", "2.Edo", "3.Aldo"]
//["Abdi","Edo","Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
//[1000,2000,3000]->["Rp.1.000","Rp.2.000","Rp.3.000"]

const uang : number[]=[2000,5000,10000];



const newUang : any = uang.map((value,index) =>{
    return value.toLocaleString("id",{
        style:"currency",
        currency:"IDR",
    });
});

console.log(newUang);

//Exercise Dublicate map
function dublicateMap(arrayData:any[],callbackFn){
const arr:any[]=[];
for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    console.log(value);
    console.log(callbackFn(value, index));
    
    
    arr.push(callbackFn(value,index));
}

return arr;
}

const numberToCurrency = dublicateMap(uang, function (value){
    return value.toLocaleString("id",{
        style:"currency",
        currency:"IDR",
    });
});
console.log(numberToCurrency);


const NumberToCurrency = dublicateMap(uang, function (value){
    return value * 2;
});
console.log(NumberToCurrency);

//array.filter(callbackFn) :untuk menghasilkan array baru sesuai acuan filter yang diberikan
// [1,2,3,7,20,12] -> [2,20,12];

const angka : number[]=[1,2,3,7,20,12];

const angkaGenap: number[]=angka.filter((value, index) => {
    return value %2 === 0;
});
console.log(angkaGenap);

const angkaGanjil: number[]=angka.filter((value, index) => {
    return value %2 !== 0;
});
console.log(angkaGanjil);



