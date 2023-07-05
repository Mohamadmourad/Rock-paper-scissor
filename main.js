function pressed(symbol){
let result = "";
let pick = "";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 3: pick = "rock"; break;
        case 2: pick = "paper"; break; 
        case 1: pick = "scissor"; break;  
    }
    //rock= 3 paper=2 scissors=1
    if(symbol == 3 && randomNumber == 2)
    result = "lose";
    else if(symbol == 3 && randomNumber == 1)
    result = "won";
    else if(symbol == 2 && randomNumber == 3)
    result = "won";
    else if(symbol == 2 && randomNumber == 1)
    result = "lose";
    else if(symbol == 1 && randomNumber == 3)
    result = "lose";
    else if(symbol == 1 && randomNumber == 2)
    result = "won";
    else //anything else is just a draw
    result = "drawed";
    document.getElementById('result').innerHTML = "Your opponent picked " + pick + " therefore you " + result;
}