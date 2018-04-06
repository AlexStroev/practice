// Счастливые числа
// Назовем счастливыми числами те, которые в результате ряда преобразований вида
// "сумма квадратов цифр" превратятся в единицу. Например:
//
// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.
// Вывод: исходное число 7 - счастливое.
//
//
// Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет.
//  Количество итераций процесса поиска необходимо ограничить числом 10.

function sumOfSquareDigits(num){
	let sum = 0;
	num = num.toString().split('');

	for(let i = 0; i < num.length; i++){
		sum += num[i] ** 2;
	}
	return sum;
}

function happyFunc(num, n){
		if(!n) n = 0;
		if(n > 9) return false
		num = sumOfSquareDigits(num)
		n++;
		if(num === 1) return true;
		return	happyFunc(num, n);

}
console.log(happyFunc(1)); // true
console.log(happyFunc(7)); // true
console.log(happyFunc(130)); //true
console.log(happyFunc(8)); // false
