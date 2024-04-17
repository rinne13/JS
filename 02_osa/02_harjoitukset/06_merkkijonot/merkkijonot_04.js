/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
    return name.charAt(0);
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"




// Treenaa: Keksi itse samanlainen funktio eri nimellä

console.log(getFirstCharacter('Claus'));


// Kutsu tekemääsi funktiota

function getFirstKirjain(name) {
    return name.charAt(0);
}

console.log(getFirstKirjain('Claus'));