/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial+lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

console.log(concatInitials('V', 'B')); 


// Kutsu tekemääsi funktiota

function concatInitials2(firstNameInitial, lastNameInitial) {
    return firstNameInitial+lastNameInitial;
}


console.log(concatInitials2('V', 'B')); 