// Callback Function : - Sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukan melalui parameter

/**
 * Aturan penulisan :
 * 
 * function mainFunction(callbackFn){
 *      /code
 *      callbackFn;
 * }
 * - callbackFn : parameter yang harus diisi dengan function
 */

function mainFunction(callbackFn){
    console.log(callbackFn());
    
}

mainFunction(function(){
    return ("Hello");
    
});

function printCalculation(cb){
    let angkaA : number = 20;
    let angkaB : number = 10;

    const result : number=cb(angkaA, angkaB)

    return `Hasil perhitungan adalah ${result}`
}

const calculation : string = printCalculation(function(angkaA:number,angkaB:number){
    return angkaA*angkaB
})

console.log(calculation);

const dataArr : any[]=[1,2,3,4,5,6,7,8];

// Array.forEach(cbfn) : untuk mengases isi dam index dari setiap data array
dataArr.forEach((value:number,index:number) => {
    console.log(value);
    
})

// array.map(cbfn) : untuk merubah keseluruhan data array dan dijadikan data array baru
const newDataArr : number[] = dataArr.map((value:number) => {
    return value * 2;
})
console.log(newDataArr);

//arr.filter(cbfn) : untuk mencari data sesuai acuan filter dan menampungnya kedalam array baru
const filterArr:number[]=dataArr.filter((value:number) => {
    return value %2 !== 0;
})

console.log(filterArr);

// Object : tipe data yang dapat menampung tipe data lain dan setiap data ditampung kedalam property

/**
 * Aturan penulisan :
 * Cara 1 :
 * const object ={
 *     namaProperty : value,
 *     Nama:"Edi",
 *     usia:18,
 *     isActive : true,
 *     grade : ["A","B","C"]
 *     getInfo:function(){
 *          /Code
 *     }
 * }
 * 
 * Cara 2 :
 * const object = new Object();
 * object.name = "Edi";
 * object.usia = 15;
 * 
 * 
 * Cara 3 :
 * class MyObj{
 *      constructor(name,usia){
 *          this.name=name;
 *          this.usia=usia;
 *      }
 * }
 */

interface IhumanB{
    name : string;
    age:number;
    gender: " Male " | "Female" ;
    isLive : boolean;
}

// Cara 1
const dataHuman : IhumanB ={
    name : "Edi",
    age: 17,
    gender: " Male ",
    isLive : true,

}

// Cara 2
const dataHumanB : any = new Object();
dataHumanB.name="Edo";
dataHumanB.age=17;
dataHumanB.gender="Male";
dataHumanB.isLive=true;

// Cara 3
class Human implements IhumanB {
    name : string;
    age: number;
    gender: " Male " | "Female" ;
    isLive : boolean;

    constructor(
    _name : string,
    _age: number,
    _gender: " Male " | "Female" ,
    _isLive : boolean,
    private religion:string="islam" // sembunyikan property

    ){
        this.name=_name;
        this.age=_age;
        this.gender=_gender;
        this.isLive=_isLive;
    }
}

const data : IhumanB = new Human("aldi", 20 , " Male ", true) // instance

console.log(data.name);
console.log(data["age"]);
console.log(data);

// Inheritance : pewarisan data dari class utama. supaya class turunan memiliki property dari class utama
// class Employee extends Human {
// position: string;
// salary: number;

// constructor(
//     _name: string,
//     _age: number,
//     _gender: " Male " | "Female",
//     position: string,
//     salary: number
// ) {
//     super(_name, _age, _gender);
//     this.position = position;
//     this.salary = salary;
// }
// }

// const employee1: Employee = new Employee(
// "Irfan",
// 15,
// " Male ",
// "Front-end",
// 5000000
// );

// console.log(employee1);

 // Destructure : mengeluarkan nilai dari property object menjadi variable yang beridiri sendiri
// const { age: umur, isLive, gender } = employee1;
// console.log(umur);
// console.log(gender);