var matrix = Array(5).fill(null).map(() => Array(5).fill(0));
let row = 5;
let collum = 5;
let x = 0;
let y = 4;
let drawcount = 0;
let life = 1;
let savedCats = 0;
let zombieX = 3;
let zombieY = 3;
let drawXvalue = 0;
let remaningCats = 0;
const arr = ["O", "O", "Cat", "O", "Cat", "O", "O"];


drawTable();
getButtonsWest();
getButtonsEast();
getButtonsNorth();
getButtonsSouth();
displayLife();
displaySavedCats();
SetBackground();
function getImagefield() {
    let catpic = ""
    catpic = "images/natur.jpg"
    document.getElementById("catimg").src = catpic
    document.getElementById("imgline").innerHTML = "Du är vid vattenfallet på ruta: " + y + "," + x
}

function getImagefieldCat() {
    let catpic = ""
    catpic = "images/cat.png"
    document.getElementById("catimg").src = catpic
    document.getElementById("imgline").innerHTML = "Du träffade på en katt vid ruta: " + y + "," + x

}
function noCollison() {
    if (matrix[y][x] != 'Cat' && matrix[y][x] != 'Zombie') {
        let catpic = ""
        catpic = "images/human.png"
        document.getElementById("catimg").src = catpic

    }
}
function getImagefieldZombie() {
    let catpic = ""
    catpic = "images/zombie.png"
    document.getElementById("catimg").src = catpic
    document.getElementById("imgline").innerHTML = "Aj då zombin fångade dig vid ruta: " + y + "," + x

}
function getImagefieldChuck() {
    let catpic = ""
    catpic = "images/chuck.png"
    document.getElementById("catimg").src = catpic
    document.getElementById("imgline").innerHTML = "Inga katter kvar på spelplanen gå vidare eller kör igen!"
}

function collisionCats() {
    if (matrix[y][x] == 'Cat') {
        savedCats++;
        getImagefieldCat()
    }
}
function collisionZombie() {
    if (matrix[y][x] == 'Zombie') {
        life--;
        getImagefieldZombie();
    }
}
function drawTable() {
    if (life < 1) {
        Reset();
    }
    if (remaningCats < 1) {
        Reset();
    }
    let table = "";
    table += "<table>"
    let arrayLength = arr.length;
    SetBackground();
    collisionCats();
    collisionZombie();
    noCollison();

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < collum; j++) {

            const rndInt = arrayRandom(0, arrayLength - 1)
            let getObject = arr[rndInt]
            if (i == 4 && j == 0 && drawcount == 0) {
                getObject = 'X'

            }
            if (i == 3 && j == 3 && drawcount == 0) {
                getObject = 'Zombie'
            }
            if (drawcount == 0) {
                table += "<td>" + getObject + "</td>"
                matrix[i][j] = getObject

            }

            if (drawcount >= 1) {

                matrix[y][x] = 'X'
                if (drawXvalue == 1) {
                    matrix[y][x + 1] = 'O'
                }
                if (drawXvalue == 2) {
                    matrix[y][x - 1] = 'O'
                }
                if (drawXvalue == 3) {
                    matrix[y - 1][x] = 'O'
                }
                if (drawXvalue == 4) {
                    matrix[y + 1][x] = 'O'
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
    console.log("Saved cats: " + savedCats)
    console.log("Life remaning: " + life)
    displayLife();
    displaySavedCats();
    CountCats();

}
function displayLife() {
    document.getElementById("health").innerHTML = "Remaning life:" + life
}

function displaySavedCats() {
    document.getElementById("cats").innerHTML = "Saved cats: " + savedCats
}

function arrayRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function West() {
    if (x > 0) {
        x--
        drawXvalue = 1;
    }
    console.log(x)
    zombieMovment()
    drawTable()
}
function East() {
    if (x < 4) {
        x++
        drawXvalue = 2;
    }
    console.log(x)
    zombieMovment()
    drawTable()
}
function South() {
    if (y < 4) {
        y++
        drawXvalue = 3;
    }

    console.log(y)
    zombieMovment()
    drawTable()
}
function North() {
    if (y > 0) {
        y--
        drawXvalue = 4;
    }
    console.log(y)
    zombieMovment()
    drawTable()
}
function getButtonsWest() {
    let post = document.getElementById("west")
    post.innerHTML = ""

    let buttonWest = document.createElement("button")
    buttonWest.innerHTML = "<button onclick='West()'>West</button> "
    post.appendChild(buttonWest)
}
function getButtonsEast() {
    let post = document.getElementById("east")
    post.innerHTML = ""

    let buttonEast = document.createElement("button")
    buttonEast.innerHTML = "<button onclick='East()'>East</button> "
    post.appendChild(buttonEast)
}

function getButtonsSouth() {
    let post = document.getElementById("south")
    post.innerHTML = ""

    let buttonSouth = document.createElement("button")
    buttonSouth.innerHTML = "<button onclick='South()'>South</button> "
    post.appendChild(buttonSouth)
}
function getButtonsNorth() {
    let post = document.getElementById("north")
    post.innerHTML = ""

    let buttonNorth = document.createElement("button")
    buttonNorth.innerHTML = "<button onclick='North()'>North</button> "
    post.appendChild(buttonNorth)
}
const rndInt = arrayRandom(1, 5)

function zombieMovment() {
    const rndMove = arrayRandom(1, 4)
    console.log("Value for movment zombie: " + rndMove)
    if (rndMove == 1) {
        if (zombieX < 4) {
            zombieX++;
            matrix[zombieX][zombieY] = 'Zombie'
            matrix[zombieX - 1][zombieY] = 'O'
        }
    }
    if (rndMove == 2) {
        if (zombieX > 0) {
            zombieX--;
            matrix[zombieX][zombieY] = 'Zombie'
            matrix[zombieX + 1][zombieY] = 'O'
        }
    }
    if (rndMove == 3) {
        if (zombieY > 0) {
            zombieY--;
            matrix[zombieX][zombieY] = 'Zombie'
            matrix[zombieX][zombieY + 1] = 'O'
        }
    }
    if (rndMove == 4) {
        if (zombieY < 4) {
            zombieY++;
            matrix[zombieX][zombieY] = 'Zombie'
            matrix[zombieX][zombieY - 1] = 'O'
        }
    }
}

function Reset() {
    x = 0;
    y = 4;
    drawcount = 0;
    life = 1;
    savedCats = 0;
    drawXvalue = 0;
    zombieX = 3;
    zombieY = 3;
}

function CountCats() {
    let number = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < collum; j++) {
            if (matrix[i][j] == 'Cat') {
                number++;
            }
        }
    }
    console.log("Rem cats: " + number)
    remaningCats = number;
    if (remaningCats < 1) {
        getImagefieldChuck();
    }
}

