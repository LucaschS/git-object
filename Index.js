function fn(a, b, c) {
    return a + b + c
}

var x = fn(1, 20, 30);
var y = fn(1, 50, 20);
var z = fn(2, 3, 4);
var c = fn(1, 2, 3);
console.log(x + y + z);

const person = {
    first.name: "Zdzichu",
    last.name: "Wiesiek",
    id: 5566,
    fullName: function () {
        return this.firstName + '' + this.lastName;
    }
};