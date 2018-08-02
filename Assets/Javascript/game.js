  var gameStarted =false;
//   var x = document.getElementById("myAudio"); 
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses =0;
    var guesses = 9;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userGuesses = [];
    var userGuess ="";
    function StartGame()
    {
        var x = document.getElementById("myAudio"); 
      // if(gameStarted)return;
      x.play();
      setGUI();
      gameStarted=true;
    }
    document.onkeyup = function(event) {
      if(!gameStarted)return; 
      userGuess = event.key;
      if(computerChoices.indexOf(userGuess.toLowerCase())>=0) //if index is -1 it't not in the alphabet array and thus not a letter.
      {
        if(userGuesses.indexOf(userGuess)<0)//if index is -1 it hasn't been guessed yet and is a vaild guess
        {
          guesses--;
          userGuesses.push(userGuess);
        }
              
        var ug =computerChoices.indexOf(userGuess.toLowerCase());
        var cg =computerChoices.indexOf(computerGuess);
        if(ug===cg)
        {
          wins++;
          guesses=9;
        userGuesses =[];
        alert("You won! I picked: " + computerGuess) ;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          
             
        }

         
        
      
      if(guesses<1)
      {
        
        losses++; 
        guesses=9;
        userGuesses =[];
        alert("You lost! I picked: " + computerGuess );
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      }
      setGUI();
    }

      
  }
  function setGUI()
  {
    var html =
    "<h1>Can you guess what letter I'm thinking of?</h1>" +
    
          "<h2>You chose: " + userGuesses.join(",") + "</h2>" +
          "<h2>Guesses left: " + guesses + "</h2>" +
          "<h3>Wins: " + wins + "</h3>" +
          "<h3>Losses: " + losses + "</h3>"; //+

        document.querySelector("#game").innerHTML = html;
  }