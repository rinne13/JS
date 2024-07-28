// Tehtävä 1: Olion luominen ja tulostaminen
/*
Luo olio nimeltään `henkilö` ominaisuuksilla: `nimi` asetettuna "Aleksi" ja `ikä` asetettuna 30.
Tulosta tämä olio konsoliin.
*/
// Kirjoita olio tähän

let henkilö = {
    nimi: "Aleksi",
    ikä: "30"
};

console.log (henkilö);





// Tehtävä 2: Olio-ominaisuuksien käyttäminen
/*
Käytä ja kirjaa `nimi` ja `ikä` henkilö-oliosta.
*/
// Kirjoita koodisi tähän

let henkilö2 = {
    nimi: "Vladimir",
    ika: "25" }
    
    console.log (henkilö2); 





// Tehtävä 3: Olion ominaisuuksien muokkaaminen
/*
Päivitä `henkilö`-olio: aseta `ikä` arvoon 31. Lisää sitten uusi ominaisuus `maa` asetettuna "Kroatia".
Kirjaa päivitetty olio.
*/
// Kirjoita koodisi tähän


henkilö.ikä = 31;
henkilö.maa = "Krotia";
console.log(henkilö);




// Tehtävä 4: Sisäkkäiset oliot
/*
Luo olio `opiskelija` ominaisuuksilla: `nimi` arvolla "Emilia" ja `tiedot` oliona, jossa ominaisuudet `ikä` asetettuna 22 ja `kurssi` asetettuna "JavaScript".
Kirjaa `opiskelijan` `kurssi`.
Odotettu tulos: "Kurssi: JavaScript"
*/
// Kirjoita olio ja koodisi tähän

let opiskelija = {
    nimi: "Emilia",
    tiedot: {
      ikä: "22",
      kurssi: "JavaScript"
    }
  };
  
  console.log("Kurssi:", opiskelija.tiedot.kurssi);


// Tehtävä 5: Ominaisuuksien poistaminen
/*
Poista `henkilö`-oliosta ominaisuus `ikä`. Kirjaa saatu olio.
Odotettu tulos: { nimi: "Aleksi", maa: "Kroatia" }
*/
// Kirjoita koodisi tähän

delete henkilö.ikä;
console.log (henkilö);


// Tehtävä 6: Olion avaimet ja arvot
/*
Kirjaa kaikki ominaisuuden nimet (avaimet) `henkilö`-oliosta, sitten kirjaa kaikki ominaisuuden arvot.
Odotetut tulokset:
Avaimet: nimi, maa
Arvot: Aleksi, Kroatia
*/
// Kirjoita koodisi tähän



let avaimet = Object.keys(henkilö).join(', ');
let arvot = Object.values(henkilö).join(', ');

console.log("Avaimet:", avaimet);
console.log("Arvot:", arvot);


// Tehtävä 7: Olion metodien käyttäminen
/*
Määritä metodi `tervehdi` sisälle `henkilö`-olioon, joka palauttaa "Hei, nimeni on Aleksi".
Kutsu tätä metodia ja kirjaa tulos.
Odotettu tulos: "Hei, nimeni on Aleksi"
*/
// Muokkaa henkilö-oliota ja kirjoita metodin kutsuminen tähän


let newHenkilö = {
    nimi: "Aleksi",
    tervehdi: function() {
      return "Hei, nimeni on " + this.nimi;
    }
  };
  
  console.log(newHenkilö.tervehdi());


  /*OR*/

  newHenkilö.greet = function() {
    return `Hei, minun nimeni on ${this.name}.`;
  }

  console.log(newHenkilö.greet());