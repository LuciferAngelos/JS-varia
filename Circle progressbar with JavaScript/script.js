const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;		//получаем данные по радиусу
const circumfrence = 2 * Math.PI * radius; 		//получаем длину окружности по формуле 2Пи Р
const input = document.querySelector('input');

input.addEventListener('change', function(){
	setProgress(input.value);
})


circle.style.strokeDasharray = `${circumfrence} ${circumfrence}`;
circle.style.strokeDashoffset = `${circumfrence}`;

function setProgress(percent){
	const offset = circumfrence - percent / 100 * circumfrence;
	circle.style.strokeDashoffset = offset;
}

setProgress(10)
