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

//computer choice
let max = 3;
let min = 1;
let computer_random = Math.floor(Math.random(1) * (max-min+1) + min);
log(computer_random);

// let rock = 1;
// let paper = 2;
// let scissors = 3;

function computerChoose() {
    let computerChoose_value = '';
    if (computer_random == 1) {
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
        computerChoose_value = 'rock';
    } else if (computer_random == 2) {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-scissors')[0].style.visibility = 'hidden';
        computerChoose_value = 'paper';
    } else if (computer_random == 3) {
        document.getElementsByClassName('computer-rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('computer-paper')[0].style.visibility = 'hidden';
        computerChoose_value = 'scissors';
    }

    //return computerChoose_value;
    log(computerChoose_value);
};


//log(computerChoose());
//------------------------------------------
//User Choice
//function
function userChoose(e) {
    let userChoose_value = '';
    if (e.target.classList.contains('rock')) {
        document.getElementsByClassName('paper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('scissors')[0].style.visibility = 'hidden';
        userChoose_value = 'rock';
    } else if (e.target.classList.contains('paper')) {
        document.getElementsByClassName('rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('scissors')[0].style.visibility = 'hidden';
        userChoose_value = 'paper';
    } else if (e.target.classList.contains('scissors')) {
        document.getElementsByClassName('rock')[0].style.visibility = 'hidden';
        document.getElementsByClassName('paper')[0].style.visibility = 'hidden';
        userChoose_value = 'scissors';
    } 
    log(userChoose_value);

    setTimeout(computerChoose, 0)
}

//addevent
let user_choice = document.getElementById('user-choice');
user_choice.addEventListener('click', userChoose);
//--------------------------------------------

//decide who wins

// function determine_winner() {
//     if (userChoose)

// } 

// if (userChoose_value === 'rock' && computerChoose_value === 'paper') {
//     log('user lose')
// }   else if (userChoose_value === 'rock' && computerChoose_value === 'scissors') {
//     log('user win')
// }   else if (userChoose_value === 'paper' && computerChoose_value === 'rock') {
//     log('user win')
// }   else if (userChoose_value === 'paper' && computerChoose_value === 'scissors') {
//     log('user lose')
// }   else if (userChoose_value === 'scissors' && computerChoose_value === 'rock') {
//     log('user lose')
// }   else if (userChoose_value === 'scissors' && computerChoose_value === 'paper') {
//     log('user win')
// }   else {
//     log('tie');
// }






