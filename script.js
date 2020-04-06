//1.prompt user for their name and change username
//let username = prompt('What's your name?)
////grab user 
// user.innertext = username
//if (username.length < 1) > prevent default

//2. once user choose > the other 2 choice disappear 
//    -eventlistenclick
//2. random function runs for computer after user choose
// and decide who wins 

//3. scoreboard update the score

const log = console.log

const userName = prompt("What's your name?");

let userNameTitle = document.getElementById('user-name-title');
let userNameScoreboard = document.getElementById('user-name-scoreboard');

if (userName == null || userName.length == 0) {
    userNameTitle.innerText = 'User'; 
    userNameScoreboard.innerText = 'User';
}   else {
    userNameTitle.innerText = `${userName}`;
    userNameScoreboard.innerText = `${userName}`;
}

const isGameOver = false;

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

    //log(currentScore);
    
    setTimeout(setToBegining, 3000);
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

    let updateText = document.getElementById('result');
    //if tie, reload the page
    if (userChosen_value === computerChosen_value) {
        updateText.textContent = 'Tie!';
        setTimeout(setToBegining, 2500);
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
    let userChosen_value = '';
    let rock = document.getElementsByClassName('rock')[0];
    let paper = document.getElementsByClassName('paper')[0];
    let scissors = document.getElementsByClassName('scissors')[0];

    if (e.target.classList.contains('rock')) {
        userChosen_value = 'rock';
        paper.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';  
    } else if (e.target.classList.contains('paper')) {
        userChosen_value = 'paper';
        rock.style.visibility = 'hidden';
        scissors.style.visibility = 'hidden';
    } else if (e.target.classList.contains('scissors')) {
        userChosen_value = 'scissors';
        rock.style.visibility = 'hidden';
        paper.style.visibility = 'hidden';
    } 
    
    computerChoose(userChosen_value);
}

let userChoice = document.getElementById('user-choice');
userChoice.addEventListener('click', userChoose);

//--------------------------------------------

function setToBegining() {
    let resultDisplay = document.getElementsByClassName('middle-stage-container')[0];
    resultDisplay.style.opacity = '0';
    document.getElementsByClassName('rock')[0].style.visibility = '';
    document.getElementsByClassName('paper')[0].style.visibility = ''; 
    document.getElementsByClassName('scissors')[0].style.visibility = '';
    document.getElementsByClassName('computer-rock')[0].style.visibility = '';
    document.getElementsByClassName('computer-paper')[0].style.visibility = '';
    document.getElementsByClassName('computer-scissors')[0].style.visibility = '';
}

//animate opacity? https://www.youtube.com/watch?v=CxC925yUxSI&t=440s








