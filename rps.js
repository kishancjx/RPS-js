let userInput;
let pcInput;
let userScore=0;
let pcScore=0;
let count=1;
let rpsPressed = false;
let rounds = 0;

const container = document.querySelector(".container");
const img = document.querySelector(".rpsIMG");
const gameBtn = document.querySelector(".gameBtn");


const startButton = document.querySelector(".gameBtn");
const firstPage = document.querySelectorAll(".firstPage");
const gamePage = document.querySelectorAll(".gamePage");
const finalPage = document.querySelector(".finalPage");

const hideFirstPage = function () {firstPage.forEach((element) => element.style.display="none");};
const showFirstPage = function () {firstPage.forEach((element) => element.style.display="block");};
const hideGamePage = function () {gamePage.forEach((element) => element.style.display="none");};
const showGamePage = function () {gamePage.forEach((element) => element.style.display="flex");};
const hideFinalPage = function () {finalPage.style.display="none";};
const showFinalPage = function () {
  finalPage.style.display='flex';
  finalYourScore.textContent=`Your Final Score: ${userScore}`;
  finalPcScore.textContent=`Pc's Final Score: ${pcScore} `;
  identifyWinner();
};


const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");
const userInputBox = document.querySelector('#userInputBox');
const pcInputBox= document.querySelector('#pcInputBox');
const yourScoreText = document.querySelector('.yourScore');
const pcScoreText = document.querySelector('.pcScore');
const roundResults = document.querySelector('.roundResults');
const roundCounter = document.querySelector('#roundCounter');
const finalYourScore= document.querySelector('#finalYourScore');
const finalPcScore= document.querySelector('#finalPcScore');
const finalWinner= document.querySelector('#finalWinner')

function disableRpsButtons()
{
  const rpsButtons= document.querySelectorAll(".rpsButtons");
  rpsButtons.forEach(button=>button.disabled = true);
  rpsPressed = true;
}

function enableRpsButtons()
{
  const rpsButtons= document.querySelectorAll(".rpsButtons");
  rpsButtons.forEach(button=>button.disabled = false);
  rpsPressed = false;
}

function handleRpsButtons(choice,text)
{
  return () => {
    userInput=choice;
    userInputBox.textContent=`You Entered: ${text}`;
    console.log( ` User input: ${userInput}`);
    disableRpsButtons();
    playRound();
  };
}


rock.addEventListener("click",handleRpsButtons("r","Rock"));
paper.addEventListener("click",handleRpsButtons("p","Paper"));
scissors.addEventListener("click",handleRpsButtons("s","Scissors"));



// function getUserInput() {
//   let input = prompt(
//     "Enter Your Choice: R for Rock, P for Paper, S for Scissors"
//   );
//   if (input == null)
//     prompt(
//       "You Input cannot be empty, Please Enter Your Choise: R for Rock, P ;for Paper, S for Scissors"
//     );

//   return input;
// }


function getPcInput() {
  let arr = ["r", "p", "s"];
  let input = arr[Math.floor(Math.random() * arr.length)];
  let text= "";
  if (input=="r")
    text="Rock";
  else if (input=="p")
    text="Paper";
  else 
    text="Scissor";

  console.log( ` Pc input: ${input,text}`);
  return [input,text];
}

function checkRound()
{
  if (count >= rounds)
  { hideGamePage();
    showFinalPage();
    return false;
  }

  else return true;

}

function playRound() {
  
  if (rpsPressed && checkRound()) 
  { 
    [pcInput,text] = getPcInput(); 
    pcInputBox.textContent=`Pc Entered: ${text} `;
    roundCounter.textContent= `Round: ${count}`;
    count++;

    if (userInput == pcInput) {
      // alert("PC also entered the same value, let's try again");
      roundResults.textContent="It's A Draw!!"
      yourScoreText.textContent=`Your Score: ${userScore}`
      pcScoreText.textContent=`Pc Score: ${pcScore}`;
    }

  // User Winning Conditions
    else if (userInput == "r" && pcInput == "s") {
      userScore++;
      roundResults.textContent="You Win this Roun!";
      yourScoreText.textContent=`Your Score: ${userScore}`
      pcScoreText.textContent=`Pc Score: ${pcScore}`
      // alert(
      //   `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
      // );
    }
    else if (userInput == "p" && pcInput == "r") {
      userScore++;
      roundResults.textContent="You Win this Round!"
      yourScoreText.textContent=`Your Score: ${userScore}`
      pcScoreText.textContent=`Pc Score: ${pcScore}`
      // alert(
      //   `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`);
    } 
    else if (userInput == "s" && pcInput == "p") {
      userScore++;
      roundResults.textContent="You Win this Round!"
      yourScoreText.textContent=`Your Score: ${userScore}`
      pcScoreText.textContent=`Pc Score: ${pcScore}`
      // alert(
      //   `You Entered ${userInput} and PC entered ${pcInput}, So you win this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
      // );
    }

  // PC Winning Condtions
    else {
      pcScore++;
      roundResults.textContent="You Lose this Round!"
      yourScoreText.textContent=`Your Score: ${userScore}`
      pcScoreText.textContent=`Pc Score: ${pcScore}`
      // alert(
      //   `You Entered ${userInput} and PC entered ${pcInput}, So you lose this round and your current score is ${userScore} and PC's Current score is ${pcScore}`
      // );
    }

  
  
    enableRpsButtons();
  }
}


function identifyWinner() {
  if (userScore > pcScore)
    finalWinner.textContent = "You Win!"
  else if (userScore < pcScore)
    finalWinner.textContent = "You Lose!"
}

function PlayGame()
{
    rounds=parseInt(prompt("How Much Rounds Do you want to Play?"));
    hideFirstPage();
    hideFinalPage();
    showGamePage();

    roundResults.textContent="Let's See Who wins this Round";
}



function ResetGame()
{
  rounds=0;
  userScore=0;
  pcScore=0;
  count=1;
  roundResults.textContent="Let's See Who wins this Round";
  yourScoreText.textContent=`Your Score: ${userScore}`;
  pcScoreText.textContent=`Pc Score: ${pcScore}`;
  roundCounter.textContent=`Round: ${count}`;
  enableRpsButtons();
  PlayGame();
}










