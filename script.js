const sketch = document.querySelector("#sketchpad");


function setLayout(size, location) {
    const cellSize = 100 / size;
    
    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell-item");
    }
}