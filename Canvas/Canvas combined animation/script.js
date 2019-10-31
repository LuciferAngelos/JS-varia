let canvasBody = document.querySelector('#canvas'),
	canvas = canvasBody.getContext('2d'),

	w = canvasBody.width = window.innerWidth,
	h = canvasBody.height = window.innerHeight,

	opts = {
		bulbSize: 60,
		bulbLightColor: '#fcfcfc',
		bgc: 'rgba(66,124,245,alpha)',
		bgcRedrawOpacity: 0.05,
		blinkChance: 0.05
	},

	tick = 0,
	bulbs = [],
	baseRad = Math.PI * 2,

	hAmount = Math.floor(w / opts.bulbSize),		//horizontal горизонтально количество
	vAmount = Math.floor(h / opts.bulbSize)			//vertical вертикально количество шариков

function loop(){
	window.requestAnimationFrame(loop);

	tick++;

	canvas.fillStyle = opts.bgc.replace('alpha', opts.bgcRedrawOpacity);		//каждый тик зарисовывается канвас
	canvas.fillRect(0,0,w,h);

	if(Math.random() < opts.blinkChance){
		let randomV = Math.floor(Math.random() * vAmount),
			randomH = Math.floor(Math.random() * hAmount);

		bulbs[randomV][randomH].spark();
	}
}

function initStuff(){

	for(let i = 0; i < vAmount; i++){
		let lineData = [];
		for(let k = 0; k < hAmount; k++){
			lineData.push(new Bulb())
		}
		bulbs.push(lineData) 
	}
	for(let j = 0; j < vAmount; j++){
		for(let f = 0; f < hAmount; f++){
			bulbs[j][f].reset(f,j)
		}
	}
	loop()
};



function Bulb(){
	this.reset()
};

Bulb.prototype.reset = function(xPos, yPos){
	this.radius = opts.bulbSize / 2;
	this.color = opts.bulbLightColor;
	this.x = xPos * opts.bulbSize + this.radius;
	this.y = yPos * opts.bulbSize + this.radius;
};

Bulb.prototype.spark = function (){
	canvas.fillStyle = this.color;
	canvas.beginPath();
	canvas.arc(this.x, this.y, this.radius, 0, baseRad);
	canvas.fill();
};

initStuff();