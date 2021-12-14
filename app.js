
//first part of js
const game = () =>{
   let pScore=0;
   let cScore=0;

   const startGame = () =>{ //way of writing function ()=>

         const playButton = document.querySelector('.intro button');//selecting the button of intro class div
         const introScreen =document.querySelector('.intro');
          const match = document.querySelector('.match');

          playButton.addEventListener('click',()=>{
            introScreen.classList.add("fadeOut");//adding class which we created in css for fadeout of intro part
            match.classList.add("fadeIn");// adding class for fadein of match part
          });
   };


//play match
const playMatch = () =>{
      const options =document.querySelectorAll('.options button');
      const playerHand =document.querySelector('.player-hand');
      const computerHand =document.querySelector('.computer-hand');
       const hands =document.querySelectorAll(".images img");

    hands.forEach(hand =>{
      hand.addEventListener("animationend",function(){
        this.style.animation="";
      });
    });



      const computerOptions =["rock","paper","scissors"];

      options.forEach(option => {
        option.addEventListener("click",function(){

               const computerNumber =Math.floor(Math.random()*3);
               const computerChoice = computerOptions[computerNumber];


               setTimeout(() => {
       //Here is where we call compare hands
       compareHands(this.textContent ,computerChoice);
                 //here we call compare hands function

                   playerHand.src=`${this.textContent}.png`;
                   computerHand.src=`${computerChoice}.png`;

     }, 2000);


//animation part


playerHand.style.animation ="shakePlayer 2s ease";
computerHand.style.animation ="shakeComputer 2s ease";


        });

      });
};

//updating score
const updateScore = () =>{

         const playerScore =document.querySelector(".player p");
         const computerScore =document.querySelector(".computer p");

         playerScore.textContent =pScore;
         computerScore.textContent =cScore;

};


//comparing hands
const compareHands= ( playerChoice,computerChoice) =>{

   const winner =document.querySelector(".winner");
//if-else statements
     if(playerChoice===computerChoice){
       winner.textContent ="Its a tie!";
       return;// this functionstops here
     }

 // 1st none
   if(playerChoice==="rock"){
     if(computerChoice==="scissors"){
       winner.textContent="Player Wins";
       pScore++;
       updateScore();
       return;
     }else{
       winner.textContent="Computer Wins";
       cScore++;
       updateScore();
       return;
     }
   }
   // 2nd one

   if(playerChoice==="paper"){
     if(computerChoice==="rock"){
       winner.textContent="Player Wins";
        pScore++;
        updateScore();
       return;
     }else{
       winner.textContent="Computer Wins";
       cScore++;
       updateScore();
       return;
     }
   }

//3rd time
      if(playerChoice==="scissors"){
        if(computerChoice==="rock"){
          winner.textContent="Player Wins";
           pScore++;
           updateScore();
          return;
        }else{
          winner.textContent="Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }

};

startGame();
playMatch();

};
game();
