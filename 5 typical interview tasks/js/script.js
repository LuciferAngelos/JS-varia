function palindrom(str){
	// сначала переводим строку в нижний регистр
	str = str.toLowerCase();
	let str2;
	//строку переводим в массив
	// let str2 = str.split('');		//разббиваем строку по сепаратору

	// str2 = str2.reverse()		//"переворачиваем" массив
	// str2 = str2.join('')		//соединяем массив

	// if (str == str2) return true;
	// else return false;

	//return str2

	return str2 == str.split('').reverse().join('');	//сразу переводим в строку, переворачиваем и соединяем в строку. Если первое равно второму, то тру, нет - фолс.
}

console.log (palindrom('abba'));

//если внутри строки строки попадётся эмодзи, который формируется на основе двух и более символов, то даст фолс.
//слова: "работает на всё, кроме эмодзи" - будет плюсом

