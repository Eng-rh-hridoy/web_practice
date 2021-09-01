// ..................CALCULATOR...................

let display = document.getElementById("display");
let number = Array.from(document.getElementsByClassName("num"));
let clearAll = document.getElementById("clear");
let equal = document.getElementById("equal");
var haveDote = false;

for(var i = 0; i < number.length; i++){
    var currentNumber = number[i];
    currentNumber.addEventListener("click", function (e){
        var clickedNumber = e.target;
        if(clickedNumber.innerText == "." && !haveDote){
            haveDote = true;
        }
        else if(clickedNumber.innerText == "." && haveDote){
            return;
        }
        display.value += clickedNumber.innerText;   
    });
}

clearAll.addEventListener("click", function(){
    display.value = "";
    haveDote = false;
});

equal.addEventListener("click", function(){
    display.value = eval(display.value);
});

