(function () {

	let canvasBody = document.querySelector('#canvas'),
		canvas = canvasBody.getContext('2d'),

		w, h,
		resize = function () {		//адаптив
			let w = canvasBody.width = window.innerWidth;
			let h = canvasBody.height = window.innerHeight;
		},
		pi = Math.PI,
		pi2 = pi * 2,
		piD2 = pi / 2,
		tick = 0,
		opts = {
			canvas: {
				amount: 10,
				bgc: 'rgba(20,20,20,1)'
			},
			size: 10,
		},
		Colors = [
			"#2ecc71", //green
			"#3498db", //blue
			"#e67e22", //orange
			"#e74c3c", //red
			"#ecf0f1", //white
			"#9b59b6", //purple
			"#2c3e50", //night-blue
		],
		particles = [],
		Mouse = new Vector2(w / 2, h / 2),
		Particle = function (x, y) {
			this.pos = new Vector2(x || 0, y || 0);
			this.acc = new Vector2();
			this.speed = new Vector2();
			this.color = Colors[Math.floor(Math.random() * Colors.length)];
			this.maxSpeed;
		};

	Particle.prototype.update = function () {
		this.speed.add(this.acc);		//в скорость добавляем ускорение
		this.pos.add(this.speed);		//потом к этой позиции добавляем скорость
		// this.acc.set(0);

		return this;
	}
	Particle.prototype.render = function () {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.pos.x, this.pos.y, opts.size, opts.size);
	}
	Particle.prototype.border = function () { }
	Particle.prototype.lookFor = function () { }
	Particle.prototype.force = function () { }		//принудительное ускорение

	function populate() {
		particles = [];
		for (let i = 0; i < opts.canvas.amount; particles[i++] = new Particle(Math.random() * w, Math.random() * h));
	};

	function setup() {
		populate();
		window.requestAnimationFrame(loop)
	}

	function loop() {
		canvas.fillStyle = opts.canvas.bgc;
		canvas.fillRect(0, 0, w, h)
		particles.map(function (P) {
			P.update().render()
		})
		window.requestAnimationFrame(loop);
	}

	window.addEventListener('resize', resize);

	resize()
	setup()

})()

