/*Таски на умови.
1) Запитати змінну у користувача. Якщо змінна дорівнює 
числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'. */
const inputVal = Number(prompt("Please input value"));
if (inputVal === 10) {
  console.log("Correct value", inputVal);
} else {
  console.log("Incorrect value", inputVal);
}
/*2) Напишіть дві перевірки.
Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
Перевірте роботу скрипта при test, що дорівнює true, false. */
const test = true;
if (typeof test == "boolean" && test) {
  console.log("Correct value", test);
} else {
  console.log("Incorrect value", test);
}
/*
3) Обчислити суму покупки з урахуванням знижки. 
Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.

if (age < 18) {
  console.log("Welcome");
} else if (certificateExists) {
  console.log("Welcome 18");
} else {
  console.log("please get the certificate");
}*/
const amount = 501;
const discountPercent = 0.03;
let discount = 0;
if (amount > 500) {
  discount = amount * discountPercent;
  console.log(
    "amount: " +
      amount +
      " discountPercent: " +
      discountPercent +
      " discount: " +
      discount
  );
}
/*************Таски на цикли.*********************** *****************/
//Кожне завдання вирішити циклами while, for.
//1) Виведення чисел від 25 до 0 (порядок зменшення).
let i = 25;
while (i >= 0) {
  console.log("i", i);
  i--;
}
for (i = 25; i >= 0; i--) {
  console.log("i", i);
}
//2) Виведення чисел від 10 до 50, які кратні 5.
i = 10;
while (i <= 50) {
  if (i % 5 == 0) {
    console.log("i", i);
  }
  i++;
}
for (i = 10; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log("i", i);
  }
}
//3) Знайти суму чисел в межах від 1 до 100.
i = 1;
let sum = 0;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log("sum: ", sum);
sum = 0;
for (i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log("sum: ", sum);
