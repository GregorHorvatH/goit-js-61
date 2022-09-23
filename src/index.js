console.log('GoIT JS 61');

// function fn(x) {
//   console.log(++x);
// }

// let a = 5;

// fn(a);
// console.log(a);

// function sum(a = 0, b = 0) {
//   return a + b; // undefined + 0
// }

// const res1 = sum(1, 1); // 2
// const res2 = sum(2, 2); // 4
// const res3 = sum(res1, res2);

// console.log(sum());

// function sum() {
//   let res = 0;

//   for (const number of arguments) {
//     res += number;
//   }

//   return res;
// }

// console.log(sum()); // 0
// console.log(sum(5)); // 5
// console.log(sum(1, 1)); // 2
// console.log(sum(1, 1, 1, 1, 1, 1, 1)); // 7

// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const calcBMI = function (weight, height) {
//   const weightNum = parseFloat(weight.replace(',', '.'));
//   const heightNum = parseFloat(height.replace(',', '.'));

//   return parseFloat((weightNum / Math.pow(heightNum, 2)).toFixed(1));
// };

// console.log(calcBMI('88,3', '1.75')); // 28.8
// console.log(calcBMI('75', '1.75')); // 28.8

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const min = function (a, b) {
//   return a < b ? a : b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(' ');
//   const width = parseFloat(arr[0]);
//   const height = parseFloat(arr[1]);

//   return width * height;
// }

// console.log(getRectArea('8 11'));

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i += 1) {
//     const name = namesArr[i];
//     const phone = phonesArr[i];

//     console.log(`${name}: ${phone}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo('Solomon,Artemis', '890055566377,890055566300');

// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const num of numbers) {
//     max = num > max ? num : max;
//     // if (num > max) {
//     //   max = num;
//     // }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;

//   for (const num of arguments) {
//     sum += num;
//   }

//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }

//   courses.splice(idx, 1);
// }

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (idx === -1) {
//     console.log('Курс с таким имененем не найден');
//     return;
//   }

//   courses.splice(idx, 1, newName);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

// addCourse('CSS'); // 'У вас уже есть такой курс'
// console.log(courses);

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('Express', 'NestJS'); // 'Курс с таким имененем не найден'

// const bobby = {
//   name: 'Bobby',
//   age: 15,
//   eyes: 'blue',
//   phone: '+3806712345678',
//   sex: 'male',
// };

// const peter = {
//   name: 'Peter',
//   age: 20,
//   eyes: 'brown',
//   phone: '+3809712345678',
//   books: ['Book 1', 'Book 2'],
// };

// function cutAge({ age, phone, ...rest }) {
//   return { ...rest };
// }

// console.log(bobby);
// console.log(peter);

// console.log(cutAge(bobby));
// console.log(cutAge(peter));

// ---- quicksort ----
// function quicksort(numbers) {
//   if (numbers.length < 2) return numbers;

//   const pivot = numbers[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < numbers.length; i++) {
//     numbers[i] < pivot ? left.push(numbers[i]) : right.push(numbers[i]);
//   }

//   return quicksort(left).concat(pivot, quicksort(right));
// }

// console.log(quicksort([5, 2, 4, 8, 1, 7, 6, 3, 9]));
