"use strict";

let Name = prompt("Введіть ваше ім'я:");
let AgeInput = prompt("Введіть ваш вік:");
let City = prompt("Введіть ваше місто:");
let Color = prompt("Введіть ваш улюблений колір:");
let Working = confirm("Ви працюєте? (Натисніть ОК, якщо так, або Скасувати, якщо ні)");
let Age = Number(AgeInput);
let Adult = Age >= 18;
let result = "Анкета користувача:\n" +
    "Ім'я: " + Name + "\n" +
    "Вік: " + Age + " (Повнолітній: " + Adult + ")\n" +
    "Місто: " + City + "\n" +
    "Улюблений колір: " + Color + "\n" +
    "Працює: " + Working;

alert(result);
console.log(result);
console.log("userName:", typeof Name);
console.log("userAge:", typeof Age);
console.log("userCity:", typeof City);
console.log("userColor:", typeof Color);
console.log("isWorking:", typeof Working);
console.log("isAdult:", typeof Adult);