function SetBackground() {
    if (x == 0 && y == 0) {
        changeimg("url(images/skog2.jpg)");
        document.getElementById("imgline").innerHTML = "Du är framme vid en äng "
    }
    if (x == 1 && y == 0) {
        changeimg("url(images/skog3.jpg)");
        document.getElementById("imgline").innerHTML = "Du ser ett par fjärliar "
    }
    if (x == 2 && y == 0) {
        changeimg("url(images/skog4.jpg)");
        document.getElementById("imgline").innerHTML = "Du går på en stig i dagsljuset"
    }
    if (x == 3 && y == 0) {
        changeimg("url(images/skog5.jpg)");
        document.getElementById("imgline").innerHTML = "Solen tittar fram bland träden"
    }
    if (x == 4 && y == 0) {
        changeimg("url(images/skog6.jpg)");
        document.getElementById("imgline").innerHTML = "Dimman kommer in över skogen"
    }
    if (x == 0 && y == 1) {
        changeimg("url(images/skog8.jpg)");
        document.getElementById("imgline").innerHTML = "Solen lyser in mellan träden"
    }
    if (x == 1 && y == 1) {
        changeimg("url(images/skog9.jpg)");
        document.getElementById("imgline").innerHTML = "Du går mellan träden"
    }
    if (x == 2 && y == 1) {
        changeimg("url(images/skog10.jpg)");
        document.getElementById("imgline").innerHTML = "Här verkar det finnas en väg"
    }
    if (x == 3 && y == 1) {
        changeimg("url(images/skog11.jpg)");
        document.getElementById("imgline").innerHTML = "Träden skymmer solen"
    }
    if (x == 4 && y == 1) {
        changeimg("url(images/skog12.jpg)");
        document.getElementById("imgline").innerHTML = "Målnen drar in vid sjön"
    }
    if (x == 0 && y == 2) {
        changeimg("url(images/skog13.jpg)");
        document.getElementById("imgline").innerHTML = "Du hittar en stuga vid sjön"
    }
    if (x == 1 && y == 2) {
        changeimg("url(images/skog14.jpg)");
        document.getElementById("imgline").innerHTML = "Solen lyser vid vattnet"
    }
    if (x == 2 && y == 2) {
        changeimg("url(images/skog15.jpg)");
        document.getElementById("imgline").innerHTML = "Solen lyser in mellan träden"
    }
    if (x == 3 && y == 2) {
        changeimg("url(images/skog16.jpg)");
        document.getElementById("imgline").innerHTML = "Du har kommit fram till en mer öppen yta"
    }
    if (x == 4 && y == 2) {
        changeimg("url(images/skog17.jpg)");
        document.getElementById("imgline").innerHTML = "Det börjar bli mörkare ute"
    }
    if (x == 0 && y == 3) {
        changeimg("url(images/skog18.jpg)");
        document.getElementById("imgline").innerHTML = "En stuga som ligger en bit upp"
    }
    if (x == 1 && y == 3) {
        changeimg("url(images/skog19.jpg)");
        document.getElementById("imgline").innerHTML = "Solen lyser in bland träden"
    }
    if (x == 2 && y == 3) {
        changeimg("url(images/skog20.jpg)");
        document.getElementById("imgline").innerHTML = "Vattnet forsar ner"
    }
    if (x == 3 && y == 3) {
        changeimg("url(images/skog21.jpg)");
        document.getElementById("imgline").innerHTML = "Dimman drar in"
    }
    if (x == 4 && y == 3) {
        changeimg("url(images/skog22.jpg)");
        document.getElementById("imgline").innerHTML = "Det är en klar himmel"
    }
    if (x == 0 && y == 4) {
        changeimg("url(images/skog23.jpg)");
        document.getElementById("imgline").innerHTML = "Du får vara försiktig med åskan"

    }
    if (x == 1 && y == 4) {
        changeimg("url(images/skog24.jpg)");
        document.getElementById("imgline").innerHTML = "Solen lyser vid vattnet"
    }
    if (x == 2 && y == 4) {
        changeimg("url(images/skog25.jpg)");
        document.getElementById("imgline").innerHTML = "Du är nära en bergkant"
    }
    if (x == 3 && y == 4) {
        changeimg("url(images/skog26.jpg)");
        document.getElementById("imgline").innerHTML = "Solen går upp vid en brygga"
    }
    if (x == 4 && y == 4) {
        changeimg("url(images/skog27.jpg)");
        document.getElementById("imgline").innerHTML = "Du ser en svan"
    }




}
function changeimg(filePath) {
    document.body.style.backgroundImage = filePath
}
