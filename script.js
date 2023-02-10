let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Use shorthand return
const generateTarget = () => Math.floor(Math.random() * 10)

// Use shorthand return and use comparison logic to return true/false
const compareGuesses = (human, computer, target) => 
  Math.abs(human - target) <= Math.abs(computer - target)

// Use argument shorthand and {} to keep the return as undefined
const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++
}

//Use {} to keep return as undefined
const advanceRound = () => {currentRoundNumber++}


