let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded",function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing mode on"
                draw.style = "color: green"
            }
            else{
                draw.innerHTML = "Drawing mode off"
                draw.style = "color: red"
            }
        }
    })  

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size *size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover",colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Choose between (Biggest) 1 - 100 (Smallest)");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please select a number";
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Please select a number between 0 and 100" 
        message.style.color = "red"  
    }
    else{
        message.innerHTML = "Now you can draw!"
        message.style.color = "black"
        return input;
    }
}

function colorDiv(){
    if(click){
        if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
        this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div)=> div.style.backgroundColor = "white")
}