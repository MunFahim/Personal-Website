function works(){
    document.getElementById("java").innerHTML = "S E I R";
}

var turn = true;

function rotateButton(){
   


    var x = document.getElementById("icon");
    var p = document.getElementById("dropDownContent");
    if (turn) {
    x.style.rotate = "90deg";
    
    p.style.visibility = "visible";
    } else {
    x.style.rotate = "0deg";
    
    p.style.visibility = "hidden";
    } 
    turn = !turn;
}

