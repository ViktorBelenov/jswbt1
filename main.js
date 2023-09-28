import { isPalindrome } from './tasks/isPalindrome.js';                 //  1
import { isStrangeNumber } from './tasks/isStrangeNumber.js';           //  2
import { MathX } from './tasks/mathX.js'                                //  3
import { rightCase } from './tasks/caseWords.js'                        //  4
import { jsonToLinkedList } from './tasks/json.js';                     //  5
import { sortAgesAscending } from './tasks/sortAges.js'                 //  6
import { useAllFunction } from  './tasks/useAllFunction.js'             //  7
import { executeFunction } from './tasks/executeFunctions.js';          //  8
import { objectToString } from './tasks/jsonToString.js';               //  9
import { parseJSON } from './tasks/jsonParse.js';                       //  10
import { outerFunction } from './tasks/closure.js';                     //  11


// console.log(isPalindrome("аргентина манит негра"));

// console.log(isStrangeNumber(28));

// console.log(MathX.fibonacci(10)); 
// console.log(MathX.fibonacciSequence(8)); 
// console.log(MathX.nthPrime(40)); 
// console.log(MathX.primesBelow(710)); 

// console.log(rightCase(112, ['сообщение', 'сообщения', 'сообщений'])); 
// console.log(rightCase(12, ['сообщение', 'сообщения', 'сообщений']));
// console.log(rightCase(1, ['сообщение', 'сообщения', 'сообщений']));
// console.log(rightCase(1024, ['пользователь', 'пользователя', 'пользователей']));
// console.log(rightCase(1026, ['пользователь', 'пользователя', 'пользователей']));
// console.log(rightCase(121, ['пользователь', 'пользователя', 'пользователей'])); 

// const json = [
//   { value: 'Кот' },
//   { value: 'Собака' },
//   { value: 'Скелет' },
// ];
// const linkedList = jsonToLinkedList(json);
// console.log(linkedList);

// const EMPLOYS = [{ name: 'Pib', age: 25 },{ name: 'Pia', age: 25 },{ name: 'Pec', age: 25 },{ name: 'Ric', age: 15 },{ name: 'Kit', age: 95 },{ name: 'Svit', age: 48 },{ name: 'Neeet', age: 1 },{ name: 'Holowet', age: 33 },{ name: 'Lep', age: 35 },{ name: 'Sit', age: 77 }];
// const CATS = [{ name: 'B', age: 25 },{ name: 'C', age: 25 },{ name: 'D', age: 25 },{ name: 'A', age: 25 },{ name: 'Ad', age: 25 },{ name: 'Ab', age: 25 }];
// console.log(sortAgesAscending(EMPLOYS));
// console.log(sortAgesAscending(CATS));

// const functinTest = () => {
//   console.log('Кот')
//   let cat = 'Кот';
//   cat = cat + 'Сметанный'
//   console.log(cat);
// };
// const functinTest1 = () => {
//   console.log('Торт')
//   console.log(2+15/32);
// };
// const functinTest2 = () => {
//   console.log('Сом')
// };
// const arrayFunction = [functinTest, functinTest1, functinTest2];
// useAllFunction(arrayFunction);

// const arrayOfFunctions = [
//   () => 1 + 2,
//   () => 3 * 4,
//   () => Math.pow(2, 3),
// ];
// const executeAll = executeFunction(arrayOfFunctions);
// const results = executeAll();
// console.log(results);


// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(objectToString(obj));

// const jsonString = '{"name":"John","age":30,"city":"New York",}';
// const obj = parseJSON(jsonString);


// // Создаем замыкание
// const closure = outerFunction();
// // Вызываем внутреннюю функцию, которая все равно имеет доступ к outerVariable
// closure(); // Вывод: "Я доступна из внутренней функции"
