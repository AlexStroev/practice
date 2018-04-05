//Реализуйте и экспортируйте по умолчанию функцию reverseInt,
//которая переворачивает цифры в переданном числе и возвращает новое число.

function reverseInt(number){

	if (typeof(number) === 'number') {
		const isLessThenZero = number < 0;
		const absReversedNum = Number(Math.abs(number).toString().split('').reverse().join(''));
		return isLessThenZero ? -absReversedNum : absReversedNum;
	} else {
		console.log('error');
	}

}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(0));
console.log(reverseInt('hfktfjh'));
console.log(reverseInt(18));
console.log(reverseInt(-31));
