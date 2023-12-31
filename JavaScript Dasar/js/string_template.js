/* String Template 
# Kita sudah tahu bahwa untuk menambahkan string dengan data lain,
kita busa menggunakan operator + (plus) 
# Namun pada kasus tertentu, penggunaan operator + (plus) sangat
menyulitkan, apalagi jika dalam jumlah banyak
# JavaScript memiliki fitur yang bernama String Template, dimana
kita bisa mensutitusi data dari luar String ke dalam String, seperti
mengambil data variable, atau bahkan melakukan operasi matematika
# Untuk menggunakan String Template, cara pembuatan String nya harus
menggunakan backtick(`), bukan putip satu(') atau putip dua (") */

const name = "Muhammad Agus Luthfi";
const firstName = "Muhammad";
const middleName = "Agus";
const lastName = "Luthfi";

const template = `Name : ${firstName} ${middleName} ${lastName} `;

console.info(template);

// Kode : Expression di String Template
const nilai = 80;
const template2 = `Name : ${name}, Lulus : ${nilai > 70}`;

console.info(template2);

// Multiline String
/* Multiline String
# String template juga bisa digunakan untuk membuat string multi line
# Kita cukup tambahkan enter di text nya  */

let multiline = `String template juga bisa digunakan untuk membuat string multi line
Kita cukup tambahkan enter di text nya
`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");