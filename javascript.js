
function getGridSize()
{

 let gridSize = document.getElementById("gridSizeRange").value;
 const gridContainer = document.querySelector('.gridContainer');
 gridContainer.innerHTML = '';

 gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
 gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
 gridContainer.style.border = `solid black`

for (let i = 0; i < gridSize*gridSize; i++) {
    const gridContainer = document.querySelector('.gridContainer');
    const div = document.createElement('div');
    div.addEventListener('mouseover', changeColor)
gridContainer.appendChild(div);
}
}

function changeColor(e) {
    e.target.style.backgroundColor = `black`;
}

function clearGrid() {
    gridContainer.innerHTML = '';
}