(function(){
	let canvasBody = document.querySelector('#canvas'),
		canvas = canvasBody.getContext('2d'),

		w = canvasBody.width = window.innerWidth,
		h = canvasBody.height = window.innerHeight,

		opts = {
			particleAmount: 50,

			backgroundColor: '#222',
			particleColor: '#fcfcfc',

			defaultSpeed: 1,
			addedSpeed: 2,

			defaultRadius: 2,
			addedRadius: 2
		},

		particles = [],		//массив для объектов, летающих на экране
		Particle = function(Xpos, Ypos){
			
			this.x = Xpos || Math.random() * w;		//Если передан аргумент, то позиция равна аргументу, если нет, то рандомные точки по горизонтали.  Идеентичные записи
			this.y = Ypos ? Ypos: Math.random() * h;		//Если передан аргумент, то позиция равна аргументу, если нет, то рандомные точки по вертикали. Идеентичные записи

			this.speed = opts.defaultSpeed + Math.random() * opts.addedSpeed;		//минимальная скорость + рандомная скорость
			this.directionAngle = Math.floor(Math.random()*360);
			this.color = opts.particleColor;
			this.radius = opts.defaultRadius + Math.random() * opts.addedRadius;
			this.d = {		//направление, direction
				x: Math.cos(this.directionAngle) * this.speed,
				y: Math.sin(this.directionAngle) * this.speed
			}

			this.update = function(){
				this.border()
				this.x += this.d.x;
				this.y += this.d.y;
			};

			this.border = function (){
				if(this.x >= w || this.x <= 0){
					this.d.x *= -1		//переворачиваем угол
				};
				if(this.y >= h || this.y <= 0){
					this.d.y *= -1		//переворачиваем угол
				};

				this.x > w ? this.x = w: this.x;		//если х больше ширины, то х становится равен ширине
				this.y > h ? this.y = h: this.y;		//если у равен высоте, то у становится равен высоте
				this.x < 0 ? this.x = 0: this.x
				this.y < 0 ? this.y = 0: this.y

			};

			this.draw = function(){
				canvas.beginPath();
				canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				canvas.closePath();
				canvas.fillStyle = this.color;
				canvas.fill();
			}
		},
		checkDistance = function(x1,y1,x2,y2){
			return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))		//квадратный корень из суммы разниц двух элементов в квадрате 
		};

		function setup(){		//заполняет массив объектами

			for(let i = 0; i < opts.particleAmount; i++){
				particles.push(new Particle());
			}
			console.log(particles)
			window.requestAnimationFrame(loop);
		}

		function loop(){
			canvas.fillStyle = opts.backgroundColor;
			canvas.fillRect(0,0,w,h);
			for(let i = 0; i < particles.length; i++){
				particles[i].update();
				particles[i].draw();
			}
			window.requestAnimationFrame(loop);
		}

		setup();

		canvasBody.addEventListener('click', (e) => {
			particles.push(new Particle(e.pageX, e.pageY))
		});





})();