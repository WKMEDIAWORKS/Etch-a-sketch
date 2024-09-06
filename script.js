let gridSize = 16;

const container = document.getElementById("container");
container.className = 'container';

window.addEventListener("load", () => {
    createGrid(gridSize);

    const generateSquaresBtn = document.getElementById("btn");
    generateSquaresBtn.addEventListener("click", () => {
        // Remove all grid items
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const newSize = parseInt(prompt("Number of squares per side for the new grid?"), 10);
        
        if (Number.isInteger(newSize) && newSize > 0 && newSize < 100) {
            gridSize = newSize; // Update gridSize
            createGrid(gridSize); // Create a new grid with the updated size
        } else {
            alert("Please enter a valid positive integer less than 100.");
        }
    });
});

function createGrid(size) {
    const containerRect = container.getBoundingClientRect();
    const itemSize = (containerRect.width / size) - 2;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = 'item-class';
        gridItem.style.height = `${itemSize}px`;
        gridItem.style.width = `${itemSize}px`;
        container.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
    }
}
function getRandomColor(){
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);

   return `rgb(${r},${g},${b})`;
}