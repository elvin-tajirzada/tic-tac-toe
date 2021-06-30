let tbody = document.getElementById("tbody");

let player1, player2;
let point1 = 0;
let point2 = 0;
let x = "X";
let o = "O";
let count = 1;
let array = [];

Start();

function Start() {
    if(player1 == undefined){
        let first = prompt("Player 1","Player 1");
        player1 = first == "" ? "Player 1" : first;
    }
    if(player2 == undefined){
        let second = prompt("Player 2","Player 2");
        player2 = second == "" ? "Player 2" : second;
    }
    Arr();
    Table();
    scoreShow();
}

function scoreShow() {
    document.getElementById("player").innerHTML = `${player1} : ${point1} - ${player2} : ${point2}`;
}

function scoreCount(par) {
    return par === x ? point1++ : point2++;
}

function Table() {
    let tr = ``;
    for (let i = 0; i < 3; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tr += `<td class="text-center align-middle" onclick="Click(${i},${j});" style="height:75px;">${array[i][j] == undefined ? " " : array[i][j]}</td>`;
        }
        tr += `</tr>`;
    }
    tbody.innerHTML = tr;
}

function Arr() {
    for (let i = 0; i < 3; i++) {
        array[i] = [];
    }
}

function Click(i, j) {
    if (array[i][j] == undefined) {
        if (count % 2 == 0) {
            array[i][j] = o;
        } else {
            array[i][j] = x;
        }
        count++;
        setTimeout(Check, 250);
        Table();
    }
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] != undefined && array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
            Finish(array[i][0]);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (array[0][i] != undefined && array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
            Finish(array[0][i]);
        }
    }
    if (array[0][0] == array[1][1] && array[1][1] == array[2][2] && array[0][0] != undefined) {
        Finish(array[0][0]);
    }
    if (array[2][0] == array[1][1] && array[1][1] == array[0][2] && array[2][0] != undefined) {
        Finish(array[2][0]);
    }
    if (count == 10) {
        count = 1;
        alert("The game is a draw")
        Start();
    }
}

function Win(par) {
    return par === x ? player1 + " won" : player2 + " won"
}

function Finish(par) {
    scoreCount(par);
    scoreShow();
    alert(Win(par));
    count = 1;
    Start();
}