// Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :

// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }

interface Student {
    nama: string;
    email: string;
}

const array1: Student[] = [
    { nama: "Student5", email: "Student5@example.com" },
    { nama: "Student1", email: "Student5@example.com" },
    { nama: "Student2", email: "Student2@example.com" },
    { nama: "Student3", email: "Student3@example.com" }
];

const array2: Student[] = [
    { nama: "Student1", email: "Student1@example.com" },
    { nama: "Student3", email: "Student3@example.com" },
    { nama: "Student4", email: "Student4@example.com" }
];

const combinedArray: Student[] = array1.reduce((acc: Student[], item: Student) => {
    if (!acc.find((existingObj: Student) => existingObj.nama === item.nama || existingObj.email === item.email)) {
        acc.push(item);
    }
    return acc;
}, []);

array2.forEach((item: Student) => {
    if (!combinedArray.find((existingObj: Student) => existingObj.nama === item.nama || existingObj.email === item.email)) {
        combinedArray.push(item);
    }
});

console.log(combinedArray);

// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

function ubahObjekArray(arrayObjek: Array<Record<string, any>>): Array<Record<string, string>> {
    let hasil: Array<Record<string, string>> = [];

    for (let j = 0; j < arrayObjek.length; j++) {
        const objek = arrayObjek[j];

        let objekBaru: Record<string, string> = {};

        const propertiKeys: string[] = Object.keys(objek);
        for (let i = 0; i < propertiKeys.length; i++) {
            const properti = propertiKeys[i];
            objekBaru[String(objek[properti])] = properti;
        }
        hasil.push(objekBaru);
    }
    return hasil;
}

const arrayObjek = [
    { nama: "David", usia: 20 },
    { nama: "sayang", usia: 21 }
];

const hasil = ubahObjekArray(arrayObjek);
console.log(hasil);

// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function sumTo(n:number):number {
if (n === 1) {
    return 1; // Kasus dasar: 1
} else {
    return n + sumTo(n - 1); // Kasus rekursif
}
}

console.log(sumTo(5));