//Get Username
let userName = prompt('Whats your name?')
//Put username in website
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}` : document.getElementById('greeting').innerText=`Your name is Jeremiah now hello Jeremiah`;

function shakeMagicConch(){
//Get the question
let userQuestion = 'What would you like to ask the conch?'
console.log(userQuestion);

//DO NOTTA TOUCHA THIS CODE!!!
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
//All possible answers
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log('eightBall')
}
