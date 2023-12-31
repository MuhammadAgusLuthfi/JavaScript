/* Konversi String dan Number
# Saat membuat aplikasi, kadang kita input dari pengguna selalu dalam
bentuk string
# Sedangkan kita ingin mengelola datanya dalam bentuk Number
# Maka sangat disarankan untuk melakukan konversi tipe data */


// Kode : Masalah tanpa konversi

document.writeln("Masalah Tanpa Konversi");
document.writeln("</br>");

const value1 = "1";
const value2 = 1;

const sum = value1 + value2;

document.writeln(`<p>${sum}</p>`);
document.writeln("</br>");
document.writeln("<hr>");


/* Function Melakukan Konversi String dan Number
# parseInt(string) Mengkonversikan dari string ke number(bilangan bulat)
# parseFlot(string) Mengkonversikan dari string ke number(bilangan pecah)
# Number(string) Mengkonveriskan dari string ke number(bilangan bulat atau pecahan)
# number.toString() Mengkonversikan dari number ke string */
// Kode : Dengan konveris

document.writeln("Dengan Konversi");
document.writeln("</br>");

const value3 = parseInt("1");
const value4 = 1;

const sum2 = value3 + value4;

document.writeln(`<p>${sum2}</p>`);
document.writeln(`<p>${parseInt("1.1")}</p>`)
document.writeln(`<p>${parseFloat("1.1")}</p>`)
document.writeln(`<p>${Number("1.1")}</p>`)

const a = 1;
const b = 1;
const total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);


document.writeln("</br>");

/* Didalam Sebuah number itu ada sebuah NaN jika melakukan konversi data yang tidak valid
# Bagaimana jika ternyata data string yang kita coba konversi ke number
bukanlah data yang valid?
# jika data string yang kita coba lakukan konversi bukan lah data valid,
maka hasil dari konversi tersebut adalah NaN (Not a Number)
# NaN adalah number spesial yang menyebutkan bahwa ini bukanlah number
# Jika NaN dioperasikan dengan data number lainnya, maka hasilnya akan menjadi NaN lagi
*/

// Kode : NaN
document.writeln("NaN");
document.writeln("</br>");
document.writeln(`<p> ${parseInt("salah")} </p>`);// NaN
document.writeln(`<p> ${parseInt("1salah")} </p>`);// 1
document.writeln(`<p> ${parseFloat("1.1ups")} </p>`); // 1.1


// Number() tidak akan mentolelir kesalahan pada data
document.writeln("Kesalahan pada data");
document.writeln("</br>");
document.writeln(`<p> ${Number("1.1ups")} </p>`); // NaN
document.writeln(`<p> ${Number("1x")} </p>`); // NaN
document.writeln(`<p> ${Number("bukan number")} </p>`); //NaN

// Kode : Operasi pada NaN
document.writeln("Operasi pada NaN");
document.writeln("</br>");
const first = Number("salah"); // NaN
const totalNumber = first + 100;
document.writeln(`<p>${totalNumber}</p>`);

/* Function isNaN() 
# Kadang kita ingin mengecek apakah sebuah number itu NaN atau bukan
# Untuk melakukan pengecekan tersebut, kita bisa menggunakan function isNaN(number)
# Hasilnya adalah berupa data boolean, true jika NaN, false jika bukan
*/

// Kode : Function isNaN()
document.writeln("Function isNaN()");
document.writeln("</br>");
document.writeln(`<p>${isNaN(first)}</p>`);
document.writeln(`<p>${isNaN(100)}</p>`);
document.writeln(`<p>${isNaN(NaN)}</p>`);

