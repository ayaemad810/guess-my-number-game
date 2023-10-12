'use strict'
// document.querySelector('.message').textContent = 'Correct Number ✔';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

let secrtNum = Math.trunc( Math.random() * 20 ) + 1;
  let scoreEle = 20;
  let highScore = 0;
const displayMessage = (message)=>{
 document.querySelector('.message').textContent= message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value );
    // while no input 
    if(!guess){
     displayMessage( '⛔ No Number ✔');
    }
    // correct number 
    else if(guess === secrtNum){
        document.querySelector('.number').textContent = secrtNum;

      displayMessage( 'Correct Number ✔');
       document.querySelector('body').style.backgroundColor = '#60b347';
       document.querySelector('.number').style.width = '30rem';
       if(scoreEle > highScore){
        highScore = scoreEle;
        document.querySelector('.highscore').textContent = highScore;
       }

    }
    else if(guess !== secrtNum){
         if(scoreEle > 1){
            displayMessage( guess > secrtNum ? '📈 Too high!':'📉 Too Low! ') ;
             scoreEle--;
             document.querySelector('.score').textContent = scoreEle  ;
        }
        else{
             displayMessage(' ⚡ You Lost the Game ');
              document.querySelector('.score').textContent = 0  ;

        }
        

    }
    // high number  (refactor this code)
    // else if(guess > secrtNum){
    //     if(scoreEle > 1){
    //          document.querySelector('.message').textContent = '📈 Too high! ';
    //          scoreEle--;
    //          document.querySelector('.score').textContent = scoreEle  ;
    //     }
    //     else{
    //           document.querySelector('.message').textContent = ' ⚡ You Lost the Game ';
    //           document.querySelector('.score').textContent = 0  ;

    //     }
        

    // }
    // else{
    //      if(scoreEle > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low! ';
    //          scoreEle--;
    //          document.querySelector('.score').textContent = scoreEle  ;
    //     }
    //      else{
    //           document.querySelector('.message').textContent = ' ⚡ You Lost the Game ';
    //           document.querySelector('.score').textContent = 0  ;

    //     }
           

    // }
  

})

document.querySelector('.again').addEventListener('click', function(){
    secrtNum = Math.trunc( Math.random() * 20 ) + 1;
    scoreEle = 20;
    displayMessage(' Start guessing...');
    document.querySelector('.score').textContent = scoreEle ;
    document.querySelector('.guess').value= '';
    document.querySelector('.number').textContent= '?'
     document.querySelector('body').style.backgroundColor = '#222';
       document.querySelector('.number').style.width = '15rem'



})