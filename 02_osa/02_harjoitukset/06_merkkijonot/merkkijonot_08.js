/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
  return "Hello " + name +"!";
}

// Esimerkki - älä muokkaa
console.log(sayHello('Alex')); // "Hello Alex"
console.log(sayHello('Sam')); // "Hello Sam"



// Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä

// Kutsu tekemääsi funktiota

function sayMoi(name) {
  return "Moi " + name +"!";
}
console.log(sayMoi('Puk'));
