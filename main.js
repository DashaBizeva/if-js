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

// дз 4
// задание 5
function sum(a) {
    return function(b) {
        return a + b;
    };
}
console.log(sum(5)(2));
// задание 6
const arrColors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const textFirst = document.getElementById("text1");
const textSecond= document.getElementById("text2");
const textThird = document.getElementById("text3");

function changeColor() {
    let colorIndex = 0;
    return function (){
        this.style.color = arrColors[colorIndex];
        colorIndex++;
        if (colorIndex === arrColors.length){
            colorIndex = 0;
        }
    }
}
textFirst.addEventListener("click", changeColor());
textSecond.addEventListener("click", changeColor());
textThird.addEventListener("click", changeColor());

// ДЗ 5
// задание 5
function dateFormatting(date) {
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (dateReg.test(date)) {
        date = date.split('-')
            .reverse()
            .join('.');
        return date;
    } else {
        return 'enter correct date format';
    }
}
console.log(dateFormatting())

// Задание 6
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
const resultOfSearch = [];
function search(str) {
    for (let j = 0; j < data.length; j++) {
        const dataValues = Object.values(data[j]);
        if (dataValues.includes(str)) {
            resultOfSearch.push(dataValues.join(' '));
        }
    }
    if (resultOfSearch.length !== 0) {
        return resultOfSearch;
    } else {
        throw `Совпадений по запросу ${str} нет`;
    }
}
console.log(search('Germany'))



