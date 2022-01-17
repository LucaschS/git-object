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

// array.forEach(function(currentValue, index, arr), thisValue)

cars.forEach(myFunction);
function myFunction(chuj, dupa, cipa) {
    console.log(chuj + " * " + dupa + ' * ' + cipa);
}

// array loop

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// arrow function inside forEach

cars.forEach((chuj, dupa, cipa) => console.log(chuj, dupa, cipa));



/* var hello = function() {
    return "hello word";
}

var hello = () => {
    return "hello word";
}





*/

/* let text = "<ul>"
cars.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>"
} */
// SYNtAX

// document.getElementById("root").innerHTML = text;
