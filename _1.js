//Напишите функцию diff, которая принимает два угла (integer),
//каждый от 0 до 360, и возвращает наименьшую разницу между ними.


function diff(arg1, arg2){
  const difference = Math.abs(arg1 - arg2);
  if(difference > 180){
    return 360 - (difference);
  }else{
    return difference;
  }

}

console.log(diff(315, 45));
