const normalPerson = {
    firstName: "kallu",
    lastName: "miya",
    salary: 20000,
    // it's call method
    fullName: function(){
        console.log(`${this.firstName} + ${this.lastName}`);
    },
    // it's call method
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);
// console.log(normalPerson.fullName);

const bestFriend = {
    name: "Quicha",
    salary: 35000
}
const highLevel = {
    name: "Bidhen",
    salary: 15000
}
// use a method from other object
//bind
const bestFriendChargeBill =  normalPerson.chargeBill.bind(bestFriend);
bestFriendChargeBill(5000);
console.log(bestFriend.salary);

// call
normalPerson.chargeBill.call(bestFriend, 7000);
console.log(bestFriend.salary);

// apply
normalPerson.chargeBill.apply(highLevel, [9000]);
console.log(highLevel.salary);

