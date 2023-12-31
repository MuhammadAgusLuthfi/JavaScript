//Code Operator Aritmatika
document.writeln("Operator Aritmatika");
document.writeln("<hr>");
document.writeln("</br>");
document.writeln("Pertambahan");
document.writeln("</br>");
let result = 1 + 2;
document.writeln("<p>1 + 2  = " + result + "</p>");
let originalResult = result;
document.writeln("<hr>");

document.writeln("Pengurangan");
document.writeln("</br>");
result = result - 1;
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result;
document.writeln("<hr>");


document.writeln("Perkalian");
document.writeln("</br>");
result = result * 2;
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult = result;
document.writeln("<hr>");


document.writeln("Exponensial;");
document.writeln("</br>");
result = result ** 2;
document.writeln("<p>" + originalResult + " ** 2 = " + result + "</p>");
originalResult = result;
document.writeln("<hr>");


document.writeln("Pembagian");
document.writeln("</br>");
result = result / 2;
document.writeln("<p>" + originalResult + " / 2 = " + result + "</p>");
originalResult = result;
document.writeln("<hr>");


document.writeln("Sisa Bagi");
document.writeln("</br>");
result = result % 2;
document.writeln("<p>" + originalResult + " % 2 = " + result + "</p>");
originalResult = result;
document.writeln("<hr>");


//Code Operator Augmented Assignments
document.writeln("Operator Augmented Assignments");
document.writeln("<hr>");
document.writeln("</br>");
document.writeln("Pertambahan");
document.writeln("</br>");

let result2 = 1 + 2;
document.writeln("<p>1 + 2  = " + result2 + "</p>");
let originalResult2 = result2;
document.writeln("<hr>");

document.writeln("Pengurangan");
document.writeln("</br>");
result2 -= 1;
document.writeln("<p>" + originalResult2 + " - 1 = " + result2 + "</p>");
originalResult2 = result2;
document.writeln("<hr>");


document.writeln("Perkalian");
document.writeln("</br>");
result2 *= 2;
document.writeln("<p>" + originalResult2 + " * 2 = " + result2 + "</p>");
originalResult2 = result2;
document.writeln("<hr>");


document.writeln("Exponensial;");
document.writeln("</br>");
result2 **= 2;
document.writeln("<p>" + originalResult2 + " ** 2 = " + result2 + "</p>");
originalResult2 = result2;
document.writeln("<hr>");


document.writeln("Pembagian");
document.writeln("</br>");
result2 /= 2;
document.writeln("<p>" + originalResult2 + " / 2 = " + result2 + "</p>");
originalResult2 = result2;
document.writeln("<hr>");


document.writeln("Sisa Bagi");
document.writeln("</br>");
result2 %= 2;
document.writeln("<p>" + originalResult2 + " % 2 = " + result2 + "</p>");
originalResult2 = result2;
document.writeln("<hr>");

//Code Operator Unary
document.writeln("Operator Unary");
document.writeln("<hr>");
document.writeln("</br>");

let result3 = +1;
document.writeln("Nilai Positif");
document.writeln("</br>");
document.writeln("<p>" + result3 + "</p>");
document.writeln("<hr>");

document.writeln("Nilai Negatif");
result3 = -result3;
document.writeln("</br>");
document.writeln("<p>" + result3 + "</p>");
document.writeln("<hr>");

document.writeln("Increment, Menaikan 1 angka");
result3++;
document.writeln("</br>");
document.writeln("<p>" + result3 + "</p>");
document.writeln("<hr>");

document.writeln("Decrement, Menurunkan 1 angka");
result3--;
document.writeln("</br>");
document.writeln("<p>" + result3 + "</p>");
document.writeln("<hr>");


//Code Operator Perbandingan
document.writeln("Operator Perbandingan");
document.writeln("<hr>");
document.writeln("</br>");

let result4 = 5 == "5";
document.writeln("<p> Hasil 5 == 5 adalah " + result4 + "</p>");
document.writeln("<hr>");

result4 = 5 === "5";
document.writeln("<p>Hasil 5 === 5 adalah " + result4 + "</p>");
document.writeln("<hr>");

result4 = 5 < 10;
document.writeln("<p>Hasil 5 < 10 adalah " + result4 + "</p>");
document.writeln("<hr>");

result4 = 5 > 10;
document.writeln("<p>Hasil 5 > 10 adalah " + result4 + "</p>");
document.writeln("<hr>");


//Code Operator Logika
document.writeln("Operator Logika");
document.writeln("<hr>");
document.writeln("</br>");

document.writeln("Operator &&");
const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
document.writeln(lulusUjian);
const lulusAbsensi = nilaiAbsensi > 75;
document.writeln(lulusAbsensi);


const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p>" + " Nilai ujian nya = " + nilaiUjian + " Nilai absensi nya =" + nilaiAbsensi + " jadi hasilnya  adalah " + lulus + "</p>");

document.writeln("<hr>");

document.writeln("Operator ||");

document.writeln("<hr>");

document.writeln("Operator Unary !");
