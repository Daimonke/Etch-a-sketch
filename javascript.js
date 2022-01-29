let gridSize = document.getElementById("gridSizeRange");
 const gridContainer = document.querySelector('.gridContainer');
 const blackMode = document.querySelector('.black');
 const rainbowMode = document.querySelector('.rainbow');
 

 function changeColor(e) {
    const blackMode = document.querySelector('.black');
    const rainbowMode = document.querySelector('.rainbow');
    if (blackMode.classList.contains('enabled')) {
     e.target.style.backgroundColor = `black`;
 } else {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
 }

}


 function enabledModeBlack() {
    const blackMode = document.querySelector('.black');
    const rainbowMode = document.querySelector('.rainbow');

    rainbowMode.classList.remove("enabled");
    blackMode.classList.add("enabled");
    blackMode.style.border = `solid red`;
    rainbowMode.style.border = `solid black`;

 }
 function enabledModeRainbow() {
    const blackMode = document.querySelector('.black');
    const rainbowMode = document.querySelector('.rainbow');

    blackMode.classList.remove("enabled");
    rainbowMode.classList.add("enabled");
    blackMode.style.border = `solid black`;
    rainbowMode.style.border = `solid red`;

 }
 
function clearGrid() {
    const gridContainer = document.querySelector('.gridContainer');
     gridContainer.innerHTML = '';
     gridContainer.style.border = `none`
}


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