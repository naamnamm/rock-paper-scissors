const log = console.log

const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', function(e) {
        window.scrollTo ({
        top: 800,
        behavior: 'smooth',
        });
    
        setTimeout(getUserName, 2000);
  }
)

window.addEventListener('scroll', function() {
    document.getElementById('show-text').innerHTML = window.pageYOffset + 'px';
    log(window.pageYOffset + 'px');
  });

//if scroll down to the game > prompt user

let userName = 'user';

function getUserName() {
    userName = prompt("What's your name?");
    let userNameTitle = document.getElementById('user-name-title');
    let userNameScoreboard = document.getElementById('user-name-scoreboard');

    if (userName == null || userName.length == 0) {
    userName = 'User'
    userNameTitle.innerText = 'User'; 
    userNameScoreboard.innerText = 'User';
    }   else {
    userNameTitle.innerText = `${userName}`;
    userNameScoreboard.innerText = `${userName}`;
    }
}


let isGameOver = false;

let userCurrentScore = 0;
let computerCurrentScore = 0;

function updateScoreBoard(winner) {
    let userScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');
    
    if (winner === 'user')  {
        userCurrentScore += 1;
        userScore.innerText = formatScore(userCurrentScore);
    } else if (winner === 'computer') {
        computerCurrentScore += 1;
        computerScore.innerText = formatScore(computerCurrentScore);
    }
}

function formatScore(userCurrentScore, computerCurrentScore) {
    if (userCurrentScore < 10) {
        return '0' + userCurrentScore;
    } 
    if (computerCurrentScore < 10) {
        return '0' + computerCurrentScore;
    } else {
        return computerCurrentScore, userCurrentScore; 
    }
}


function determine_winner(userChosen_value, computerChosen_value) {
    //console.log(userChoose_value, computerChoose_value)
    let winner = '';
    let resultDisplay = document.getElementsByClassName('middle-stage-container')[0];
    resultDisplay.style.opacity = '1'; 

    isGameOver = true;

    let updateText = document.getElementById('result');
    //if tie, reload the page
    if (userChosen_value === computerChosen_value) {
        updateText.textContent = 'Tie!';
        setTimeout(resetTheGame, 3000);
    } else if (userChosen_value === 'rock' && computerChosen_value === 'scissors') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else if (userChosen_value === 'paper' && computerChosen_value === 'rock') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else if (userChosen_value === 'scissors' && computerChosen_value === 'paper') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else {
        winner = 'computer';
        updateText.textContent = 'computer wins';
    }  

    updateScoreBoard(winner);
}

function computerChoose(userChosen_value) {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let computerChosen_value = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

    if (computerChosen_value === 'rock') {
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChosen_value = 'paper') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChosen_value = 'scissors') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
    }

    determine_winner(userChosen_value, computerChosen_value);
}

//------------------------------------------
//User Choice

function userChoose(e) {
    if (isGameOver === true) {
        return;
    }
    
    let userChosen_value = '';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    if (e.target.classList.contains('rock')) {
        userChosen_value = 'rock';
        e.target.classList.remove('rock-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        paper.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';  
    } else if (e.target.classList.contains('paper')) {
        userChosen_value = 'paper';
        e.target.classList.remove('paper-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        rock.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';
    } else if (e.target.classList.contains('scissors')) {
        userChosen_value = 'scissors';
        e.target.classList.remove('scissors-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        rock.style.visibility = 'hidden';
        paper.style.visibility = 'hidden';
    } 
    
    computerChoose(userChosen_value);

    setTimeout(resetTheGame, 3000);
}

let userChoice = document.getElementById('user-choice');
userChoice.addEventListener('click', userChoose);


//--------------------------------------------

function resetTheGame() {
    isGameOver = false;
    
    let resultDisplay = document.getElementsByClassName('middle-stage-container')[0];
    resultDisplay.style.opacity = '0';

    let rock = document.getElementsByClassName('rock')[0];
    rock.style.visibility = '';
    rock.style.height = '60px';
    rock.style.width = '60px';
    rock.className = 'rock rock-hover';

    let paper = document.getElementsByClassName('paper')[0];
    paper.style.visibility = ''; 
    paper.style.height = '60px';
    paper.style.width = '60px';
    paper.className = 'paper paper-hover';

    let scissors = document.getElementsByClassName('scissors')[0];
    scissors.style.visibility = '';
    scissors.style.height = '60px';
    scissors.style.width = '60px';
    scissors.className = 'scissors scissors-hover';

    document.getElementsByClassName('computer-rock')[0].style.visibility = '';
    document.getElementsByClassName('computer-paper')[0].style.visibility = '';
    document.getElementsByClassName('computer-scissors')[0].style.visibility = '';
}

//animate opacity? https://www.youtube.com/watch?v=CxC925yUxSI&t=440s

function resetScore() {
    userCurrentScore = 0;
    computerCurrentScore = 0;
    let userScore = document.getElementById('user-score');
    userScore.innerText = '00';
    let computerScore = document.getElementById('computer-score');
    computerScore.innerText = '00';
}

let resetScoreButton = document.getElementById('reset-score')
resetScoreButton.addEventListener('click', resetScore);




