let userInput;
let pcInput;
let userScore=0;
let pcScore=0;
let count=0;


function getUserInput() {
  let input = prompt(
    "Enter Your Choice: R for Rock, P for Paper, S for Scissors"
  );
  if (input == null)
    prompt(
      "You Input cannot be empty, Please Enter Your Choise: R for Rock, P ;for Paper, S for Scissors"
    );

  return input;
}

function getPcInput() {
  let arr = ["r", "p", "s"];
  let input = arr[Math.floor(Math.random() * arr.length)];
  return input;
}

function playRound() {
  userInput = getUserInput();
  pcInput = getPcInput();
  count++;

  if (userInput == pcInput) {
    alert("PC also entered the same value, let's try again");
  }

  // User Winning Conditions
  else if (userInput == "r" && pcInput == "s") {
    userScore++;
    alert(
      `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
    );
  } else if (userInput == "p" && pcInput == "r") {
    userScore++;
    alert(
      `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
    );
  } else if (userInput == "s" && pcInput == "p") {
    userScore++;
    alert(
      `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
    );
  }

  // PC Winning Condtions
  else {
    pcScore++;
    alert(
      `You Entered ${userInput} and PC entered ${pcInput}, So you lose this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
    );
  }
}

function identifyWinner() {
  if (userScore > pcScore)
    alert(
      `You have played ${count} rounds and you have won by scoring ${userScore} / ${count} while PC's Score was ${pcScore} / ${count}`
    );
  else if (userScore < pcScore)
    alert(
      `You have played ${count} rounds and you lose by scoring ${userScore} / ${count} while PC's Score was ${pcScore} / ${count}`
    );
}




function PlayGame()
{
    let rounds=parseInt(prompt("How Much Rounds Do you want to Play?"));
  for(i=0;i<rounds;i++)
  {
    playRound();

  }
  
  identifyWinner();

}








PlayGame();


