function getMin (a,b) {  // Задание 1
    return a < b ? a:b;
}


function CheckParity (num) { // Задание 2
    if (num % 2 == 0) {
        return "Число четное";
    }
    else {
        return "Число нечетное";
    }
}

function PrintSquare(num) { // Задание 3.1
    console.log (num*num);
}

function getSquare(num) {  // Задание 3.2
    return num*num;
}

function greetUser () {   // Задание 4
    let age = prompt ("Сколько вам лет?");

    if (age < 0) {
        console.log ("Вы ввели неправильное значение");
    } else if (age <= 12) {
        console.log ("Привет, друг");
    } else {
        console.log ("Добро пожаловать");
    }
}


function multiplyNumber(a,b) { // Задание 5
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
}


function cubeNumber() { // Задание 6
    let num = prompt ("Введите число:")
    num = Number(num);
    if (isNaN(num)) {
        return 'Не число'
    } else {
        return `${num} в кубе равняется ${num ** 3}`
    }
}

console.log (cubeNumber());


function getAria() {  // Задание 7
    return Math.PI * this.radius * this.radius;
}

function getPerimetr() {
    return Math.PI * this.radius * 2;
}

const circle1 = {
    radius: 5,
    getAria,
    getPerimetr,
};

const circle2 = {
    radius: 10,
    getAria,
    getPerimetr,
};