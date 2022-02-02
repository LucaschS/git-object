const numbers = [1, 200, 3, 4, 67, 43, 2, 454, 6, 0, 23, 10];
const characters = [
    { name: 'Tom Sawyer', birthdate: 1876, death: 1945 },
    { name: 'Bart Simpson', birthdate: 1989, death: 2017 },
    { name: 'Holden Caufield', birthdate: 1951, death: 1992 },
    { name: 'Tom Joad', birthdate: 1939, death: 1967 },
    { name: 'Peter Griffin', birthdate: 1999, death: 2017 }
];
const person = { name: 'cecylia', age: 34 };


let i;
let j = numbers.length - 1;
let x = "";

//cwiczenie pętli for i warunku
for (i = 0; i <= j; i++) {
    if (i < j) {
        x += numbers[i] * 2 + " * "
    } else { x += numbers[j] * 2 }
    document.getElementById("root").innerHTML = x;
};

//ćwiczenie pętli for / of
let y = ""
for (let x of numbers) {
    y += x + "</br>"
}
document.getElementById("test").innerHTML = y

//Ćwiczenie pętli for in
let z = "";
for (i in characters) {
    z += characters[i].name + "</br>" + "Birthdate: " + characters[i].birthdate + "</br>" + "Death: " + characters[i].death + "</br>"
}
document.getElementById("test2").innerHTML = z


//Ćwiczenie pętli while
var text = "";
var k = 0;
while (k < numbers.length - 1) {
    text += numbers[k] + "*"
    document.getElementById("test2").innerHTML = text
    k++;
}