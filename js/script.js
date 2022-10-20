//componenti html
const playField = document.querySelector('.play-field');

const randomNumbers = [];
//stampare su pagina i blocchi
let blocksPerRow;

init(10);

function init(numBlocks){
  const totalBlocks = Math.pow(numBlocks , 2);

  for (let i = 0; i < totalBlocks; i++) {
    makeBlock(i);
    
  }
}


function makeBlock(id){
  let square = document.createElement('div');
  square.className = 'block';
  this.innerHTML ='';
  square.addEventListener('click',clickBlock);
  square.innerHTML = getRandomNumber(id, 1);
  playField.append(square);
}

function clickBlock(event){

  this.classList.add('blockClicked');
  console.log(this.innerHTML);

}

function getRandomNumber(max, min){
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

