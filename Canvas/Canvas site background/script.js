let canvasBody = document.querySelector('#canvas'), 
	canvas = canvasBody.getContext('2d'),
	w = canvasBody.width = window.innerWidth,		//канвас будет по ширине окна
	h = canvasBody.height = window.innerHeight;

let start = Date.now();

	opts = {
		color: 'rgba(39,173,96,alpha)',		//задаём цвет
		spawnOpacity: 1,
		size:50,		//размер квадратов
		sizeRandom: 10,
		sparkLife: 0.05,
		count: 1		//количество
	}

	function anim(){
		window.requestAnimationFrame(anim);		//запускаем анимацию

		step();
	}

function step(){
	let fillColor = opts.color.replace('alpha', opts.spawnOpacity)		//функция заменяем альфа канал на непрозрачность
	canvas.fillStyle = fillColor;		//готовим квадраты
	for(let i = 0; i < Math.round(opts.count); i++){
		let random = Math.random() * opts.sizeRandom;		//квадраты будут разной величины
		canvas.fillRect(-(opts.size / 2) + Math.random() * w, -(opts.size / 2) + Math.random() * h, opts.size + random, opts.size + random);	//делаем прямоугольник в рандомном порядке. -(opts.size / 2) - чтобы квадраты спавнились и вверху
	}
	
	canvas.fillStyle = `rgba(255,255,255, ${opts.sparkLife})`;
	canvas.fillRect(0,0,w,h)
}

let animate = setInterval(function(){
	let timePassed = Date.now() - start;
	if(timePassed >= 25){
		clearInterval(animate);
		return
	}
	anim(timePassed)
}, 20)