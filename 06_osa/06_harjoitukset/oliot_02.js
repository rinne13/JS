
/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/

const kirjasto = [
    kirja1 = {
        otsikko: "Sinuhe Egyptiläinen",
        kirjailija: "Mika Waltari",
        julkaisuvuosi: "1945"
    },
    kirja2 = {
        otsikko: "Kalevala",
        kirjailija: "Elias Lönnrot",
        julkaisuvuosi: "1828"
    }
];

console.log(kirjasto);


/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän

console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = "2024";
console.log(kirjasto[1].julkaisuvuosi)





/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän

kirjasto[0].lajityypit = "romaani";
kirjasto[0]["onSaatavilla"] = true;



/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän

function kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
  }

  let uusiKirja = new kirja("Suden vuosi", "Virpi Hämeen-Anttila", "2003", ["romaani"]);
  kirjasto.push(uusiKirja);


  console.log (uusiKirja);


/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän


function luoKirja (otsikko, kirjailija,julkaisuvuosi, [lajityypit]) {
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
}
let uusiLuoKirja = new luoKirja("Seitsemän veljestä", "Aleksis Kivi", "1870", ["romaani"]);
kirjasto.push(uusiLuoKirja);


console.log (kirjasto[3]);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän



  const jsonMerkkijono = JSON.stringify(kirjasto);
  console.log(jsonMerkkijono); 


