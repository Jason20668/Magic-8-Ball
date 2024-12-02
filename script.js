//Get Username
let userName = prompt('Whats your name?')

let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let Greet = document.getElementById('greeting')


//Put username in website
userName 
? (Greet.innerText=`Hello, ${userName}`)
: (Greet.innerText=`Your name is Jeremiah now hello Jeremiah`)

function shakeMagicConch(){
//Get the question
let userQuestion = prompt('What would you like to ask the conch?')





//DO NOTTA TOUCHA THIS CODE!!!
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
let imageChoice = ''
//All possible answers
switch (randomNumber) {
  case 0:
    imageChoice = 'IMGS/It is Certain.png'
    break;
  case 1:
    imageChoice = 'IMGS/Decidedly.png'
    break;
  case 2:
    imageChoice = 'IMGS/Hazy.png'
    break;
  case 3:
    imageChoice = 'IMGS/Predict.png'
    break;
  case 4:
    eightBall = 'IMGS/Count.png'
    break;
  case 5:
    eightBall = 'IMGS/Sources.png'
    break;
  case 6:
    eightBall = 'IMGS/Outlook.png'
    break;
  case 7:
    eightBall = 'IMGS/Signs.png'
    break;
}
console.log('eightBall')

responseText.innerText =`The almighty magic conch says ${eightBall}!`
responseImg.src = imageChoice
}
