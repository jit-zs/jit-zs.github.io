const cardback = new Image();
cardback.src = "cardback.png";

let canvas = document.getElementById("gameCanvas");
function start(){
    
}
start()


function update(){
    
    draw();
}


function draw(){
    let ctx;
    
    
    if (canvas.getContext){


        ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "rgb(0, 50, 200)";
        ctx.fillRect(0, 0, 500, 500);
        

        ctx.drawImage(cardback, 20, 20);
    }
}

function onCanvasClick(htmlElement, ev, options){

}

canvas.addEventListener("click", onCanvasClick)
setInterval(update, 1.0 / 60.0)
