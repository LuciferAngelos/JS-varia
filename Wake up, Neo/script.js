const t = [
'Wake up, Neo!\n',
'Matrix has you!\n',
'Vstavai i idi rabotai!\n'
];

function typeText() {
	let line = 0;
	let count = 0;
	let out = '';
	let htmlOut = document.querySelector('.out');

	function typeLine(){ 		//рисуем строку
		let interval = setTimeout(function(){
			out += t[line][count];
			htmlOut.innerHTML = out + '|';

			count++;

		//Проверки.
		//не закончилась ли строка

		if(count >= t[line].length){
			count = 0;
			line++

			if(line == t.length){
				clearTimeout(interval);		//остановили таймаут
				htmlOut.innerHTML = out; 		//убираем вертикальную черту
				return true
			}
		}

		typeLine();

		},getRandomInt(getRandomInt(350) * 2.5) );		//такие пляски с бубном для совсем рваного интервала

		

	}

	typeLine()

}

function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max))
}

typeText()