'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

let questionOne = prompt('Do I have a cat?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if(questionOne === 'no' || questionOne === 'n'){
  //console.log('Sorry, that is the wrong answer);
  alert('Sorry, that is the wrong answer');
} else {
  //console.log('Better luck next time! Now on to the next question.');
  alert('Better luck next time! Now on to the next question.');
}

let questionTwo = prompt('Am I married?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if(questionTwo === 'no' || questionTwo ==='n'){
  //console.log('Unfortunately you are incorrect.');
  alert('Unfortunately you are incorrect.');
} else {
  //console.log('Ah. You would be wrong about that one.');
  alert('Ah. You would be wrong about that one.');
}

let questionThree = prompt('Do I live in Olympia, Washington?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y'){
  //console.log('Correct! How did you know?');
  alert('Correct! How did you know?');
} else {
  //console.log('Wrong answer buddy.');
  alert('Wrong answer buddy.');
}

let questionFour = prompt('Do I own my house?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if(questionFour === 'no' || questionFour ==='n'){
  //console.log('Unfortunately you are incorrect.');
  alert('Unfortunately you are incorrect.');
} else {
  //console.log('Not sure why you answered that way, but it is incorrect.');
  alert('Not sure why you answered that way, but it is incorrect.');
}

let questionFive = prompt('Do I like to eat out at restaurants?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y'){
  //console.log(`You would be right on that one! Thank you for playing along and learning a little bit about me ${siteVisitor}.`);
  alert(`You would be right on that one! Thank you for playing along and learning a little bit about me ${siteVisitor}.`);
} else if(questionFive === 'no' || questionFive ==='n'){
  //console.log(`That is incorrect. Thank you for playing along and learning a little bit about me ${siteVisitor}!`);
  alert(`That is incorrect. Thank you for playing along and learning a little bit about me ${siteVisitor}!`);
} else {
  //console.log(`I'm not sure I understand your answer, but that is incorrect. Thank you for playing along and learning a little bit about me ${siteVisitor}.`);
  alert(`I'm not sure I understand your answer, but that is incorrect. Thank you for playing along and learning a little bit about me ${siteVisitor}.`);
}
