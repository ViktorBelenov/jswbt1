const rightCase = (number, wordForms) => {
  if (number % 10 === 1 && number % 100 !== 11) {
      return number + ' ' + wordForms[0];
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
      return number + ' ' + wordForms[1];
  } else {
      return number + ' ' + wordForms[2];
  }
}
export {rightCase};

// number % 10 === 1 number % 100 !== 11 => именительный-ед(оканчиваются на 1, не 11)
// number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) => родительный-ед(2, 3 , 4 но не 11, 12, 13, 14 и 21, 22, 23, 24)
// остальные случаи родительный-множуственное