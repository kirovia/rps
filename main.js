var computerChoice = 'Computer is choosing...';
var tie = 'Tie game!';
var win = 'You win!';
var lose = 'Computer wins!';

/* Computer player's choice */
const getComputerChoice = () => {
  var computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice === 0) {
    return 'rock';
  } else if(computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  };
};

/* Player chooses rock */
const playerChoosesRock = () => {
  if(getComputerChoice() === 'rock') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-rock fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = tie}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '<i class="fa fa-hand-rock fa-5x"></i>'}, 2000);
  } else if(getComputerChoice() === 'paper') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-rock fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = lose}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-paper fa-5x"></i>'}, 2000);
  } else {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-rock fa-5x"></i>';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>';
    setTimeout(function() {document.getElementById('result').innerHTML = win}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-scissors fa-5x"></i>'}, 2000);
  }
};

/* Player chooses paper */
const playerChoosesPaper = () => {
  if(getComputerChoice() === 'paper') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-paper fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = tie}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '<i class="fa fa-hand-paper fa-5x"></i>'}, 2000);
  } else if(getComputerChoice() === 'rock') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-paper fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = win}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-rock fa-5x"></i>'}, 2000);
  } else {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-paper fa-5x"></i>';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>';
    setTimeout(function() {document.getElementById('result').innerHTML = lose}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-scissors fa-5x"></i>'}, 2000);
  }
};

/* Player chooses scissors */
const playerChoosesScissors = () => {
  if(getComputerChoice() === 'scissors') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-scissors fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = tie}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '<i class="fa fa-hand-scissors fa-5x"></i>'}, 2000);
  } else if(getComputerChoice() === 'rock') {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-scissors fa-5x">';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>'
    setTimeout(function() {document.getElementById('result').innerHTML = lose}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-rock fa-5x"></i>'}, 2000);
  } else {
    document.getElementById('result').innerHTML = computerChoice;
    document.getElementById('your-choice').innerHTML = '<i class="fa fa-hand-scissors fa-5x"></i>';
    document.getElementById('computer-choice').innerHTML = '<img src="load.gif" alt="loading"/>';
    setTimeout(function() {document.getElementById('result').innerHTML = win}, 2000);
    setTimeout(function() {document.getElementById('computer-choice').innerHTML = '</i><i class="fa fa-hand-paper fa-5x"></i>'}, 2000);
  }
};
