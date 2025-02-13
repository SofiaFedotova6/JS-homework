// задача 1

let age = prompt("введите свой возраст", "");
console.log(
  age >= 76 ? "Поздравляем с пенсионным возрастом!" : "Вам ещё рано на пенсию"
);

// задача 2

let num1 = prompt("введите первое число", "");
let num2 = prompt("введите второе число", "");
if (num1 > num2) {
  console.log("Первое число больше");
} else if (num1 < num2) {
  console.log("Второе число больше");
} else {
  console.log("Числа равны");
}

// задача 3

let n = prompt("введите число", "");
console.log(n % 2 == 0 ? "чётное" : "нечётное");

// задача 4

const secretNumber = 3;
let guessNumber = prompt("Угадайте число от 1 до 23", "");
console.log(
  guessNumber == secretNumber ? "Вы угадали!" : "Попробуйте ещё раз!"
);

// задача 5

const login = prompt("Введите логин");
const pass = prompt("Введите пароль");
if ((login == "admin", pass == "123456")) {
  console.log("Добро пожаловать!");
} else {
  console.log("Неверный логин или пароль");
}

// задача 6

const year = prompt("Введите год");
if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
  console.log("Год является високосным");
} else {
  console.log("Год не является високосным");
}

// задача 7

let userNum = prompt("введите число", "");
if (userNum > 110) {
  console.log("Большое число");
} else if (userNum < 100) {
  console.log("Маленькое число");
} else {
  console.log("Точно 110!");
}