// console.log('hellow hi!!!')
function fitToMile(fit){
    var mile = fit * 0.0001893939;
    return mile;
}
// console.log(fitToMile(6));
////////////////////////////////
function woodCalculator(chair, table, bed){
    if(chair > 0){
        var chairNeed = chair * 1;
        console.log("for " , chair , "chair need ", chairNeed, "qubic meter woods");
    }

    if(table > 0){
        var tableNeed = table * 3;
        console.log("for " , table , "table need ", tableNeed, "qubic meter woods");
    }

    if(bed > 0){
        var bedNeed = bed * 5;
        console.log("for " , bed , "table need ", bedNeed, "qubic meter woods");
    }

}

// woodCalculator(-1, 5, 12);

/////////////////////////////////
function brickCalculator(floor){
    if(floor <= 10){
        brickNeed = floor * 1000;
        console.log("for build ", floor, "floor require brick ",brickNeed);
    }
    if(floor > 10 && floor <= 15){
        var floorCount = [floor];
        for(var i = 0; i <= floorCount; i++){    
            if(i <= 10){
                var j = i * 1000;
                var k = j;          
            }
            if(i > 10 && i <= 15){
               var l = i - 10;
               var m = l * 1500;
            }
        }
        brickNeed = k + m;
        console.log("for build ", floor, "floor require brick ",brickNeed);
    }
}
// brickCalculator(15);
// brickCalculator(9);

////////////////////////////////
function tinyFriend(friends){
    var emptyList = [];
// console.log("length of empty", emptyList.length);
    for(var i = 0; i < friends.length; i++){
        var tempList = friends[i];
        // console.log("templist" ,tempList);
        if(i >=1){
            // console.log("print it ", friendList[i-1]);
            var prevList = friends[i-1];
            // console.log("prevlist ", prevList)
            if(tempList.length < prevList.length){
                if(tempList.length < emptyList.length){
                    emptyList = tempList;
                }   
            }
            if(tempList.length == prevList.length){
                emptyList = emptyList;
            }
            else{
                emptyList = prevList;
            }
            
        }
    }
    console.log("tiny " , emptyList);
}




var friendList = ["sakib", "rashib", "suvo", "sharan", "mondol"];

tinyFriend(friendList);





