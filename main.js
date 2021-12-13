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




