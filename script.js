const black= document.getElementById('black');
const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const btnColors = document.getElementById('button-random-color');

btnColors.addEventListener('click', genColors);

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) { // ref.https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }

  function genColors () {
    cor1.style.backgroundColor = generateColor();
    cor2.style.backgroundColor = generateColor();
    cor3.style.backgroundColor = generateColor();
}