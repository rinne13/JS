/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

function greaterNum(num1, num2) {
    if (num1 > num2) {
    return num1;
    } else {
        return num2;
    }
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));

