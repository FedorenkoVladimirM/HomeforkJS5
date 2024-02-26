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

function PrintSquare(c) { // Задание 3.1
    console.log (c*c);
}

function getSquare(d) {  // Задание 3.2
    return d*d;
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


function multiplyNumber(e,f) {
    if (isNaN(e) || isNaN(f)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
}


function cubeNumber() {
    let g = prompt ("Введите число:")
    g = Number(g);
    if (isNaN(g)) {
        return 'Не число';
    } else {
        return `${g} в кубе равняется ${g ** 3}`;
    }
}

console.log (cubeNumber());