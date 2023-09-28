function outerFunction() {
  // Переменная, определенная во внешней функции
  const outerVariable = "Я доступна из внутренней функции";

  // Внутренняя функция, которая имеет доступ к outerVariable
  function innerFunction() {
    console.log(outerVariable);
  }

  // Возвращаем внутреннюю функцию
  return innerFunction;
}

export { outerFunction };
