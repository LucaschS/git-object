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

cars.forEach((item, index, arr) => console.log(item, index, arr));

cars.forEach(function (item) {
    document.write(item + '<br>')
})


// testujemy nowa funkcję
const numbers = [1, 2, 3, 4]
numbers.forEach(myFunction2)
function myFunction2(item, index, arr) {
    console.log(arr[index] = item * 100);
}

console.log("-----------testowanie funkcji modyfikujących tablice---------------")

// pop usuwa ostatni element z tablicy

numbers.pop();
console.log(numbers);

// push wstawia wskazany element na ostatnim indexie
numbers.push(1000);
console.log(numbers);

// shift usuwa pierwszy element, a resztę elementów przesuwa o jeden index do tyłu

numbers.shift();
console.log(numbers);

// unshift wstawia element do pierwszego indexu

numbers.unshift(1);
console.log(numbers);

// concat łączy tablice w jedną
const tab1 = [1, 2, 3, 4];
const tab2 = [5, 6, 7, 8];
const tab3 = [9, 10, 11, 12, 13];
const sum = tab1.concat(tab2, tab3);
console.log(sum);

// splice - służy do dodawania elementów określonych przez parametr

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 2, "lemon", "kiwi");
console.log(fruit);
fruit.splice(0, 2);
console.log("uzycie splice do usuwania")
console.log(fruit);

// slice tworzy nową tablice, nie usuwa starej.

const circuit = fruit.slice(1, 2);
console.log(circuit);

//zamiana tablicy w stringa
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// wyrażenie funkcyjne
/* var hello = function() {
    return "hello word";
}

//funkcja strzałkowa
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
