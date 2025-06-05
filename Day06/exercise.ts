/**
 * Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */


function jumlahAngkaDalamArray(mixedArray:any[]):number {
    let totalJumlah = 0;

    for (let index = 0; index < mixedArray.length; index++) {
        if (typeof mixedArray[index] === `number`){
            totalJumlah += mixedArray[index];
        }
    }

    return totalJumlah;
}

const mixedArray : any[] = ["3", 1, "string", null, false, undefined, 2];
const jumlahTotal = jumlahAngkaDalamArray(mixedArray);
console.log("jumlah total angka", jumlahTotal);

/**
 * Write a function that will combine 2 given array into one array
b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */

function gabungArray (array1, array2) {

    //Mencari Index array1
    const arrayGabungan : number[] = [];
    for (let i = 0; i < array1.length; i++) {
        arrayGabungan.push(array1[i]);
    }
    console.log(arrayGabungan);
    //Menambahkan Array2 ke array gabungan setelah array1 secara berurutan
    for (let i = 0; i < array2.length; i++) {
        arrayGabungan.push(array2[i]);
    }
    console.log(arrayGabungan);
    return arrayGabungan;
}

const arr1 : number[] = [1, 2, 3];
const arr2 : number[] = [4, 5, 6];

const arrayGabungan = gabungArray(arr1,arr2);
console.log(arrayGabungan);


/**
 * Write a function to find duplicate values in an array
b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */

let arr4:number[]=[1, 2, 2, 2, 3, 3, 4, 5, 5];

function FindDoubleNumber (arr4){
    let wadahArray:number[]=[];
    for (let i = 0; i < arr4.length; i++) {
        if(wadahArray.indexOf(arr4[i]) === -1){
            wadahArray.push(arr4[i]);
        }
    }
    return wadahArray;
}

console.log(FindDoubleNumber(arr4));


/**
 * Write a function to find the difference in 2 given array
b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */

function findDiffernce (array1, array2) {
    const angkaBerbeda: number[] = [];

    //Mencari Elemen ynag berbeda dari Array1
    for (let i = 0; i < array1.length; i++) {
        let ditemukanDiArray2 = false;
        
        // Flag untuk menandai apakah elemen ditemukan di array2
        for (let d = 0; d < array2.length; d++) {
            if (array1[i] === array2[d]){
                ditemukanDiArray2 = true;
                break;
            }
        }
        if (!ditemukanDiArray2){
            angkaBerbeda.push(array1[i]); // Tambahkan angka-angka yang berbeda dari Array1
        }
    }
    //Mencari Elemen berbeda dari array2
    for (let i = 0; i < array2.length; i++) {
        let ditemukanDiArray1 = false;
        // Flag untuk menandai apakah elemen ditemukan di array1
        for (let d = 0; d < array1.length; d++) {
            if (array2[i] === array1[d]) {
                ditemukanDiArray1 = true;
                break;
            }
        }
        if (!ditemukanDiArray1) {
            angkaBerbeda.push(array2[i]); //Tambahkan angka-angka yang berbeda dari Array2
        }
    }

    return angkaBerbeda;
}

const arry1 : number[] = [1, 2, 3, 4, 5];
const arry2 : number[] = [3, 4, 5, 6, 7];

const angkaBerbeda : number[]=findDiffernce(arry1,arry2);
console.log(angkaBerbeda);

