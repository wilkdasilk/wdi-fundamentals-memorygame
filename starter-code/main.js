console.log("JS file is connected to HTML! Woo!");

/*var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';*/

/*if (cardTwo === cardFour) {
    alert("You found a match!")
}
else alert("Sorry, try again.");*/


/*var createCards = function() {
    var gameBoard = document.getElementById('game-board');
    for (i=0; i<4; i++) {
        var cardElement = document.createElement('div');
        cardElement.className ='card';
        gameBoard.appendChild(cardElement);
    }
};
createCards();*/




var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardElements = [];

var createBoard = function(){
    
    //latches onto HTML
     var gameBoard = document.getElementById('game-board');
    
    //creates each card and sets it up
     for (var i=0; i<cards.length; i++) {
        
         var cardElement = document.createElement('div');
         cardElement.className ='card';
         
         cardElement.setAttribute('data-card',cards[i]);
         cardElement.addEventListener('click',addImg);
         gameBoard.appendChild(cardElement);
          
          cardElements[i] = cardElement;
//         cardElements[i].setAttribute('data-card', cards[i]);
//         cardElements[i].addEventListener('click', addImg);
       cardElements[i].addEventListener('click', isTwoCards);
                                    
         //defining function, add clicked card to cardsInPlay and triggers our test if we win
         function isTwoCards() {
            cardsInPlay.push(this.getAttribute('data-card'));
            if (cardsInPlay.length === 2) {
                isMatch(cardsInPlay);
                cardsInPlay = [];
                                }
         }; 
         
         //defining function, adds image to clicked card
         function addImg() {
            if (this.getAttribute('data-card') == "king") {
                this.innerHTML = "<img src='king.png' alt='King' />"}
            else {
                this.innerHTML = "<img src='queen.png' alt='queen' />"}
         };
         
         //defining function, tests our cards, gives result and clears board
        var clearBoard = function(){
          for (var i=0; i<cards.length; i++) {
                   cardElements[i].innerHTML = ""
                 }  
        };
         
         var isMatch = function(x) {
             if (x[0] == x[1]) {
                 console.log("It's a match!");
              }
             else {
                  console.log("Sorry, not a match");
             }
             setTimeout(clearBoard(), 2000); 
          };
        };
};

//runs everything
createBoard();


//time delay on clearBoard isn't working 

//using the inspector we know card one is a queen, however it doesn't respond to being clicked
//when you offset the cards so there are only three, the first card still can't be clicked
