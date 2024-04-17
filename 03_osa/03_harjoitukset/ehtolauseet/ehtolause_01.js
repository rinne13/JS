/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
*/

function canVote(age) {
    if (age>=18) { 
        return true;
    }
    else {
        return false;
    }
    
}


// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function examPassed (rate) {
    if (rate>=75) {
        return true;
    }
    else {
        return false;
    }
}


// Kutsu tekemääsi funktiota


console.log(examPassed(100)); // 
console.log(examPassed(74)); // 
console.log(examPassed(10)); // 