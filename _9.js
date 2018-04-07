// Cчастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового,
// 	так и строкового типа: см. примеры ниже).
// Функция должна возвращать true, если билет счастливый, или false, если нет.

function isHappyTicket(num){
	let sum13 = 0;
	let sum36 = 0;
	if(num.toString().split('').length !== 6) return 'error';

	num = num.toString().split('');
	for(let i = 0; i <= 2; i++){
		sum13 += +num[i];
	}

	for(let j = 3; j <= 5; j++){
		sum36 += +num[j];
	}


	if (sum13 === sum36){
		return true;
	}else{
		return false;
	}
}


console.log(isHappyTicket(385916)); // true
console.log(isHappyTicket(231002)); // false
console.log(isHappyTicket(128722)); // true
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket(128722222)); //error
