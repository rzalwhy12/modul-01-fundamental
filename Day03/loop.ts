//LOOPING STATEMENT : penulisan code yang ditunjukan untuk mengulang eksekusi suatu program hungga kondisi tertentu

console.log("1.Edo");
console.log("1.Abdi");
console.log("1.Andre");

/**
 * WHILE LOOP : perulangan program yang akan selalu berjalan selama kondisi masih terpenuhi
 * Aturan penulisan :
 * while(condition){
 *  /kode
 * };
 * condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL )
 */

let count : number = 1;
let isBoolean : boolean = true;

while (count <= 10) {
    console.log(count);
    count++; // count = count+1
}

while (true) {
    count++;

    if (count === 15){
        console.log(count);
        break;
    }
}

while (isBoolean) {
    count++;

    if (count === 25){
        console.log(count);
        isBoolean = false;
    }
}

/**
 * DO...WHILE
 * Aturan penulisan :
 * do{
 * / code
 * }while(condition)
 */

let counter : number = 1;

do {
    console.log(counter);
    counter++;
} while (counter < 1);

// FOR LOOP : digunakan ketika batas looping sudah ditentukan sejak awal
/**
 * for(counter_declaration;counter_condition;counter){
 *      /Code
 * }
 * 
 * - counter_declaration : variable yang mendefinisiakn nilai awal dari hitungan batas looping
 * - counter_condition : kondisi untuk menentukan batas looping
 * - counter : proses perhitungan increment atau decrement
 */

for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

const limit = 10;
let cetak : string = "";

for (let i:number = 0 ;i < limit;i++){
    if (i % 2 === 0){
        cetak += `${i} : GENAP | `;
    }else {
        cetak += `${i} : GANJIL | `;
    }
    }

console.log(cetak);

