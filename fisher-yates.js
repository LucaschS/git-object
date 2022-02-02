// Metoda Fisher Yatesa

console.log("fisher - yates")
/*
const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let i = arr.length, j, temp;
while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};

console.log(arr);
 */


let tablica = [1, 2, 3, 4];

function iteracja() {
    for (let i = tablica.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = tablica[j];
        tablica[j] = tablica[i];
        tablica[i] = k;
    }
    return tablica
}


console.log(iteracja());
console.log(iteracja());
console.log(iteracja());
console.log(iteracja());
console.log(iteracja());