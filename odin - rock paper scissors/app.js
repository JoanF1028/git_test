function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function selection(move) {
  let result;
  if (move === 1) {
    result = "rock";
  } else if (move === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}
function playGame(playerSelect, computerSelect) {
  if (
    (playerSelect === 1 && computerSelect === 3) ||
    (playerSelect === 2 && computerSelect === 1) ||
    (playerSelect === 3 && computerSelect === 2)
  ) {
    console.log("you win");
  } else if (playerSelect === computerSelect) {
    console.log("tie");
  } else {
    console.log("computer wins");
  }
}
let computer = getComputerChoice(1, 3);
let player = parseFloat(
  prompt("choose 1 for rock, 2 for paper or 3 for scissors")
);
console.log("you chose " + selection(player));
console.log("the computer chose " + selection(computer));
playGame(player, computer);