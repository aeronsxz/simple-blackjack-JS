

let cards = []
let sum = 0
let tax = 20
let balance = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function generateGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function startGame() {
    var newPlayer = prompt("Are you a new player?").toLowerCase()
    if (newPlayer === 'yes') {
        let player = {
            name: prompt("Please enter your name"),
            chips:prompt("Please enter a number: ")
        }
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else {
        resetGame()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
                let card = getRandomCard()
                sum += card
                cards.push(card)
                renderGame()  
        }
}

function resetGame() {
    var anotherGame = prompt("Do you want to play again? Yes or No").toLowerCase()
        if (anotherGame === "yes" ) {
            cardsEl.textContent = "Cards: "
            sumEl.textContent = "Sum: "
            playerEl.textContent = ""
        } 
        else {
            cardsEl.textContent = "Cards: "
            sumEl.textContent = "Sum: "
            playerEl.textContent = "Thankyou "+ player.name + " for playing"
            
        }    
}
