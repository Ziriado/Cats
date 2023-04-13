var matrix = Array(5).fill(null).map(() => Array(5).fill(0));
let row = 5;
let collum = 5;
let x = 0;
let y = 4;
let drawcount = 0;
let life = 1;
let savedCats = 0;
let zombieX=3;
let zombieY=3;
let drawXvalue=0;
const arr = ["O", "O", "Cat", "O", "Cat", "O", "O"];

drawTable();
getButtonsWest();
getButtonsEast();
getButtonsNorth();
getButtonsSouth();
displayLife();
displaySavedCats();

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
            if(i==3 && j==3 && drawcount == 0)
            {
                getObject='Zombie'
            }
            if (drawcount == 0) {
                table += "<td>" + getObject + "</td>"
                matrix[i][j] = getObject
                
            }
    
            if (drawcount >= 1) {
               
                matrix[y][x] = 'X'
                if(drawXvalue==1)
                {
                    matrix[y][x+1]='O'
                }
                if(drawXvalue==2)
                {
                    matrix[y][x-1]='O'
                }
                if(drawXvalue==3)
                {
                    matrix[y-1][x]='O'
                }
                if(drawXvalue==4)
                {
                    matrix[y+1][x]='O'
                }
                let drawout = matrix[i][j]          
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
    displayLife();
    displaySavedCats();
    
}
function displayLife()
{
    document.getElementById("health").innerHTML="Remaning life:"+life
}

function displaySavedCats()
{
    document.getElementById("cats").innerHTML="Saved cats: "+ savedCats
}

function arrayRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function West() {
    if (x > 0)
    {
        x--
        drawXvalue=1;
    }
    console.log(x)
    zombieMovment()
    drawTable()
}
function East() {
    if (x == 4) {
        x
    }
    else {

        x++
        drawXvalue=2;
    }
    console.log(x)
    zombieMovment()
    drawTable()
}
function North() {
    if (y == 4) {
        y
    }
    else {
        y++
        drawXvalue=3;

    }
    console.log(y)
    zombieMovment()
    drawTable()
}
function South() {
    if (y == 0) {
        y;
    }
    else {
        y--
        drawXvalue=4;
    }
    console.log(y)
    zombieMovment()
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

function zombieMovment ()
{
   // const rndMove=arrayRandom(1,30)
   const rndMove=arrayRandom(1,4)
    console.log("Value for movment zombie: "+rndMove)
    if(rndMove==1)
    {
        if(zombieX<4)
        {
            zombieX++;
            matrix[zombieX][zombieY]='Zombie'
            matrix[zombieX-1][zombieY]='O'
        }    
    }
    if(rndMove==2)
    {
        if(zombieX > 0)
        {
            zombieX--;
            matrix[zombieX][zombieY]='Zombie'
            matrix[zombieX+1][zombieY]='O'
        }    
    }
    if(rndMove==3)
    {
        if(zombieY>0)
        {
            zombieY--;
            matrix[zombieX][zombieY]='Zombie'
            matrix[zombieX][zombieY+1]='O'
        }     
    }
    if(rndMove==4)
    {
        if(zombieX<4)
        {
            zombieX++;
            matrix[zombieX][zombieY]='Zombie'
            matrix[zombieX-1][zombieY]='O'
        }  
    }   
}



