// ДНК и РНК это последовательности нуклеотидов.
//
// Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
//
// Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
//
// Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
// G -> C
// C -> G
// T -> A
// A -> U
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
//
// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку.
// Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

function dnaToRna(str){
  if(str === '') return "''";
  if(str.search(/Q|W|E|R|Y|I|O|P|S|D|F|H|J|K|L|Z|X|V|B|N|M/) !== -1) return null;

  // replace G <-> C
  str = str.replace(/G/g,'M');
  str = str.replace(/C/g,'G');
  str = str.replace(/M/g,'C');
  // replace T -> A and A -> U
  str = str.replace(/A/g,'O');
  str = str.replace(/T/g,'A');
  str = str.replace(/O/g,'U');

  return str;
}

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
console.log(dnaToRna('ACPPTG'));  // null
