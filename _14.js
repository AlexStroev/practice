//Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

function invertCase(str){
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i].toUpperCase() === arr[i]){
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(invertCase('Hello, World!')) // hELLO, wORLD!
console.log(invertCase('I loVe JS')) // i LOvE js
