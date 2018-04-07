// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет,
// является ли переданное число натуральной степенью тройки.
// Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).

function isPowerOfThree(num){
  if(num === 1) return true;
  if(num >= 3){
    return isPowerOfThree(num / 3);
  }else if(num < 3){
  return false;
}else{
  return true;
}


}

console.log(isPowerOfThree(1)); // true (3^0)
console.log(isPowerOfThree(2)); // false
console.log(isPowerOfThree(9));// true (3^2)
console.log(isPowerOfThree(3)); // true (3^1)
