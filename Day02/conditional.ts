//CONDITIONAL STATEMENT
/*
- IF STATEMENT : Untuk memeriksa satu buah kondisi
- IF ... ELSE STATEMENT : Memeriksa dua kondisi
- IF ... ELSE IF ... ELSE STATEMENT : Memeriksa tida kondisi atau lebih
- SWITCH CASE STATEMENT : untuk memeriksa data dalam pencocokan nilai
*/

//Contoh data
let nama: String = "Edo";
let usia: Number = 10;

//IF
/*
- Aturan penulisan
- if(codition){
-    // CODE
-}

Note :
- condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL OPERATOR)
- code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (Bernilai TRUE)
*/

//example : memvalidasi batas usia
if (usia < 16) {
    console.log(`${nama} sudah dewasa`);
}

//IF...ELSE
/*
- Aturan penulisan
- if(codition){
-    // CODE
- }else {
-  // CODE
- }

Note :
- condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL OPERATOR)
- code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (Bernilai TRUE)
*/

usia = 10;
if(usia > 16) {
    const print: string = `${nama} Sudah dewasa`;
    console.log(print);
}else(usia > 10) {
    const print: string = `${nama} Belom Dewasa`;
    console.log(print);
}




//IF...ELSE IF...ELSE
/*
- Aturan penulisan
- if(codition){
-    // CODE
- }else if{
-  // CODE
- }else if (codition){
-    // CODE
- }else {
-  // CODE
- }

Note :
- condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL OPERATOR)
- code : baris program yang ingin dijalankan jika condition didalam if terpenuhi (Bernilai TRUE)
*/

// Example : klasifikasi nilai ujian
const examGrade: number = 70;


// PROCES
let result: String;
if(examGrade >= 90){
    result = "Grade A"
}else if(examGrade >= 80 && examGrade < 90) {
    result = "Grade B";
}else if (examGrade >= 70 && examGrade < 80) {
    result = "Grade C"
}else {
    result = "Grade F"
}

//OUTPUT
console.log(result);

//SWITCH...CASE
/**
 * Aturan penulisan :
 * switch(data){
 *       case value:
 *         // Code
 *      default:
 *          // Code
 * }
 */

const job: string = "OB";

switch (job) {
    case "coder": // job === "coder";
        console.log("membuat aplikasi")
        break;
    case "Driver":
        console.log("mengemudi");
        break;
    default:
        console.log("tidak tau");
}

