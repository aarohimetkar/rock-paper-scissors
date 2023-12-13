let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreP = document.querySelector('#user-score');
const compScoreP = document.querySelector('#comp-score');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScoreP.innerText = userScore;
        console.log("User Wins!");
        msg.innerText = "User Wins!";
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScoreP.innerText = compScore;
        console.log("Computer Wins!");
        msg.innerText = "Computer Wins!";
        msg.style.backgroundColor = 'red';
    }
};

const playGame = (userChoice) => {
    console.log('User choice:', userChoice);
    const compChoice = genCompChoice();
    console.log('Computer Choice:', compChoice);

    if(userChoice === compChoice) {
        console.log("It's a draw!");
        msg.innerText = "It's a draw!";
        msg.style.backgroundColor = 'black';
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice == 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
};