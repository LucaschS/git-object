//FUNCTION
function fn(a, b, c) {
    return a + b + c
}

var x = fn(1, 20, 30);
var y = fn(1, 50, 20);
var z = fn(2, 3, 4);
var c = fn(1, 2, 3);
console.log(x + y + z + c);


//OBJECT
const person = {
    firstName: "Zdzichu",
    lastName: "Wiesiek",
    id: 5566,
    fullName: function () {
        return this.firstName + '  ' + this.lastName;
    }
};

const person2 = {
    firstName: "Zdzichu",
    lastName: "Wiesiek",
    id: 5566,
    fullName: function () {
        return this.firstName + '  ' + this.lastName;
    }
};

document.getElementById("root").innerHTML = person.fullName() + ' ' + person2.fullName() + cars;


// ARRAY
const cars = ['saab', 'volvo', 'bmw'];

cars[0] = 'dupa';
console.log(cars[cars.length - 1]);
