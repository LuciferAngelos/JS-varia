let canvasBody = document.querySelector('#canvas'),
	canvas = canvasBody.getContext('2d'),

	w = canvasBody.width = window.innerWidth,
	h = canvasBody.height = window.innerHeight,

	opts = {
		radius: 30,
		color: 'hsl(hue, 100%, 40%)'
	},

	tick = 0,
	currentHue = 0,

	painting = false;

canvasBody.addEventListener('mousedown', () => {
	painting = true;
	console.log('Down')
})

canvasBody.addEventListener('mouseup', () => {
	painting = false;
	console.log('Up')
})

canvasBody.addEventListener('mousemove', (e) => {
	if(painting){
		let posX = e.pageX,
			posY = e.pageY;

		tick++;
		if(!(tick % 1)){		//если нет остатка. Скорость смены цветов
			if(currentHue != 356){		//изменение каждые 10 тиков
				currentHue++
			}else{
				currentHue = 0;
			}
		}
		let currentColor = opts.color.replace('hue', currentHue)
		canvas.fillStyle = currentColor;
		canvas.beginPath();
		canvas.arc(posX, posY, opts.radius, 0, Math.PI * 2);
		canvas.fill();
	}
})