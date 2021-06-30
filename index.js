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
    player1 = player1 == undefined ? prompt("Player 1") : player1;
    player2 = player2 == undefined ? prompt("Player 2") : player2;
    Arr();
    Table();
    scoreShow();
}

function scoreShow() {
    document.getElementById("player").innerHTML = `${player1} : ${point1} - ${player2} : ${point2}`;
}
function scoreCount(par) {
    return par == x ? point1++ : point2++;
}


function Table() {
    let tr = ``;
    for (let i = 0; i < 3; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tr += `<td class="text-center align-middle" id="show${i}${j}" onclick="Click(${i},${j})" style="height:75px;">${array[i][j] == undefined ? " " : array[i][j]}</td>`;
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
    }
    count++;
    Table();
    setTimeout(Check, 250);
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] != undefined && array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
            Finish(array[1][0]);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (array[0][i] != undefined && array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
            Finish(array[0][1]);
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
        alert("Oyun berabere bitdi")
        Start();
    }
}

function Win(check) {
    return check == x ? "Qazandiniz " + player1 : "Qazandiniz " + player2
}

function Finish(par) {
    scoreCount(par);
    scoreShow();
    alert(Win(par));
    count = 1;
    Start();
}