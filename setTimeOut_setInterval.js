function myFunc(){
    console.log(222222);
}

function myFunc2(){
    console.log(33333);
}

function myFunc3(){
    console.log(444444);
}

myFunc();
myFunc2();
myFunc3();

setTimeout(myFunc3,3000);

setTimeout(function(){
    console.log(555555);
}, 2000);

setTimeout(() => {
    console.log(666666);
}, 3000);

/////////////////////////////////////////////////////////

setInterval(myFunc3, 4000); //call the function repeatedly after every 4sec

// press Ctel + c to stop