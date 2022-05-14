// DOM Variables
let startBtn = document.getElementById('start-btn');
let messageEl = document.getElementById('message');
let sumEl = document.getElementById('sum');
let cardsEl = document.getElementById('cards');
let cardsBtn = document.getElementById('new-cards-btn');

// Initial Variables
let cards = [];
let sum = 0;
let isAlive = false;
let hasAblackjack = false;
//let message; 
//console.log(firstCard, secondCard)

//generating random numbers for cards
function generateRandomCards(){
    let randomNumber = Math.floor(Math.random()*13  + 1);
    if (randomNumber === 1){
        randomNumber = 11;
    }else if( randomNumber >= 11){
        randomNumber = 10;
        
    }else{
        return randomNumber
    }
    return randomNumber;
}


// starting our blackjack
function startGame(){
    isAlive = true;
    let firstCard = generateRandomCards(); 
    let secondCard = generateRandomCards();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

// function to render our game
function renderGame(){
    cardsEl.textContent ="Cards: ";
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ", ";  
    };
    
    sumEl.textContent = `Sum: ${sum}`;
    if(sum < 21){
    messageEl.textContent = "Do you want to draw a new card? 🙂";
    }else if( sum === 21){
        messageEl.textContent = "Wohoo! You've got Blackjack! 🥳";
        hasAblackjack = true  
    }else{
        messageEl.textContent = "You're out of the game! 😭";
        isAlive = false;    
    }
    
}

//function to get new cards
function getNewCards(){
    let newCard = generateRandomCards();    
    sum += newCard;
    if(isAlive === true && hasAblackjack === false){   
    cards.push(newCard)
    renderGame();
    }else if(isAlive === true && hasAblackjack === true){
        cards.push(newCard)
        renderGame()
    }  
}

//event listeners
startBtn.addEventListener('click', startGame);
//console.log(sum)
cardsBtn.addEventListener('click', getNewCards);
