/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin. 
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/


function laskeKolmionPintaala(kannanPituus, korkeus) {
    return kannanPituus * korkeus / 2;
}

console.log (laskeKolmionPintaala(3, 5));
console.log (laskeKolmionPintaala(5, 10));
console.log (laskeKolmionPintaala (8, 9));