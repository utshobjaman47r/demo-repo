'use strict';



//selecting  elements 



const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El= document.querySelector('#score--0');

const score1El = document.getElementById('score--1');

// const current0El = document.getElementsByName('current--0');
// const current1El = document.getElementById('current--1')

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');



const diceEl =  document.querySelector(".dice");

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')






score0El.textContent = 0;

score1El.textContent =  0 ;
let playing = true;

diceEl.classList.add("hidden");

const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function(){
     document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;

         activePlayer = activePlayer === 0 ? 1 : 0; // if activeplayer is === 0 then current player is 1 
         // or if no (current player is 1) then active player becomes 0 ;
        //  ? means  if and : means else 
        
       
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}
// rolling dice funtinality 

btnRoll.addEventListener("click",function(){
    if(playing){

   
    const dice =   Math.trunc(Math.random()*6)+1;
    // console.log(dice);
//    display dice 
    diceEl.classList.remove('hidden')
    diceEl.src =(`dice-${dice}.png`)


    if(dice !== 1 ){

        currentScore += dice;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore // it will dymatically 
       // changed the palyer
        // current0El.textContent = currentScore;


    }else{
        // sweeth another player 
       
        switchPlayer()



    }
     }
})

btnHold.addEventListener('click',function(){
    if(playing) {

    


    // console.log("hold button ")
    
    scores [activePlayer] += currentScore;

    console.log(scores [activePlayer])

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {


        playing = false;
             diceEl.classList.add('hidden')

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
    }else{
           switchPlayer();

    }
}
 
})
