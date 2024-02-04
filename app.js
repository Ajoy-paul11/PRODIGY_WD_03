let boxes = document.querySelectorAll('.btn');
let msg = document.querySelector('.win-msg')
let hide = document.querySelector('.hide')

let playerX = true;
let winningPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("button is clicked");
        if (playerX) {
            box.innerText = "X";
            playerX = false;
        } else {
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true
        checkWinner();
    })
})

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const callWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`
    hide.style.display = 'block';
}
const checkWinner = () => {
    for (let pattern of winningPattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner");
                disabledboxes()
                callWinner(pos1val)
            }
        }
    }
}
