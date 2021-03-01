
var usersChoice = prompt("How many rounds do you want to play (enter a number)");
 
var rockPaperScissors = function(rounds) {
    rounds = rounds || 3;
    var outcomes = [];
    var plays = ['rock', 'paper', 'scissors'];
    var getOutcomes = function(playedSoFar, roundsLeft) {    
      if (roundsLeft === 0) {
        outcomes.push(playedSoFar);
      }
      else {
        for (var i = 0; i < plays.length; i++) {
          getOutcomes(playedSoFar.concat(plays[i]), roundsLeft-1);
        }
      }
    };
    getOutcomes([], rounds);
    return outcomes;
  };

  var choice1Score = 1;
  var choice2Score = 1;
  
  function compChoice() {
    var choiceArr = ["r", "p" , "s" ]; 
    var random = choiceArr[Math.floor(Math.random() * 3)];
      return random;
  }


  function userChoice(){
      var userInput = prompt("Please enter your choice of either rock, paper or scissors(enter r,p, or s) . To exit, hit the 'Cancel' button.");
   
      if (userInput == null) return null;
      
      return userInput.toLowerCase();
  }
  
  function scoring(choice1, choice2) {
      if (choice1 === choice2) {
          return "The result is a tie.";
      } if (choice1 === "r") {
          if (choice2 === "s") {
              return "You win! You picked rock which beats scissors. Your score is: " + choice1Score++;
          } else {
              return "You lose! The computer picked paper which beats rock . The computer's score is: " + choice2Score++;
          }
      } if (choice1 === "p") {
          if (choice2 === "r") {
              return "You win! You picked paper which beats rock. Your score is: " + choice1Score++;
          } else {
              return "You lose! The computer picked scissors which beats paper. The computer's score is: " + choice2Score++;
          }
      } if (choice1 === "s") {
          if (choice2 === "p") {
              return "You win! You picked scissors which beats paper. Your score is: " + choice1Score++;
          } else {
              return "You lose! The computer picked rock which beats scissors. The computer's score is: " + choice2Score++;
          }
      }
  }
  
   
   while (true) {
    
  
    var curUserChoice = userChoice();
    
    if (curUserChoice == null) break;
    
    alert(scoring(curUserChoice, compChoice()));

      
      alert
 //}
//}

    


document.write( "You won" + curUserChoice + "times" + "You lost" + compChoice + "times")

// document.write(results);
   }
