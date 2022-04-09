'use strict';

let score = 0;
let siteVisitor = prompt('Hey! What is your name?');

alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

function q1() {
  let questionOne = prompt('Do I have a cat?').toLowerCase();
  
  if(questionOne === 'yes' || questionOne === 'y'){
    alert('You are correct!');
    score = score + 1;
  } else if(questionOne === 'no' || questionOne === 'n'){
    //console.log('Sorry, that is the wrong answer);
    alert('Sorry, that is the wrong answer');
  } else {
    //console.log('Better luck next time! Now on to the next question.');
    alert('Better luck next time! Now on to the next question.');
  }
}
q1();

function q2() {
  let questionTwo = prompt('Am I married?').toLowerCase();
  
  if(questionTwo === 'yes' || questionTwo === 'y'){
    alert('You are correct!');
    score = score + 1;
  } else if(questionTwo === 'no' || questionTwo ==='n'){
    alert('Unfortunately you are incorrect.');
  } else {
    alert('Ah. You would be wrong about that one.');
  }
}
q2();

function q3() {
  let questionThree = prompt('Do I live in Olympia, Washington?').toLowerCase();
  
  if(questionThree === 'yes' || questionThree === 'y'){
    alert('Correct! How did you know?');
    score = score + 1;
  } else {
    alert('Wrong answer buddy.');
  }
}
q3();

function q4() {
  let questionFour = prompt('Do I own my house?').toLowerCase();
  
  if(questionFour === 'yes' || questionFour === 'y'){
    alert('You are correct!');
    score = score + 1;
  } else if(questionFour === 'no' || questionFour ==='n'){
    alert('Unfortunately you are incorrect.');
  } else {
    alert('Not sure why you answered that way, but it is incorrect.');
  }
}
q4();

function q5() {
  let questionFive = prompt('Do I like to eat out at restaurants?').toLowerCase();
  
  if(questionFive === 'yes' || questionFive === 'y'){
    alert(`You would be right on that one ${siteVisitor}!`);
    score = score + 1;
  } else if(questionFive === 'no' || questionFive ==='n'){
    alert(`That is incorrect ${siteVisitor}!`);
  } else {
    alert(`I'm not sure I understand your answer, but that is incorrect ${siteVisitor}.`);
  }
}
q5();

//TA David, Guy, Vinny, and Elizabeth helped with q6.

function q6() {
  for(let i = 0; i < 4; i++){
    let age = 34;
    let questionSix = parseInt(prompt('How old am I?'));
    if(questionSix === age){
      alert('You are correct!');
      score = score + 1;
      break;
    } else if((questionSix < age) && (i <= 2)){
      alert('Your answer is too low.');
    } else if((questionSix > age) && (i <= 2)){
      alert('Your answer is too high.');
    } else {
      alert('I\'m sorry. You have run out of turns. The correct answer is 34.');
    }
  }
}
q6();

//Guy and Vinny helped with q7.

function q7() {
  let myArray = ['action', 'comedy', 'action-comedy', 'thriller'];

  for(let i = 0; i < 6; i++){
    let questionSeven = prompt('What is my favorite movie genre?').toLowerCase();
    for(let a = 0; a < myArray.length; a++){
      if(questionSeven === myArray[a]){
        alert('You are correct!');
        i = 6;
        score = score + 1;
      }
    }
  }
  alert(`Some of my favorite movie genres are ${myArray}.`);
}
q7();

alert('Great job! You got ' + score + ' questions correct!');

