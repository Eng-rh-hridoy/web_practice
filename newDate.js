// See time for exicute for loop by new Date()
var start = new Date();
var sum = 0;
for(var i = 0; i < 10000000; i++){
    sum++;
}
var end = new Date();
console.log("Time elapsed",end - start, "s");