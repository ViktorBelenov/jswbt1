const MathX = (function() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  // Так как все натуральные числа можно представить в виде 6k + r где r-остаток от деления на 6(0,1,2,3,4,5),
  // мы находим все простые числа среди этих натуральных ->
  // 6k+0 --> Не простое тк делится на 6
  // 6k+1 --> Может быть простым
  // 6k+2 --> Не простое тк делится на 2
  // 6k+3 --> Не простое тк делится на 3
  // 6k+4 --> Не простое тк делится на 2
  // 6k+5 --> Может быть простым
  // Осталось проверить на делимость этих чисел 
  //     for (let i = 5; i * i <= num; i += 6) {
  //   if (num % i === 0 || num % (i + 2) === 0) return false;
  // }
  // (i * i <= num; до 25 можем не проверять т.к минимальное 6k+5 = 5 (6k + 1 = 1 не считаем) при к = 0) 
  // где i --> 6k+5;(5,11,17)
  //     i+2 --> 6k+1;(7,13,19)
  // (мы не представляем в виде 3 + r, 4k + r, 5k + r, т.к как не можем применить свойства делимосте в ряде случаев и  точно сказать делится число на 2,3 или нет)


  return {
    fibonacci: function(n) {
      if (n <= 0) return 0;
      if (n === 1) return 1;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    },
  // Вычисляет N число фибаначи, потом будем переиспользовать для вычисления всех чисел в ряду

  // Вычисление всех чисел в ряду Фибоначчи до числа N
    fibonacciSequence: function(n) {
      const sequence = [];
      for (let i = 0; i <= n; i++) {
        sequence.push(this.fibonacci(i));
      }
      return sequence;
    },

  // Вычисление N-го простого числа
    nthPrime: function(n) {
      if (n <= 0) return undefined;
      if (n === 1) return 2;
      if (n === 2) return 3;
      if (n === 3) return 5;
      let num = 0;
      let k = 1;
      let count = 4;
      let even = true;
      while(count <= n) {
        if (even) {
          num = 6 * k + 1;
          k++;
          even = false;
        }
        else {
          num = num + 4;
          even = true;
        }
        if (isPrime(num)) {
          count++;
        }
      }
      return num;
    },
    // Вместо простого перебора, мы перебираем числа отвечающих формулам 6k + 1, 6k + 5, где k целые(почему смотри в функции определения простых чисел), для этого используем переменную even которая каждый не четный раз вычисляет 6k + 1, а четный добавляет 4.(начинаем с k=1 => 2,3,5 перебираем руками)

    // Вычисление всех простых чисел до числа N
    primesBelow: function(n) {
      var primes = [];
      for (let i = 2; i <= 6; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      if (n > 7) {
        let k = 1;
        let even = true;
        let num = 0;
        while(num <= n) {
          if (isPrime(num)) {
            primes.push(num);
          }
          if (even) {
            num = 6 * k + 1;
            k++;
            even = false;
          }
          else {
            num = num + 4;
            even = true;
          }
        }
      }
      return primes;
    }
  };
})();



export {MathX};


