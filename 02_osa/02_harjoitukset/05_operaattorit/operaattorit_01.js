/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/


let a = 10;
let b = 15;

let summa = a+b; //Lisää yhteen annettuja muuttajia
console.log ("Summa:", summa); // Palauttaa Summa on ja summan arvo 

let erotus  = a-b; //Vähentää annettuja muuttajia
console.log ("Erotus on:", erotus); // Palauttaa Erotus on ja vähennyksen arvo 

let tulo = a*b; // Kertaa annettuja muuttajia
console.log("Tulo on:", tulo); //// Palauttaa Tulo on ja kertauksen arvo 

let jakolasku = a/b; // Jakaa annettuja muuttajia
jakolasku = jakolasku.toFixed (2); // muuntaa numeron merkkijonoksi 2 määrällä.
console.log("Jakolasku on:", jakolasku); // Palauttaa Jakojäännös on ja jaon arvo 

let jakojäännös = a%b // palauttaa jakolaskun jäännöksen.
console.log("Jakojäännös on:", jakojäännös);






