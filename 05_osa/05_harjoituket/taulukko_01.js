// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:

teamMembers.forEach((name) => {
    console.log(name);
  });

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:

teamMembers.shift (); 
console.log(teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:

teamMembers.pop();
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:

teamMembers.unshift('Aleksi');
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:

teamMembers.push('Linda');
console.log(teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:

const newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

let index = newTeamMembers.indexOf('Miikka')
console.log(index);

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

let newIndex = newTeamMembers.indexOf('Jaakko')
console.log(newIndex);

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
newTeamMembers.splice(0, 1, 'Karoliina', 'Bettina');
console.log(newTeamMembers);


// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

newTeamMembers.push('Hemmo')
let newTeamMembers2 = newTeamMembers;
console.log(newTeamMembers2);


// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:


let copiedTeamMembers = newTeamMembers2.slice();
console.log(copiedTeamMembers);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:

let combinedTeamMembers = copiedTeamMembers.concat(newMembers);
console.log(combinedTeamMembers);


// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:



let indexOfJukka = teamMembers.indexOf("Jukka");
console.log(indexOfJukka);

let amount = 0;
for (const name of teamMembers) {
  if (name === 'Jukka') {
    amount++;
  }
}
console.log(`Tässä on ${amount} Jukan nimeä`);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

let uppercaseTeamMembers = teamMembers.map((member) => member.toUpperCase());
console.log(uppercaseTeamMembers);

