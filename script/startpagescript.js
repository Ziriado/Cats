var matrix = Array(5).fill(null).map(() => Array(5).fill(0));
matrix[0][1] = 90;
matrix[1][3] = 70;
let row = 5;
let collum = 5;
let x = 5;
let y = 0;
let drawcount=0;

const arr = ["O", "Zombie", "Cat", "O", "Cat", "O", "O"];

drawTable();
getButtonsWest();
getButtonsEast();
getButtonsNorth();
getButtonsSouth();
function drawTable() {
    let table = "";
    table += "<table>"
    let arrayLength = arr.length;
    if(drawcount==0){

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < collum; j++) {
                const rndInt = arrayRandom(0, arrayLength - 1)
                table += "<td>" + arr[rndInt] + "</td>"
                
            }
            table += "</tr>"
        }
        table += "</table>"
        document.getElementById("table").innerHTML = table
        drawcount++;
    }
    //console.table(matrix)
    console.log("Value of x: " + x)
    console.log("Value of y: " + y)
}

function arrayRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function West() {
    if(x ==0)
    {
        x
    }
    else
    {

        x--
    }
    console.log(x)
    drawTable()
}
function East() {
    if(x == 4)
    {
        x
    }
    else
    {

        x++
    }
    console.log(x)
    drawTable()
}
function North() {
    if(y==4)
    {
        y
    }
    else
    {
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
    buttonNorth.innerHTML = "<button onclick='North()'>North</button> "
    post.appendChild(buttonNorth)
}
function getButtonsSouth() {
    let post = document.getElementById("south")
    post.innerHTML = ""

    let buttonSouth = document.createElement("button")
    buttonSouth.innerHTML = "<button onclick='South()'>South</button> "
    post.appendChild(buttonSouth)
}
const rndInt = arrayRandom(1, 5)

