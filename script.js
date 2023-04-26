"use script";
//selecting elements
const player0El =document.querySelector('.player--0')
const player1El =document.querySelector('.player--1')
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const openModalBtn =document.getElementById('open-modal')
const closeModalBtn =document.querySelector('.exit')
const overlay = document.querySelector('.overlay')
const modal =document.querySelector('.modal')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function(){
   modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


 let currentScore, activePlayers, scores, playing;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const switchPlayer = function(){
  document.getElementById(`current--${activePlayers}`).textContent = 0
  activePlayers = activePlayers === 0 ? 1: 0;
 currentScore = 0
 player0El.classList.toggle('player--active')
 player1El.classList.toggle('player--active')
}

 const reset = function(){
  currentScore = 0
  scores =[0 , 0]
  activePlayers = 0
  playing =true

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
 }
 reset()


btnRoll.addEventListener('click', function () {
  if(playing){
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;

    document.getElementById(`current--${activePlayers}`).textContent =currentScore
  } 
  else {
      switchPlayer()
  }
}
});


btnHold.addEventListener('click',function(){
if(playing){

   scores[activePlayers] += currentScore

   document.getElementById(`score--${activePlayers}`).textContent =scores[activePlayers]


   if(scores[activePlayers]>=100){

    playing = false;
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayers}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayers}`).classList.remove('player--active')
   }
   else{
    switchPlayer()
   }
  }
})



btnNew.addEventListener('click', reset)

openModalBtn.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

