/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisääm  isen jälkeen.
*/


const addButton = document.getElementById('addFruitBtn');
addButton.addEventListener('click', addFruit);

function addFruit() {
    const inputField = document.getElementById('fruitInput');
    const fruitName = inputField.value;

    if (fruitName.trim() !== '') {
        const newListItem = document.createElement('li');
        newListItem.textContent = fruitName;

        const fruitList = document.getElementById('fruitList');
        fruitList.appendChild(newListItem);

        inputField.value = '';
    } else {
        alert('Lisää hedelmän nimi');
    }
}
