document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);
    getSize();
    console.log("hi")});

function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size *size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Choose size of the board");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please select a number";
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Please select a number between 0 and 100"   
    }
    else{
        message.innerHTML = "Now you can draw!"
    }
}