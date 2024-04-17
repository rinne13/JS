/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */ 

function magic8Ball() {
    let answers = [
        "Kyllä, ehdottomasti.",
        "Ei, sitä en usko.",
        "Luultavasti.",
        "En voi ennustaa nyt.",
        "Kysy uudelleen myöhemmin."
    ];

    magic8Ball.getAnswer = function(question)
    {
      let randomNumber = Math.random();
      let randomAnswer = Math.floor(randomNumber * answers.length);
      let answer = this.answers[randomAnswer];
    
  
      console.log(question);
      console.log(answer);
    };
  
    let onClick = function()
    {

      let question = prompt("Kysy kyllä-tai-ei -kysymys Magic 8-Ballilta:");
      magic8Ball.getAnswer(question);
    };
    
  };