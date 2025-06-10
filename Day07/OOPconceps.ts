//Contoh 1 : membuat objek hewan peliharaan
const pet = {
    name : `Buddy`,
    species : `Dog`,
    age : 4,
    vaccinated : true,
    faforiteToy : `Ball`
};

// Cara akses Value dari objek pet
console.log("ambil property name dari pet :", pet.name);

//Membuat object dari new objek
const idCard : any = new Object();
idCard.name = `Budi`
idCard.age = 30
idCard.gender=`Male`

//Memanggil
console.log(`Isi dari idCard : `,idCard);

//Membuat object dengan function
function createStudent(name:string, grade:number) {
    return{
        name : name,
        grade : grade
    }
}
const student = createStudent("Budi",19);

console.log(`Hasil dari student ${student}`);

//Membuat objek dengan metode Object.assign
const employee = Object.assign({}, {name:`Bob`,role: `Supervisor`});
console.log("informasi dari employee", employee);

// ----- Interface ------
// interface -> seperti cetak biru atau blueprint
interface IPerson {
    id: number,
    name : string,
    age : number,
    //hobby opsional di kasih "?""
    hobby? : string[]
}

const person1 : IPerson = {
    id:1,
    name:`Bob`,
    age: 17,
    hobby: ["study","gamming"]
}

const person2 : IPerson ={
    id:1,
    name:`sayang`,
    age: 17
}

console.log(`info dari person1 : `,person1);
console.log(`info dari person1 : `,person2);

