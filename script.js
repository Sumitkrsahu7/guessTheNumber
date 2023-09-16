'use strict'
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct number'

document.querySelector('.number').textContent = 10
document.querySelector('.score').textContent = 17


document.querySelector('.guess').value = 34
console.log(document.querySelector('.guess').value)

*/

let s = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;


let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        // document.querySelector('.message').textContent = '😶 No number'
        displayMessage('😶 No number')
    }

    else if (guess === s) {
        // document.querySelector('.message').textContent = 'Correct number'
        displayMessage('Correct number')
        document.querySelector('.number').textContent = s
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = "134px";
        if(score>highScore){
            highScore = score
            document.querySelector('.highscore').textContent=highScore;
        }
    }

    else if(guess !== s){
        if (score > 1) {
            document.querySelector('.message').textContent = guess > s? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            // document.querySelector('.message').textContent = 'You lost the game'
            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0
        }

    }


    // else if (guess > s) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game'
    //         document.querySelector('.score').textContent = 0
    //     }

    // }
    // else if (guess < s) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game'
    //         document.querySelector('.score').textContent = 0
    //     }

    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    s = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = 'rgba(255, 255, 0, 0.311)';

    document.querySelector('.number').style.width = "99px"
})