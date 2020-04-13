const startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', (e) => {
    let scrollToDiv = document.getElementsByClassName('header-1')[0];
    scrollToDiv.scrollIntoView({
        behavior: 'smooth',
    });
        setTimeout(getUserName, 2000);
    }
)

let userName = 'User';

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
    }   else {
    userNameTitle.innerText = `${userName}`;
    userNameScoreboard.innerText = `${userName}`;
    computerInstruction.innerText = `Computer is ready when ${userName} is`;
    }
    console.log(userName);
    return userName;
}

console.log(userName);


let isGameOver = false;

function userChooseByClick(e) {
    if (isGameOver === true) {
        return;
    }

    let userChosenValue = '';

    if (e.target.classList.contains('rock')) {
        userChosenValue = showRock();
        e.target.classList.remove('rock-hover');
    } else if (e.target.classList.contains('paper')) {
        userChosenValue = showPaper();
        e.target.classList.remove('paper-hover');
    } else if (e.target.classList.contains('scissors')) {
        userChosenValue = showScissors();
        e.target.classList.remove('scissors-hover');
    } else {
        return;
    }

    computerChoose(userChosenValue);

    setTimeout(resetTheGame, 3000);
}

let userChoice = document.getElementById('user-choice');
userChoice.addEventListener('click', userChooseByClick);


function getPageOffsetTop() {
    return window.pageYOffset;
}

window.addEventListener('scroll', getPageOffsetTop);


function userChooseByKeydown(e) {
    let pageOffset = getPageOffsetTop();
    if (pageOffset < 400 || pageOffset > 1050 ) {
        return;
    }

    if (isGameOver === true) {
        return;
    }

    let keycode = e.key;
    let userChosenValue = '';
    
        if (keycode == 0) {
            userChosenValue = showRock();
        } else if (keycode == 5) {
            userChosenValue = showPaper();
        } else if (keycode == 2) {
            userChosenValue = showScissors();
        } else {
            return;
        }

    computerChoose(userChosenValue);

    setTimeout(resetTheGame, 3000);
}

document.body.addEventListener('keydown', userChooseByKeydown);


function computerChoose(userChosenValue) {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let computerChosenValue = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    
    if (computerChosenValue === 'rock') {
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChosenValue = 'paper') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
    } else if (computerChosenValue = 'scissors') {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
    }

    determineWinner(userChosenValue, computerChosenValue);
}


function determineWinner(userChosenValue, computerChosenValue) {
    let winner = '';
    let resultDisplay = document.getElementsByClassName('middle-stage-container')[0];
    resultDisplay.style.opacity = '1'; 

    isGameOver = true;

    let updateText = document.getElementById('result');

    if (userChosenValue === computerChosenValue) {
        updateText.textContent = 'Tie!';
        setTimeout(resetTheGame, 3000);
    } else if (userChosenValue === 'rock' && computerChosenValue === 'scissors') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else if (userChosenValue === 'paper' && computerChosenValue === 'rock') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else if (userChosenValue === 'scissors' && computerChosenValue === 'paper') {
        winner = 'user';
        updateText.textContent = `${userName} wins`;
    } else {
        winner = 'computer';
        updateText.textContent = 'computer wins';
    }  

    updateScoreBoard(winner);
}


let userCurrentScore = 0;
let computerCurrentScore = 0;

function updateScoreBoard(winner) {
    let userScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');
    
    if (winner === 'user')  {
        userCurrentScore++;
        userScore.innerText = formatScore(userCurrentScore);
    } else if (winner === 'computer') {
        computerCurrentScore++;
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
    let userChosenValue = 'rock';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];
    
    rock.style.height = '80px';
    rock.style.width = '80px';

    paper.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden'; 
    
    return userChosenValue;
}

function showPaper() {
    let userChosenValue = 'paper';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];
    
    paper.style.height = '80px';
    paper.style.width = '80px';

    rock.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden'; 
    
    return userChosenValue;
}

function showScissors() {
    let userChosenValue = 'scissors';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];
    
    scissors.style.height = '80px';
    scissors.style.width = '80px';

    rock.style.visibility = 'hidden';
    paper.style.visibility = 'hidden'; 
    
    return userChosenValue;
}


const displayObserver = new IntersectionObserver( (entries) => {
    let displayAlert = document.getElementById('scroll-up-to-play');
	if (entries[0].isIntersecting === false) { 
        displayAlert.innerHTML = '<div id="arrow-up" class="fa fa-angle-double-up"> Scroll up to play! </div> <div id="arrow-up" class="fa fa-angle-double-up"></div>';
    } else {
        displayAlert.innerText = ''
    }
}, { threshold: [0.5] });

displayObserver.observe(document.querySelector(".main-1"));

