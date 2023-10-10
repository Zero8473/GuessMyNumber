'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const setMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No user input
  if(!guess){
    setMessage('No number provided!') ;
    return;

    //On Win
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = String(secretNumber);
    setMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    return;

    //Number too high
  } else if (guess !== secretNumber){
    if(score > 1){
      setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score --;
      document.querySelector('.score').textContent = String(score);
      return;
    }

    setMessage('You lose');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = "rgb(255,0,0)";
  }
})

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.number').textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  setMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = String(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
})