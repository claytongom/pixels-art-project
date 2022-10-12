const black = document.getElementById('black');
const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const btnColors = document.getElementById('button-random-color');


black.className = "color selected";

btnColors.addEventListener('click', genColors);

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) { // ref.https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
if (localStorage.getItem('colorPalette') !== null) {
    let cores = JSON.parse(localStorage.getItem('colorPalette'))
    cor1.style.backgroundColor = cores['cor1'];
    cor2.style.backgroundColor = cores['cor2'];
    cor3.style.backgroundColor = cores['cor3'];
}
function genColors() {
    cor1.style.backgroundColor = generateColor();
    cor2.style.backgroundColor = generateColor();
    cor3.style.backgroundColor = generateColor();
    let colorObjects = {
        cor1: cor1.style.backgroundColor,
        cor2: cor2.style.backgroundColor,
        cor3: cor3.style.backgroundColor
    }
    localStorage.setItem('colorPalette', JSON.stringify(colorObjects));
}
function genPixelsBoard() {
    let pixelsBoard = document.getElementById("pixel-board");
    console.log(pixelsBoard)
    for (let i = 0; i < 25; i += 1) {
        let pixelFrame = document.createElement("div");
        pixelFrame.className = "pixel";
        pixelFrame.style.backgroundColor = "rgb(255, 255, 255)";
        pixelFrame.style.height = "40px";
        pixelFrame.style.width = "40px";
        pixelFrame.style.border = "1px solid black"
        pixelFrame.style.display = "inline-block";
        console.log(pixelFrame.style.backgroundColor)
        pixelsBoard.appendChild(pixelFrame);
    }
}
genPixelsBoard();

function select(event) {
    const element = document.querySelector('.selected');
    element.classList.remove('selected');
    event.target.classList.add('selected');
}

black.addEventListener('click', select);
cor1.addEventListener('click', select);
cor2.addEventListener('click', select);
cor3.addEventListener('click', select);

function squarePaint (event) {
    if (event.target.classList.contains("pixel")) {
          let selectColor = document.querySelector('.selected');
          let paint = window.getComputedStyle(selectColor); //ref.: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
          event.target.style.backgroundColor = (paint.backgroundColor);
        }
  };
  
  document.addEventListener("click", squarePaint);


const buttonClear = document.getElementById("clear-board");
function squareClear() {
   const square = document.getElementsByClassName('pixel');
   console.log("test", square.length)
   for(let i = 0; i < square.length; i += 1){
      square[i].style.backgroundColor = "rgb(255, 255, 255)"
   }

}

buttonClear.addEventListener('click', squareClear);



  
  
 







