// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. 
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;
function calcBMI(weight, height) {
  weight = weight.replace(',', '.')

  weight = parseFloat(weight)
  height = parseFloat(height)

  return parseFloat((weight / Math.pow(height, 2)).toFixed(1))
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8

//=======================================================

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min() {
  let res = arguments[0]

  for (const num of arguments) {
    if (num < res) {
      res = num
    }
  }

  return res
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

//=======================================================

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, 
// значения которых будут переданы в параметр dimensions в виде строки. 
// Значения гарантированно разделены пробелом.

function getRectArea(dimensions) {
  const arr = dimensions.split(' ')
  const x = Number(arr[0])
  const y = Number(arr[1])

  return x * y
}

console.log(getRectArea('8 11'));
//=======================================================

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение в формате 
// <номер элемента> - <значение элемента>. 
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

function logItems(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`)
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//=======================================================

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. 
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. 
// Порядковый номер имен и телефонов в строках указывают на соответствие. 
// Количество имен и телефонов гарантированно одинаковое.

function printContactsInfo(names, phones) {
  names = names.split(',')
  phones = phones.split(',')

  for(let a = 0; a < names.length; a += 1) {
    console.log(`${names[a]}: ${phones[a]}`)
  }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

//=======================================================

// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

function findLargestNumber(numbers) {
  let result = numbers[0]

  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }

  return result
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//=======================================================

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. 
// Все аругменты будут только числами.

function calAverage() {
  let sum = 0

  for (const number of arguments) {
    sum += number
  }

  return sum / arguments.length
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//=======================================================

// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);

  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

//=======================================================

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse (courseName) {
  if (courses.includes(courseName)) return;
  courses.push(courseName)
}

function removeCourse (courseName) {
  const idx = courses.indexOf(courseName)

  if (idx != -1) {
    courses.splice(idx, 1)
  } else {
    console.log('Курс с таким имененем не найден')
  }
}

function updateCourse (oldName, newName) {
  const idx = courses.indexOf(oldName)

  if (idx != -1) {
    courses.splice(idx, 1, newName)
  } 
}

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']