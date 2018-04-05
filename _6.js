//Напишите функцию sumSquareDifference, которая принимает аргумент n
//и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

function sumSquareDifference(n){
  let sumOfSquares = 0;
  let squareOfSum = 0;
  let d = n;
  for(; n > 0; n--){
    sumOfSquares += n * n;
  }

  for(; d > 0; d--){
    squareOfSum += d;
    }
    squareOfSum *= squareOfSum;
    return squareOfSum - sumOfSquares;
  }


console.log(sumSquareDifference(10));
