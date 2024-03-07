let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText="Game was Draw, Play Again"
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! Yours ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats Yours ${userChoice}`
        msg.style.backgroundColor ="Red";
    }
};
const playGame = (userChoice) => {
    const compChoice = gencompchoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "Rock") {
            userwin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userwin = compChoice === "Scissors" ? false : true;
        } else {
            userwin = compChoice === "Rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});