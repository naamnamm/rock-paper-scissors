const log = console.log

const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', function(e) {
        
        let scrollToDiv = document.getElementsByClassName('header-1')[0];
        scrollToDiv.scrollIntoView({
            behavior: 'smooth',
        });

        setTimeout(getUserName, 2000);
  }
)

let userName = 'User';

function getUserName() {
    let userName = prompt("What's your name?");
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


function determine_winner(userChosenValue, computerChosenValue) {
    //console.log(userChoose_value, computerChoose_value)
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

    determine_winner(userChosenValue, computerChosenValue);
}

//------------------------------------------

function userChooseByClick(e) {
    if (isGameOver === true) {
        return;
    }

    let userChosenValue = '';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    if (e.target.classList.contains('rock')) {
        userChosenValue = 'rock';
        e.target.classList.remove('rock-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        paper.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';  
    } else if (e.target.classList.contains('paper')) {
        userChosenValue = 'paper';
        e.target.classList.remove('paper-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        rock.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';
    } else if (e.target.classList.contains('scissors')) {
        userChosenValue = 'scissors';
        e.target.classList.remove('scissors-hover');
        e.target.style.height = '80px';
        e.target.style.width = '80px';

        rock.style.visibility = 'hidden';
        paper.style.visibility = 'hidden';
    } 
    
    log(userChosenValue);

    computerChoose(userChosenValue);

    setTimeout(resetTheGame, 3000);
}


let userChoice = document.getElementById('user-choice');
    userChoice.addEventListener('click', userChooseByClick);

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

//-------------------------------------------------
// let displayBottom = document.getElementsByClassName('main-2')[0];
// let displayTop = document.getElementsByClassName('header-1')[0];
// let boundingTop = displayTop.getBoundingClientRect();
// let boundingBottom = displayBottom.getBoundingClientRect();
// let scrollTopValue = '';

function getPageOffsetTop() {
    document.getElementById('show-text').innerHTML = window.pageYOffset + 'px';
    //log(window.pageYOffset + 'px');
    scrollTopValue = window.pageYOffset;
    log(scrollTopValue);
    return scrollTopValue;
}

window.addEventListener('scroll', getPageOffsetTop);


function userChooseByKeydown(e) {
    if (isGameOver === true) {
        return;
    }

    let pageOffset = getPageOffsetTop();

    if (pageOffset < 800 || pageOffset > 1185 ) {
        return;
    }

    let keycode = e.key;
    let userChosenValue = '';

    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    if (pageOffset >= 800 && pageOffset <= 1185 ) { //or boundingTop is view
        if (keycode == 0) {
            userChosenValue = 'rock';
            rock.style.height = '80px';
            rock.style.width = '80px';

            paper.style.visibility = 'hidden';
            scissors.style.visibility = 'hidden'; 

        } else if (keycode == 5) {
            userChosenValue = 'paper';
            paper.style.height = '80px';
            paper.style.width = '80px';

            rock.style.visibility = 'hidden';
            scissors.style.visibility = 'hidden'; 
        } else if (keycode == 2) {
            userChosenValue = 'scissors';
            scissors.style.height = '80px';
            scissors.style.width = '80px';

            rock.style.visibility = 'hidden';
            paper.style.visibility = 'hidden'; 
        }
    }

    console.log(userChosenValue);

    computerChoose(userChosenValue);

    setTimeout(resetTheGame, 3000);
}

document.body.addEventListener('keydown', userChooseByKeydown);

//so now I have 

//animate opacity? https://www.youtube.com/watch?v=CxC925yUxSI&t=440s