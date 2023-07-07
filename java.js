document.addEventListener("DOMContentLoaded",createBoard(16),
    console.log("hi"));

function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColums = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size *size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}