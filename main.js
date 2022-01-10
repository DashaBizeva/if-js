//Задание 6
let user = "John Doe";
console.log(user);
let student = "Dasha";
console.log(student);
user=student
//выведет мое имя
console.log(user);

// Задание 7
let test = 1;
test = test++;
test = test + '1';
// мой ответ: 11
console.log(test);
test = test - 1;
//мой ответ 1
console.log(test);
test = Boolean(1);
//мой ответ true
console.log(test);
console.log(typeof test);

//задание 8
let result = 1;
let ex8 = [2, 3, 4, 8];
for (let i = 0; i < ex8.length; i++) {
    result = result * ex8[i];
}
console.log(result);

//Задание 9
let ex9 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < ex9.length; i++) {
    if (ex9[i] > 5 && ex9[i] < 10) {
        console.log(ex9[i]);}
}

//Задание 10
let ex10 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < ex10.length; i++) {
    if (ex10[i] % 2 === 0) {
        console.log(ex10[i]);}
}

//ДЗ 3 задание 5
function isPalindrome(str) {
    let strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return true;
    } else {
        return false;
    }
}
let check = isPalindrome('шалаш');
let check2 = isPalindrome('даша');
console.log(check);
console.log(check2);

// ДЗ 3 задание 6
function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(6, 8))
function max(a, y) {
    if (a >= y) {
        return a;
    } else {
        return y;
    }
}
console.log(max (2, 15))
//пример решения с тернарным оператором
function min (a, b){
    return a <= b ? a : b;
}
console.log(min(6, 8))

function max (a, y){
    return a >= y ? a : y;
}
console.log(max (2, 15))

//дз 3 задание 7
let newMas = [];
const lowLimit = 0;
const highLimit = 100;
for(let i = 0; i < 10; i++){
    newMas.push(Math.floor(Math.random() * (highLimit + 1) + Math.ceil(lowLimit)));
}
console.log(newMas);
function funZero(newArray){
    let zeroMas = [];
    for(let elementArray of newArray){
        if(elementArray.toString().includes("0")){
            elementArray = elementArray.toString();
            let reg = 0;
            elementArray = elementArray.replaceAll(reg, "zero");
        }
        zeroMas.push(elementArray);
    }
    return zeroMas;
}
console.log(funZero(newMas));






