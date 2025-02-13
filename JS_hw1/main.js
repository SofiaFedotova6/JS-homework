  //задача 1
  const str = "abce";
  console.log(str[0]);
  console.log(str[1]);
  console.log(str[3]);
  
//задача 2

let number1 = parseInt(prompt("Введите первое число", "Напишите его пожалуйста"));
let number2 = parseInt(prompt("Введите второе число", "Напишите его пожалуйста"));
console.log(number1 > 0 || number2 > 0);

//задача 3

let age = parseInt(prompt("Введите свой возвраст", "Напишите его"));
if (age >= 18) {
  console.log("Вы совершеннолетний, поздравляем!");
} else {
  console.log("Вы несовершеннолеьний, к сожалению.");
}

// Свои примеры
let userAnswer = prompt("Порода кошки: сиамская (да/нет,она другая)");
if (userAnswer.toLowerCase() === "да") {
    let age = prompt("Сколько ей лет?", "Напишите возвраст кошки");
    let ageNe = 20-age;
    console.log(`Она будет вас радовать на протяжении ${ageNe} лет:)`);
} else if (userAnswer === "нет") {
    let age = prompt("Сколько ей лет?", "Напишите пожалуйста возвраст животинки");
    let ageNe = 10-age;
    console.log(`Она будет вам надоедать и трепать нервы ещё ${ageNe} лет :) :) :)`);
} else {
    console.log("Любите свою зверушку)");
}    