var chains_button = document.getElementById("ChainsButton");
var _2048Button = document.getElementById("2048Button")
var learnToFly2Button = document.getElementById("LearnToFly2Button")

chains_button.addEventListener("click", (sender, e) =>{
    let screen = document.getElementById("GameScreen");
    screen.setAttribute("src", "Chains/Chains.html")
})
_2048Button.addEventListener("click", (sender, e)=>{
    let screen = document.getElementById("GameScreen");
    screen.setAttribute("src", "Games/2048.html")
})
learnToFly2Button.addEventListener("click", (sender, e)=>{
    let screen = document.getElementById("GameScreen");
    screen.setAttribute("src", "Games/Learn2Fly2.html")
})