/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}

// Esimerkki - älä muokkaa
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

console.log(capitalize('varvara')); //
console.log(capitalize('ALEXEY')); // 
console.log(capitalize('KiRsIKkO')); // 


// Kutsu tekemääsi funktiota

function capitalizeNyt(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}

console.log(capitalizeNyt('varvara')); //
console.log(capitalizeNyt('ALEXEY')); // 
console.log(capitalizeNyt('KiRsIKkO')); // 
