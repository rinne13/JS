/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

function shoutMyName(name) {
    return name.toUpperCase();
}

// Esimerkki - älä muokkaa
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function shoutMyName(name) {
    return name.toUpperCase();
}

console.log(shoutMyName('Egor')); 
console.log(shoutMyName('Alexandra')); 
console.log(shoutMyName('varvara')); 


// Kutsu tekemääsi funktiota

function isotKirjaimet(name) {
    return name.toUpperCase();
}

console.log(isotKirjaimet('Egor')); 
console.log(isotKirjaimet('Alexandra')); 
console.log(isotKirjaimet('varvara')); 