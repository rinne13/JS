/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  return name.charAt(name.length - 1);
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

console.log(getLastCharacter('puk'))


// Kutsu tekemääsi funktiota

function LastCharacter(name) {
  return name.charAt(name.length - 1);
}

console.log(LastCharacter('puk'))
