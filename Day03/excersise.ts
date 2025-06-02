/*
Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number
*/

let Cekangka : number = 4;
let cetakprint : String ="";

if (Cekangka % 2 === 0){
    cetakprint += `${Cekangka} = GENAP `;
}else {
    cetakprint += `${Cekangka} = GANJIL `;
}

console.log(cetakprint);


/*
Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number
*/

let angkka : number = 3;
let pembagi : number = 0;
let ppp : string ="";

for(let a=1; a <= angkka; a++){
    if (angkka%a === 0) {
        pembagi++;
    }
}
if (pembagi == 2) {
    ppp=`${angkka} adalah bilangan prima`;
} else {
    ppp=`${angkka} bukan bilangan prima`;
}
console.log(ppp);

/*
Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6
*/


let sum = 0;
const N : number = 9;
let pppp : string = "";

for (let i: number = 1; i <= N; i++) {
    if (i === 0){
        pppp += `${i} + `;
    }else {
        pppp += `${i} + `;
    }
}

let bbb 
for (let i = 1; i <= N; i++) {
    sum += i;
}
    bbb =(sum);

console.log(`${pppp} 0 = ${bbb}`)

/*
Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/

let angkaaa : number = 4;
let factorial : number = 1;
let ppppp ;

for (let i: number = 1; i <= angkaaa; i++) {
    ppppp=(i);
}

for (let i = 1; i <= angkaaa; i++) {
    factorial *=i;
}

let pq;
for (let i: number = 1; i <= angkaaa; i++) {
    if(i > 0){
        pq += `${i} * `;
    }
    }

console.log(`${pq} = ${factorial}`);

/*
Write a code to print the first N fibonacci numbers
○ Example: 15 → 610
*/

let num2 :number=15;
let A : number = 0;
let B : number = 1;
let C : number;
let result3 : string ="";

for (let i = 1;i <= num2; i++){
    result3 += A+" ";
    C = A + B;
    A = B;
    B = C;

}
console.log(`angka finabocci ke ${num2} adalah ${A}`)