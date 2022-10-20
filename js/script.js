//componenti html
const playField = document.querySelector('.play-field');


//stampare su pagina i blocchi
let blocksPerRow;

init(10);

function init(numBlocks){
  const totalBlocks = Math.pow(numBlocks , 2);

  for (let i = 0; i < totalBlocks; i++) {
    makeBlock(getRandomNumber(100, 1));
    
  }
}


function makeBlock(id){
  let square = document.createElement('div');
  square.className = 'block';
  square.innerHTML = id + 1;
  console.log(square.value);
  playField.append(square);
}



function getRandomNumber(min, max){
  return Math.floor(Math.random() * (min - max + 1));
}

