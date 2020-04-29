let userName = 'User';
let isGameOver = false;
let userCurrentScore = 0;
let computerCurrentScore = 0;

let resetScoreButton = document.getElementById('reset-score')
resetScoreButton.addEventListener('click', resetScore);

let userChoice = document.getElementById('user-choice');
userChoice.addEventListener('click', userChooseByClick);

window.addEventListener('scroll', getPageOffsetTop);

document.body.addEventListener('keydown', userChooseByKeydown);


const startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', (e) => {
    let scrollToDiv = document.getElementsByClassName('header-1')[0];
    scrollToDiv.scrollIntoView({
        behavior: 'smooth',
    });

    getUserName();
});


function getUserName() {
    userName = prompt("Are you ready to play? Please enter your name")
    let userNameTitle = document.getElementById('user-name-title');
    let userNameScoreboard = document.getElementById('user-name-scoreboard');
    let computerInstruction = document.getElementById('computer-text');

    if (userName == null || userName.length == 0) {
        userName = 'User'
        userNameTitle.innerText = 'User';
        userNameScoreboard.innerText = 'User';
        computerInstruction.innerText = 'Computer is ready when user is';
    } else {
        userNameTitle.innerText = `${userName}`;
        userNameScoreboard.innerText = `${userName}`;
        computerInstruction.innerText = `Computer is ready when ${userName} is`;
    }
}


//get rock paper scissors value
function userChooseByClick(e) {
    userChoose(e.target.id);
}


//pass in 'rock paper or scissors'
//get computer random
//determine winner
//reset the game
function userChoose(userChoice) { 
    if (isGameOver === true) {
        return;
    }

    if (userChoice === 'rock') {
        showRock();
    } 
    
    if (userChoice === 'paper') {
        showPaper();
    } 
    
    if (userChoice === 'scissors') {
        showScissors();
    } 

    let computerChoice = getRandomComputerChoice(); // return rock, paper, scissors
    let result = determineWinner(userChoice, computerChoice); // return tie, win, lose
    displayResult(result); // just for display purpose
    updateScoreBoard(result);

    setTimeout(resetTheGame, 3000);
    
}

//get rock paper scissors value
function userChooseByKeydown(e) {
    let pageOffset = getPageOffsetTop();
    if (pageOffset < 400 || pageOffset > 1050) {
        return;
    }

    let keycode = e.key;

    if (keycode == 0) {
        userChoose('rock');
    } 

    if (keycode == 5) {
        userChoose('paper');
    } 

    if (keycode == 2) {
        userChoose('scissors');
    }
}


function getPageOffsetTop() {
    return window.pageYOffset;
}


//get random choice
function getRandomComputerChoice() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];

    displayComputerChoice(computerChoice);

    return computerChoice;
}

//display computer choice
function displayComputerChoice(computerChoice) {
    if (computerChoice === 'rock') {
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChoice = 'paper') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChoice = 'scissors') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
    }
}

//determine who won (user or computer)
function determineWinner(userChoice, computerChoice) {
    isGameOver = true;

    if (userChoice === computerChoice) {
        return 'tie';
    } 
    
    let rockBeatsScissors = userChoice === 'rock' && computerChoice === 'scissors';
    let paperBeatsRock = userChoice === 'paper' && computerChoice === 'rock';
    let scissorsBeatsPaper = userChoice === 'scissors' && computerChoice === 'paper';

    if ( rockBeatsScissors || paperBeatsRock || scissorsBeatsPaper) {
        return 'win';  
    } else {
        return 'lose';
    }
}

function displayResult(result) {
    let resultDisplay = document.getElementsByClassName('middle-stage-container')[0];
    resultDisplay.style.opacity = '1';

    let updateText = document.getElementById('result');

    if (result === 'tie') {
        updateText.textContent = 'Tie!';
    } 
    
    if (result === 'win') {
        updateText.textContent = `${userName} wins`;
    } 
    
    if (result === 'lose') {
        updateText.textContent = 'computer wins';
    }
}


function updateScoreBoard(result) {
    let userScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');

    if (result === 'win') {
        userCurrentScore++;
        userScore.innerText = formatScore(userCurrentScore);
    } 
    
    if (result === 'lose') {
        computerCurrentScore++;
        computerScore.innerText = formatScore(computerCurrentScore);
    }
}


function formatScore(score) {
    return (score < 10 ? '0' + score : score); 
}


function resetScore() {
    userCurrentScore = 0;
    computerCurrentScore = 0;

    let userScore = document.getElementById('user-score');
    userScore.innerText = '00';

    let computerScore = document.getElementById('computer-score');
    computerScore.innerText = '00';
}


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


function showRock() {
    let userChoice = 'rock';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    rock.style.height = '80px';
    rock.style.width = '80px';
    rock.classList.remove('rock-hover');

    paper.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden';

    return userChoice;
}

function showPaper() {
    let userChoice = 'paper';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    paper.style.height = '80px';
    paper.style.width = '80px';
    paper.classList.remove('paper-hover');

    rock.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden';

    return userChoice;
}

function showScissors() {
    let userChoice = 'scissors';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    scissors.style.height = '80px';
    scissors.style.width = '80px';
    scissors.classList.remove('scissors-hover');

    rock.style.visibility = 'hidden';
    paper.style.visibility = 'hidden';

    return userChoice;
}


const displayObserver = new IntersectionObserver((entries) => {
    let displayAlert = document.getElementById('scroll-up-to-play');
    if (entries[0].isIntersecting === false) {
        displayAlert.innerHTML = '<div id="arrow-up" class="fa fa-angle-double-up"> Scroll up to play! </div> <div id="arrow-up" class="fa fa-angle-double-up"></div>';
    } else {
        displayAlert.innerText = ''
    }
}, { threshold: [0.5] });

displayObserver.observe(document.querySelector(".main-1"));

