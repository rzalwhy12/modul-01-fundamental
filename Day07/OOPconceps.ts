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

interface IAddress {
    street: string,
    zip_code:number
}

interface IDetailInformation {
    detail:IPerson,
    address : IAddress,
}

const paket1:IDetailInformation ={
    detail: {
        id:123,
        name:`Bambang`,
        age : 40
    },
    address:{
        street: `jl. Merdeka, Jakarta pusat`,
        zip_code: 465
    }
}

console.log(`ambil info dari paket1 : `,paket1);

// mengasih value untuk person1
const person1 : IPerson = {
    id:1,
    name:`Bob`,
    age: 17,
    hobby: ["study","gamming"]
}
// mengasih value untuk person2
const person2 : IPerson ={
    id:1,
    name:`sayang`,
    age: 17
}

console.log(`info dari person1 : `,person1);
console.log(`info dari person1 : `,person2);

// -- TYPE --
type color = `red` | `blue` | `green`
const faforiteColor:color = `blue`

type Coordinates = {
    x:number
    y:number
}

const point : Coordinates = { x: 5, y:10 }

console.log(`hasil dari faforite color :`,faforiteColor);
console.log(`Hasil dari kordinates :`, point);

type Vehicle = {
    brand : string,
    year : number
}
type Car = Vehicle & {
    seat: number
}

const car : Car ={
    brand : `honda`,
    year : 2015,
    seat : 6
}

console.log(car);

// -- Properties & Methods

interface IWashingMachine {
    brand : string,
    loadCapasity : number,
    start:() => string,
    stop : () => string,
}

const washingMachine: IWashingMachine ={
    brand:`LG`,
    loadCapasity:7,
    start(){
        return `Washing started`
    },
    stop(){
        return `Washing Stoped`
    }
}

console.log(washingMachine.start());
console.log(washingMachine.stop())

// --For in loop
const fridge: any ={
    milk : 1,
    eggs: 12
}

for (const key in fridge){
    console.log(fridge[key])
    console.log(key)
    console.log(`${key} : ${fridge[key]}`);
}

// -- Destructuring Assignment
const {username, age} = {
    username : `bob`,
    age: 20
}

console.log(`username`, username);
console.log(`age`, age);
console.log(`------------------`);

interface IAnimal {
    species:string,
    nickname:string,
    animalAge:number
}

const {species, nickname, animalAge}: IAnimal={
    species :`Mamalia`,
    nickname :`elephane`,
    animalAge:10
}

console.log(species);
console.log(nickname);
console.log(animalAge);

// -- Spread Operator --
const basicInfo = { name : `Tom`}
const fullInfo = {
    ...basicInfo,
    age:35
}

fullInfo.name = `test`

console.log(`Full Info :`, fullInfo);
console.log(`Basic Info :`, basicInfo);

const a ={
    a: 1
}
const b ={
    b: 2
}

const merged = {...a,...b}

console.log(a);
console.log(b);
console.log(merged);

// -- Class --
class BankAccount {
    balance: number = 0
    deposit(amount: number) {
        this.balance += amount
    }
    withdraw(amount: number) {
        this.balance -= amount
    }
}

const myBankAccount = new BankAccount()

// console.log('saldo saat ini : ', myBankAccount.balance)
// console.log('menyimpan uang ...')
// myBankAccount.deposit(50000)
// console.log('saldo setelah deposit : ', myBankAccount.balance)
// console.log('tarik tunai uang ...')
// myBankAccount.withdraw(25000)
// console.log('saldo setelah ditarik tunai : ', myBankAccount.balance)

class Light {
    isOn: boolean = false
    toggle() {
        this.isOn = !this.isOn
    }
}

const light = new Light()
// light.toggle()
// console.log('kondisi lampu : ', light.isOn)
// light.toggle()
// console.log('kondisi lampu : ', light.isOn)


// --- Constructor & Private/Public Property ---

// contoh 1
class Laptop {
    private brand: string; // proses encapsulation (menyembunyikan property agar tidak bisa diakses di luar)
    public ram: number;

    constructor(brand: string, ram: number) {
        this.brand = brand;
        this.ram = ram;
    }

    getDisplay() {
        return {
            brand: this.brand,
            ram: this.ram
        }
    }
}

const laptop1 = new Laptop('Apple Macbook Pro', 16)
const laptop2 = new Laptop('Asus Vivobook', 8)
// console.log('info laptop yang sedang diinputkan : ', laptop1.getDisplay())
// console.log('info laptop yang sedang diinputkan : ', laptop2.getDisplay())

// console.log(laptop1.brand) -> tidak bisa dipanggil karena ada proses encapsulation

// contoh 2
class Motorcycle {
    private fuel: number = 50;
    public amount: number = 0

    constructor(amount: number) {
        this.amount = amount
    }

    riding() {
        console.log("Riding the motorcycle ...")
        if (this.fuel > 0) {
            this.fuel -= 5
        }
    }

    brake() {
        console.log("Brake the motorcycle ...")
    }

    refillFuel() {
        return this.fuel += this.amount
    }

    checkFuel() {
        return this.fuel
    }
}

const motorcycle = new Motorcycle(10)

console.log('cek isi bensin : ', motorcycle.checkFuel())
motorcycle.riding()
console.log('cek isi bensin setelah motor berjalan : ', motorcycle.checkFuel())
console.log('mlipir ke pom bensin ...')
motorcycle.refillFuel()
console.log('setelah isi bensin : ', motorcycle.checkFuel())