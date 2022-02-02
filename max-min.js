const points = [40, 200, 4, 2, 150];
/* 
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

console.log(myArrayMax(points))
 */

let len = points.length;
let max = -Infinity;
while (len--) {
    console.log(len)
    if (points[len] > max) {
        max = points[len];
        console.log(`--${max}--`);
    }
}

console.log("----------------")
console.log(`wartość maksymalna to ${max}`)




console.log("----pętle----")
/*
for (let i = 9; i >= 0; i--) {
    console.log(i);
}*/
/*
let i = 10
do {
    console.log(i)
} while (i--)

console.log("----petla2----")
*/

/*
let i = 10
while (i--) {
    if (i <= 5) {
        console.log(i);
    }
}
*/
/*

do {
    console.log(`pętla while ${i}`);
    i++;
} while (i <= 9)



const person = { fname: "John", lname: "Doe", age: 25 };

for (let key in person) {
    console.log(key + " " + person.key)
}


*/
const cars = [1, 2, 3, 4, 5, 6, 8, 10];

document.getElementById("test").innerHTML = cars

let x = ""
for (let i = 0; i < cars.length; i++) {
    x += cars[i] * 2 + "</br>";
    document.getElementById("test2").innerHTML = x;
}


/*
let f = 0;
let text = "";
while (cars[f] < 5) {
    text += cars[f] + "<br>";
    f++;
}
document.getElementById("root").innerHTML = text;
*/


// pętla wykonująca się nieskończenie wiele razy
/*
for (let i = 0; i < Infinity; i++) {
    console.log(i)
}
*/
