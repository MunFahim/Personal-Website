function works(){
    document.getElementById("java").innerHTML = "S E I R";
}

var turn = true;

function rotateButton(){
    //var button = document.querySelector("#icon");
    //var button = getElementById("icon");
    //button.className = button.className ? "" : "dropButton";
    //button.style.rotate="90deg";


    var x = document.getElementById("icon");
    var p = document.getElementById("dropDownContent");
    if (turn) {
    x.style.rotate = "90deg";
    //y.style.visibility = "visible";
    //k.style.visibility = "visible";
    p.style.visibility = "visible";
    } else {
    x.style.rotate = "0deg";
    //y.style.visibility = "hidden";
    //k.style.visibility = "hidden";
    p.style.visibility = "hidden";
    } 
    turn = !turn;
}

