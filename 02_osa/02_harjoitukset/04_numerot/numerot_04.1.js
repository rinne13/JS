/**Tehtävä: Jakolasku
 * Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
 * - Luo kaksi muuttujaa, ja anna niille arvot.
 * - Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan
 * - Tulosta vastaus konsoliin.
 */

let x
let y

function jakolasku(x,y) {
    return x/y;
}


console.log (jakolasku (2, 6));
console.log (jakolasku(6, 3));
console.log (jakolasku(10, 4));

///TAI///

let a =20;
let  b =10;

let tulos = a/b;

console.log ("Tulos on:", tulos);