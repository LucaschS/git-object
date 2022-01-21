//FUNCTION
function fn(a, b, c) {
    return a + b + c
}

var x = fn(1, 20, 30);
var y = fn(1, 50, 20);
var z = fn(2, 3, 4);
var c = fn(1, 2, 3);
console.log(x + y + z + c);

console.log("--------------function expression and arrow function---------------")

// wyrażenie funkcyjne
var hello = function () {
    return "hello word";
}
console.log(hello())
//funkcja strzałkowa
var hello = () => {
    return "hello word";
}
console.log(hello())

console.log("--------------object---------------")

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

console.log("-----------Array---------------")

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

//for each wsadzony w innerHTML

let dupa = ""
cars.forEach(f)

function f(item) {
    dupa += item + "</br>"
}
document.getElementById("test").innerHTML = dupa

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

console.log("----arrays------")
const liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9];
liczby.pop();
liczby.pop();
liczby.pop();
liczby.pop();
console.log(liczby);
liczby[0] = 20;
console.log(liczby);
liczby.splice(3, 0, 40, 50);
console.log(liczby);
const liczby2 = liczby.slice(2, 3);
console.log(liczby2);


// funcja filter() tworzy nową tablicę, która spełni wymagania 
console.log("-------------filter()-------------");

const numbers1 = [1, 2, 3, 4];
const numbers2 = numbers1.filter(f3)
function f3(value, index, array) {
    return value > 2
};

document.getElementById("test2").innerHTML = numbers2
console.log(numbers2)

//funkcja map() wykonuje na każdym elemencie z tablicy 
console.log('----map----')
const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.map(f2);
function f2(value, index, array) {
    return value * 2
};
console.log(numbers4);

// reduce()
console.log("---reduce()---")
var sum2 = numbers3.reduce(f4);
function f4(accumulator, currentValue, index, array) {
    return accumulator + currentValue
};
console.log(sum2);


const arr = [1, 5, 8, 9, 10];
let i = 0;

const sum1 = arr.reduce((sum1, number) => {
    console.log(`Wywołanie #${++i}\tsum: ${sum1}\tnumber: ${number}`);
    return sum1 - number;
}, 100);

console.log(sum1); // 33


const fruits2 = ["banana", "kiwi", "apple"];
fruits2.sort();
fruits2.reverse();
console.log(fruits2);

const a = [74, 24, 35, 67, 89, 786];
a.sort(function (a, b) {
    return a - b;
})
console.log(a)

console.log("----sortowanie obiektów w tablicy----")

const characters = [
    { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
    { name: 'Bart Simpson', birthdate: 1989, death: 2017 },
    { name: 'Holden Caufield', birthdate: 1951, death: 1992 },
    { name: 'Tom Joad', birthdate: 1939, death: 1967 },
    { name: 'Peter Griffin', birthdate: 1999, death: 2017 }
];

const people = [
    { name: 'cecylia', age: 34 },
    { name: 'zdizsiek', age: 25 },
    { name: 'andrzej', age: 76 },
];

function func(a, b) {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    if (x < y) { return 1 }
    else if (x > y) { return -1 }
    else { return 0 }
}

characters.sort(func);
console.log(characters);