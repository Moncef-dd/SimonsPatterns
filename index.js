let buttonColors = [
    "red", "cyan", "creamy", 
    "yellow", "blue", "green", 
    "gray", "orange", "brown"
]; 

let gameStarted = false;
document.addEventListener("keypress", function(){
    document.querySelector("h1").innerHTML = " Game Started!"
    gameStarted = true; 
})

function nextColorChoosen(colorArray){
    let u = Math.floor(Math.random() * 9) 
    return colorArray[u]
}
//console.log(buttonColors[8])

//console.log(nextSequence()); 

function generatePattern(currentPattern){
    if(!currentPattern){
        document.querySelector("h1").innerHTML = "New Game has been Started"; 
        let currentPattern = []; 
        let nextColor = nextColorChoosen(buttonColors)
        currentPattern.push(nextColor);
    }
    else {
        document.querySelector('h1').innerHTML = "Great Job!"; 


        let nextColor = nextColorChoosen(buttonColors)
        currentPattern.push(nextColor)
    }

}

for(let i = 0; i < document.querySelectorAll(".box").length; i++){
 document.querySelectorAll(".box")[i].addEventListener("click", /*
    the event listner goes here!
    */)
}

