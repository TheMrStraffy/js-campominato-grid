//componenti html
const playField = document.querySelector('.play-field');


//stampare su pagina i blocchi
let blocksPerRow;

init(10);

function init(numBlocks){
  const totalBlocks =Math.pow(numBlocks , 2);

  for (let i = 0; i < totalBlocks; i++) {
    makeBlock();
    
  }
}


function makeBlock(id){
  let square = document.createElement('div');
  square.className = 'block';
  playField.append(square);
}