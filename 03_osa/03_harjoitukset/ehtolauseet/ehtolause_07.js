/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/


function assignGrade (grade) {
if (grade >= 90) {
    return "A";
}

else if (grade >=80) {
    return ("B");
} 

else if (grade >=70) {
    return ("C");
}

else if (grade >=60) {
    return ("D");
}
else {
    return ("F")
}

}

// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.


function tentinTulokset (grade) {
    if (grade >= 95) {
        return "A";
    }
    
    else if (grade >=85) {
        return ("B");
    } 
    
    else if (grade >=75) {
        return ("C");
    }
    
    else if (grade >=65) {
        return ("D");
    }
    else {
        return ("F")
    }
    
    }
    



// Kutsu tekemääsi funktiota

console.log('Sinä sait ' + tentinTulokset(95)); 
console.log('Sinä sait ' + tentinTulokset(81)); 
console.log('Sinä sait ' + tentinTulokset(72)); 
console.log('Sinä sait ' + tentinTulokset(64)); 
console.log('Sinä sait ' + tentinTulokset(42)); 
