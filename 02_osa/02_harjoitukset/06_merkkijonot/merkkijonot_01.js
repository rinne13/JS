/**
Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
*/

function getCharCount(str) {
    return str.length;
}


// Esimerkkikäyttö - älä muokkaa
console.log(getCharCount('Sam')); // 3
console.log(getCharCount('Alex 123')); // 8
console.log(getCharCount('Jimi was here')); // 15



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getCharCount(str) {
    return str.length;
}

console.log(getCharCount('Petter')); // 6


// Kutsu tekemääsi funktiota

function getNewName(str) {
    return str.length;
}

console.log(getNewName('Petter')); 