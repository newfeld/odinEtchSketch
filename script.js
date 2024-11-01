const sketch = document.querySelector("#sketchpad");
const newLayout = document.querySelector("#size");
const reset = document.querySelector("#reset");
let N = 16;

function setLayout(size) {
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild);
    }
    N = size;
    const cellSize = 100 / size;
    console.log(cellSize);
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell-item");
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        cell.style.backgroundColor = "white";
        cell.addEventListener("mouseover", (event) => {
            if (event.target.style.backgroundColor === "white") {
                event.target.style.backgroundColor = "#282828";
            }
        });
        sketch.appendChild(cell);
    }
}

document.addEventListener('DOMContentLoaded', setLayout(16));
newLayout.addEventListener("click", () => {
    let newSize = Number(prompt("Please select your Sketchpad size(< 100):"));
    if (newSize > 100 || newSize === 0) {
        newSize = 16;
    } 
    setLayout(Number(newSize));
});
reset.addEventListener("click", () => {setLayout(N)});
