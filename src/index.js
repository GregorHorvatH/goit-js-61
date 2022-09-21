// console.log('Hello');

// const colors = ['red', 'green', 'blue'];
// colors.splice(30, 0, 'purple');
// colors.push('purple');

// const colorsCopy = [...colors, 'purple'];

// console.log(colors);
// console.log(colorsCopy);

// --- inner function example ---
// function sum(a, b) {
//   return a + b;
// }

// const sum1 = sum(1, 1);
// const sum2 = sum(2, 2);
// const result = sum(sum1, sum2);

// console.log(result);

// --- function declaration ---
// console.log(sum(1, 1));
// console.log('x:', x);

// var x = 5;

// function sum(a, b) {
//   return a + b;
// }

// --- function expression ---
// var sum = function () {
//   return a + b;
// };

// console.log(sum(1, 1));

// --- for vs for...of ---
// const colors = ['red', 'green', 'blue'];

// for (let i = 0; i < colors.length; i += 1) {
//   console.log(colors[i]);

//   colors[i] = `${colors[i]} color`;
// }

// console.log(colors);

// for (let color of colors) {
//   color = `${color} color`;
//   console.log(color);
// }

// console.log(colors);

// --- slice (no mutation) ---
// const str =
//   'Коли ми говоримо про програмування, перше, що спадає на думку - це набір інструкцій у файлі.';
// const subString = str.slice(0, 16);

// console.log(str);
// console.log(`"${subString}"`);
// console.log(str.slice(53));

// --- splice (make mutations) ---
// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 1); // delete item
// console.log(colors);

// colors.splice(1, 0, 'orange'); // insert
// console.log(colors);

// colors.splice(2, 1, 'yellow', 'green'); // replace
// console.log(colors);

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');

// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]); // 3

// console.log(genres.shift()); // Jazz
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const arr = values.split(' ');
// //      0     1
// const [num1, num2] = arr;

// // const num1 = arr[0];
// // const num2 = arr[1];

// const value = Number(num1) * Number(num2);

// console.log(value);

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// Jacob: 89001234567
// const names = 'Jacob,William,King Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < phonesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const arr = string.split(' ');

// arr.shift();
// arr.pop();

// console.log(arr.join(' '));

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''));

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];

// let min = numbers[0]; // 2
// let max = numbers[0]; // 2

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }

//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// bubble sorting
//                  1
//                              1
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort();

// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     const item1 = langs[i]; // python
//     const item2 = langs[j];

//     if (item2[0] < item1[0]) {
//       langs[j] = item1;
//       langs[i] = item2;
//     }
//   }
// }

// console.log(langs);
