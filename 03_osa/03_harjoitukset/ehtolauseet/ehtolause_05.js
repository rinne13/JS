/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
    if (number%2 === 0) { 
        return "even";
    } else {
    return "odd";
  }
}


// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota

function evenTaiOdd(number) {
    if (number%2 === 0) { 
        return "even";
    } else {
    return "odd";
  }
}

console.log(evenTaiOdd(255)); // "odd"
console.log(evenTaiOdd(28)); // "even"
console.log(evenTaiOdd(-171)); // "odd"



