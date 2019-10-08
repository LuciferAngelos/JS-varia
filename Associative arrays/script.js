//ассоциативные массивы

const a = {
	'a': 5,		//ключ-значение
	'b': 'hello',
	'z2': 'Hi',
	y23: 1754,
	'hsd ay': 3040
}

a.yyyy = 555; 		//добавили новую переменную в массив
a.b = 'rgd';		//перезаписали значение ключа в массиве
delete a.a;		//удаляем ключ
console.log (a);
console.log(a.z2);	//вариант обращения
let k = 'y23';	//закинули ключ в переменную

console.log(a[k]);		//обращение к переменной через квадратные скобки

// document.querySelector('.out').innerHTML = a 		//так не будет выводить

let out = ''
for (let key in a){		//перебираем ключи массива
	out += key + ': ' + a[key] + '<br>'		//выводим ключи и значения ключей
}

document.querySelector('.out').innerHTML = out;
