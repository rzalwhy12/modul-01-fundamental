/**
 *  ● Create a function to calculate array of student data
    ● The object has this following properties :
        ○ Name → String
        ○ Email → String
        ○ Age → Date
        ○ Score → Number
    ● Parameters : array of student
    ● Return values :
        ○ Object with this following properties :
            ■ Score
                ● Highest
                ● Lowest
                ● Average
            ■ Age
                ● Highest
                ● Lowest
                ● Average
 */

/* type NoteSiswa = [string, string, Date, number];

const dataSiswa: NoteSiswa[] = [
    ["niki", "jl.pemuda no.90", new Date("2000-01-05"), 90],
    ["niko", "jl.pemuda no.91", new Date("2000-03-15"), 70],
    ["nike", "jl.pemuda no.92", new Date("2000-04-03"), 80],
    ["niku", "jl.pemuda no.93", new Date("2000-01-14"), 90]
];


function tampilkanDataSiswa(siswa: NoteSiswa[]): void{
    console.log("--- Daftar siswa ---");
    if (siswa.length === 0){
        console.log("tidak ada data siswa");
        return;
    }
    
    siswa.forEach((dataIndividuSiswa, index) => {
        const [nama,alamat,tanggalLahir, skor] = dataIndividuSiswa;
        const formatTanggalLahir = tanggalLahir.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

        console.log(`\nSiswa ke ${index+1} : `);
        console.log(`  Nama : ${nama} `);
        console.log(`  Alamat : ${alamat} `);
        console.log(`  Tanggal Lahir : ${formatTanggalLahir} `);
        console.log(`  Nama : ${nama} : `);
        
    })
}

tampilkanDataSiswa(dataSiswa);
 */

interface Student {
    name: string,
    email: string,
    age: Date,
    score: number
}

interface StatResult {
    highest: number,
    lowest: number,
    average: number
}

interface StudentStatsResult {
    score: StatResult,
    age: StatResult
}

class StudentStatsCalculator {
    private student: Student[]

    constructor(student: Student[]) {
        this.student = student
    }

    private calculateAge(birthDate: Date) {
        const today = new Date()
        const actualBirthDate = new Date(birthDate)


        const age = today.getFullYear() - actualBirthDate.getFullYear()
        const hasHadBirthdayThisYear = today.getMonth() > actualBirthDate.getMonth() ||
            (today.getMonth() === actualBirthDate.getMonth() && today.getDate() >= actualBirthDate.getDate())
        return hasHadBirthdayThisYear ? age : age - 1
    }

    private calculateStats(values: number[]) {
        const highest = Math.max(...values)
        const lowest = Math.min(...values)

        const average = values.reduce((acc, val) => acc + val, 0) / values.length

        return {
            highest, lowest, average: parseFloat(average.toFixed(2))
        }
    }

    public getStats() {
        const scores = this.student.map((student) => student.score)
        const ages: any = this.student.map((student) => this.calculateAge(student.age))

        return {
            score: this.calculateStats(scores),
            age: this.calculateStats(ages)
        }
    }

}

const listStudent: Student[] = [
    {
        name: 'Alice',
        email: 'alice@example.com',
        age: new Date('2002-06-10'),
        score: 88
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        age: new Date('2001-07-08'),
        score: 92
    },
    {
        name: 'Charlie',
        email: 'charlie@example.com',
        age: new Date('2001-05-10'),
        score: 75
    }
]

const calculator = new StudentStatsCalculator(listStudent)
console.log(calculator.getStats())



/**
    ● Create a program to create transaction
    ● Product Class
        ○ Properties
            ■ Name
            ■ Price
    ● Transaction Class
        ○ Properties
            ■ Total
            ■ Product
                ● All product data
                ● Qty

    ○ Add to cart method → Add product to transaction
    ○ Show total method → Show total current transaction
    ○ Checkout method → Finalize transaction, return transaction data
 */

    interface Iproduct {
        name : string,
        price: number
    }

    interface IcardItem {
        product:Product
        quantity : number
    }
class Product implements Iproduct {
    name :string
    price : number
    constructor(name:string,price:number){
        this.name = name
        this.price = price
    }
}

class Transaction{
    private cart : IcardItem[]=[]

    // tambah kekeranjang
    public addToCard(product:Product,quantity:number){
        const existingItem = this.cart.find((item) => item.product.name === product.name)
        if (existingItem){
            existingItem.quantity += quantity
        } else {
            this.cart.push({product, quantity})
        }
    }

    // show total
    public showTotal(){
        return this.cart.reduce((total,item)=> total+item.product.price*item.quantity,0)
    }

    // checkout dan kembalikan detail dari transaksi
    public checkout(){
        const total = this.showTotal()
        const items = [...this.cart]

        this.cart = []
        return {items,total}
    }
}

const product = new Product(`laptop`, 1500)
const product2 = new Product(`mouse`, 1500)
const product3 = new Product(`keyboard`, 1500)

const transaction = new Transaction()

transaction.addToCard(product,1)
transaction.addToCard(product2,1)
transaction.addToCard(product3,1)

console.log("curren Total : $ ",transaction.showTotal());

const result = transaction.checkout()

console.log("Transaction Summary : ",);
result.items.forEach((item => {
    console.log(`${item.product.name} x ${item.quantity} = $ ${item.product.price * item.quantity}`);
    
}))

console.log("total : $ ", result.total);
