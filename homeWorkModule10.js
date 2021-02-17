/* //task #1
let incNum = +prompt("введите число");

console.log (incNum);

console.log (typeof incNum);

if (isNaN(incNum)) {
    alert("Это не число");
} else if (incNum % 2 == 0){
    alert(incNum + " Четное");
} else {
    incNum % 2 !== 0;
    alert (incNum + " Не четное");
}
*/


/*//task #2
let x = undefined;
switch (typeof x) {
    case "number":
        console.log("x - Число");
        break;
    case "string":
        console.log("x - Строка");
        break;
    case "boolean":
        console.log("x - Логический тип");
        break;
    default:
        console.log("Тип x не определен");
}
*/


/*//task #3
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("Привет мир!"));
*/


/*//task #4
function randomInteger(min, max) {
    let rand = min - 0 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
console.log(randomInteger(0, 99));
*/


/*//task #5
let myData = ["Vasiliy", 27, 82];
console.log(myData.length);
myData.forEach(function (value, index) {
    console.log(value, index);
});
*/


//task #6


/*//task #7
const myArray = ["Vasya", 27, 82, 0, null];

let totalOddIndexes = 0;

let totalEvenIndexes = 0;

let totalZeroElements = 0;

myArray.forEach(function (meshedArrayElement, meshedArrayIndex) {
    if (meshedArrayIndex % 2 === 0 && meshedArrayElement !== 0) {
        totalEvenIndexes++;
    } else if (meshedArrayIndex % 2 !== 0 && meshedArrayElement !== 0) {
        totalOddIndexes++;
    } else {
        totalZeroElements++;
    }
});

console.log(
    `Odd indexes: ${totalOddIndexes};
    Even indexes: ${totalEvenIndexes};
    Null elements: ${totalZeroElements};
    Total indexes: ${myArray.length}`
);
*/


//task #8

