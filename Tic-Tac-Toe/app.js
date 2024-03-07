let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Resetbutton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX, playerO
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 2, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count=0;
    enableboxex();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {  //Player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();
        if (count === 9 && !iswinner) {
            Draw();
        }
    });
});

const Draw = () => {
    msg.innerText = "Game Draw";
    msgContainer.classList.remove("hide");
    disableboxex()
}

const disableboxex = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxex = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxex()
}


const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
