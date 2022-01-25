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


let dupa = [1, 2, 3, 4];

function iteracja() {
    for (let i = dupa.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = dupa[j];
        dupa[j] = dupa[i];
        dupa[i] = k;
    }
    return dupa
}


console.log(iteracja());
console.log(iteracja());
console.log(iteracja());
console.log(iteracja());