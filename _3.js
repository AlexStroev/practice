//Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
//Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
//Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.


function isPerfect(number){
	if(number < 1) return false;
	let num = 0;
	for(let i = 1; i < number; i++){
		if(number % i === 0){
			num += i;
		}
	}
	return num === number;
}

console.log(isPerfect(33550336));
console.log(isPerfect(6));
console.log(isPerfect(0));
console.log(isPerfect(1));
console.log(isPerfect(5));
console.log(isPerfect(-6));
console.log(isPerfect(-5));
