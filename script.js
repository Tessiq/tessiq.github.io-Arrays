
function states(){
    var arrA = ["Phoenix"];
    var arrO = ["Columbus"];
    var arrT = ["Hoston"];
    var arrN = ["Santa Fe"];
    var arrF = ["Tallahassee"];
    var state = document.getElementById("state").value;
    if(state == "A"){
        document.getElementById("one").innerHTML = arrA[0]
    }
    else if(state == "O"){
        document.getElementById("one").innerHTML = arrO[0]
    }
    else if(state == "T"){
        document.getElementById("one").innerHTML = arrT[0]
    }
    else if(state == "N"){
        document.getElementById("one").innerHTML = arrN[0]
    }
    else if(state == "F"){
        document.getElementById("one").innerHTML = arrF[0]
    }
}
