//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток)
//и возвращает строку, являющуюся временем в формате чч:мм.

function formattedTime(time){
	if(time < 0) return 'error';
	if(time < 60 && time < 10) return '00:0' + time;
	if(time < 60 && time > 9) return '00:' + time;
	if(time < 600 && (time % 60) < 10) return '0' + Math.floor(time / 60) + ':0' + time % 60;
	if(time < 600 && (time % 60) >= 10) return '0' + Math.floor(time / 60) +  ':' + time % 60;
	if(time >= 600 && (time % 60) < 10) return Math.floor(time / 60) + ':0' + time % 60;
	if(time >= 600 && (time % 60) >= 10) return Math.floor(time / 60) + ':' + time % 60;
	}

console.log(formattedTime(-15));
console.log(formattedTime(0));
console.log(formattedTime(11));
console.log(formattedTime(5));
console.log(formattedTime(62));
console.log(formattedTime(75));
console.log(formattedTime(729));
console.log(formattedTime(754));
