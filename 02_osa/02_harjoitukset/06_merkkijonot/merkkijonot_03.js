/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */
function lowerName(name) {
    return name.toLowerCase ();
}

// Esimerkki - älä muokkaa
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

console.log(lowerName('VARVARA')); 
console.log(lowerName('SAHSA')); 


// Kutsu tekemääsi funktiota

function lowName(name) {
    return name.toLowerCase ();
}

console.log(lowName('VARVARA')); 
console.log(lowName('SAHSA')); 