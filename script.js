let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg")
let msg = document.querySelector("#msg")


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = "true";
        checkwinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
    msg.innerText = `congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};


const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                showwinner(pos1Val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);