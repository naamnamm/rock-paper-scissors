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

function updateScoreBoard(winner) {
    let userScore = document.getElementsByClassName('scoreboard-user')[0];
    let computerScore = document.getElementsByClassName('scoreboard-computer')[0];
    
    //let userCurrentScore = 0; // 
    //let computerCurrentScore = 0;

    if (winner === 'user') {
        userScore.textContent += 1;
    } else if (winner === 'computer') {
        computerScore.textContent += 1;
    }
    
    setTimeout(setToBegining, 3000);
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
        setTimeout(setToBegining, 2000);
    } else if (userChosen_value === 'rock' && computerChosen_value === 'scissors') {
        winner = 'user';
        updateText.textContent = 'user wins';
    } else if (userChosen_value === 'paper' && computerChosen_value === 'rock') {
        winner = 'user';
        updateText.textContent = 'user wins';
    } else if (userChosen_value === 'scissors' && computerChosen_value === 'paper') {
        winner = 'user';
        updateText.textContent = 'user wins';
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
    if (e.target.classList.contains('rock')) {
        userChosen_value = 'rock';
        document.getElementsByClassName('paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('scissors')[0].style.visibility = 'hidden';  
    } else if (e.target.classList.contains('paper')) {
        userChosen_value = 'paper';
        document.getElementsByClassName('rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('scissors')[0].style.visibility = 'hidden';
    } else if (e.target.classList.contains('scissors')) {
        userChosen_value = 'scissors';
        document.getElementsByClassName('rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('paper')[0].style.visibility = 'hidden';
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

    // //do i nees to save this to local storage?
    // let currentScore = [{user: 0}, {computer: 0}];

    // localStorage.setItem('saved-score', JSON.stringify(currentScore))
    // //get current score
    // let savedScore = JSON.parse(localStorage.getItem('saved-score'));
    // log(savedScore);
    // log(savedScore[0]);
    // log(savedScore[0].user);
    // log(typeof(savedScore[0].user));

    // //update current score
    // if (winner === 'user') {
    //     savedScore[0].user += 1;
    // } else {
    //     savedScore[1].computer += 1;
    // }

    // log(savedScore);
    // localStorage.setItem('saved-score', JSON.stringify(savedScore))






