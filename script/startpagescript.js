var matrix = Array(5).fill(null).map(() => Array(5).fill(0));
let row = 5;
let collum = 5;
let x = 0;
let y = 4;
let drawcount = 0;
let life = 1;
let savedCats = 0;
const arr = ["O", "Zombie", "Cat", "O", "Cat", "O", "O"];

drawTable();
getButtonsWest();
getButtonsEast();
getButtonsNorth();
getButtonsSouth();
function collisionCats()
{
    if(matrix[y][x]=='Cat')
    {
        savedCats++;
    }
}
function collisionZombie()
{
    if(matrix[y][x]=='Zombie')
    {
        life--;
    }
}
function drawTable() {
    let table = "";
    table += "<table>"
    let arrayLength = arr.length;
    collisionCats();
    collisionZombie();

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < collum; j++) {

            const rndInt = arrayRandom(0, arrayLength - 1)
            let getObject = arr[rndInt]
            if (i == 4 && j == 0 && drawcount == 0) {
                getObject = 'X'
            }
            if (drawcount == 0) {
                table += "<td>" + getObject + "</td>"
                matrix[i][j] = getObject
            }
            if (drawcount >= 1) {
                let drawout = matrix[i][j]
                matrix[y][x] = 'X'
                table += "<td>" + drawout + "</td>"
            }
        }
        table += "</tr>"
    }
    table += "</table>"
    document.getElementById("table").innerHTML = table
    drawcount++;

    console.table(matrix)
    console.log("Value of x: " + x)
    console.log("Value of y: " + y)
    console.log("Saved cats: "+savedCats)
    console.log("Life remaning: "+life)
}

function arrayRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function West() {
    if (x == 0) {
        x
    }
    else {

        x--
    }
    console.log(x)
    drawTable()
}
function East() {
    if (x == 4) {
        x
    }
    else {

        x++
    }
    console.log(x)
    drawTable()
}
function North() {
    if (y == 4) {
        y
    }
    else {
        y++

    }
    console.log(y)
    drawTable()
}
function South() {
    if (y == 0) {
        y;
    }
    else {
        y--

    }
    console.log(y)
    drawTable()
}
function getButtonsEast() {
    let post = document.getElementById("buttons")
    post.innerHTML = ""

    let buttonWest = document.createElement("button")
    buttonWest.innerHTML = "<button onclick='West()'>West</button> "
    post.appendChild(buttonWest)
}
function getButtonsWest() {
    let post = document.getElementById("east")
    post.innerHTML = ""

    let buttonWest = document.createElement("button")
    buttonWest.innerHTML = "<button onclick='East()'>East</button> "
    post.appendChild(buttonWest)
}

function getButtonsNorth() {
    let post = document.getElementById("north")
    post.innerHTML = ""

    let buttonNorth = document.createElement("button")
    buttonNorth.innerHTML = "<button onclick='North()'>South</button> "
    post.appendChild(buttonNorth)
}
function getButtonsSouth() {
    let post = document.getElementById("south")
    post.innerHTML = ""

    let buttonSouth = document.createElement("button")
    buttonSouth.innerHTML = "<button onclick='South()'>North</button> "
    post.appendChild(buttonSouth)
}
const rndInt = arrayRandom(1, 5)

