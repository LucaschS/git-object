/*const numbers = [1, 2, 3, 4, 5]

const x = (item, index, arr) => {
    let x = arr[index];
    x = item * 10;
    console.log(x);
}
numbers.forEach(x)
*/

// zegarek na stronie

function odliczanie() {
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();

    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();

    godzina = checkTime(godzina);
    minuta = checkTime(minuta);
    sekunda = checkTime(sekunda);
    //if (sekunda < 10) { sekunda = "0" + sekunda };

    document.getElementById("root").innerHTML = dzien + "/" + miesiac + "/" + rok + "|" + godzina + ":" + minuta + ":" + sekunda;
    setTimeout("odliczanie()", 1000);
}


function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


// Pobieranie miesięcy z tablicy
const months =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()]
document.getElementById("test").innerHTML = month;

const f = d.getMonth();
console.log(f)