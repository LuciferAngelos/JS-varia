let canvasBody = document.querySelector('#canvas'),
	canvas = canvasBody.getContext('2d'),

	w = canvas.width = window.innerWidth,
	h = canvas.height = window.innerHeight,

	color = {
		black: 'black',
		yellow: 'yellow',
		blue: 'blue',
		red: 'red',
		brown: '#84401a',
		skin: '#ffbd71',
		transparent: 'rgba(0,0,0,0)'
	},
	opts = {
		pixelSize: 10
	},

	picture = [
	      "---rrrrrr----",		//r - red
	      "--rrrrrrrrrr-",
	      "--hhhsss+s---",		//h - hair, s - skin
	      "-hshssss+sss-",		//+ - черный
	      "-hshhssss+sss",		//b - blue
	      "-hhsssss++++-",		// - - transparent
	      "---ssssssss--",		//y - yellow
	      "--rrbrrrr----",
	      "-rrrbrrbrrrr-",
	      "rrrrbbbbrrrr-",
	      "ssrbybbybrss-",
	      "sssbbbbbbsss-",
	      "ssbbbbbbbbss-",
	      "--bbb--bbb---",
	      "-hhh----hhh--",
	      "hhhh----hhhh-"
	      ];


init();

function initArt(){
	for(let i = 0; i < picture.length; i++){
		for(let k = 0; k < picture[i].length; k++){		//picture[i] - символ в каждой строке(элементе) массива
			if(picture[i].charAt(k) == '-'){
				newRect(k, i, color.transparent)
			}else if(picture[i].charAt(k) == '+'){
				newRect(k, i, color.black)
			}else if(picture[i].charAt(k) == 'r'){
				newRect(k, i, color.red)
			}else if(picture[i].charAt(k) == 'h'){
				newRect(k, i, color.brown)
			}else if(picture[i].charAt(k) == 's'){
				newRect(k, i, color.skin)
			}else if(picture[i].charAt(k) == 'y'){
				newRect(k, i, color.yellow)
			}else if(picture[i].charAt(k) == 'b'){
				newRect(k, i, color.blue)
			}else{
				newRect(k, i, color.transparent)
			}
		}

	}
}

function newRect(col, row, color){
	canvas.fillStyle = color;
	canvas.fillRect(col*opts.pixelSize, row * opts.pixelSize, opts.pixelSize, opts.pixelSize)
}

function getMaxLength(array){
	let allLength = [];
	for(let i = 0; i<array.length; i++){
		allLength.push(array[i].length)
	}
	return Math.max.apply(null, allLength)
}

function init(){
	w = canvasBody.width = getMaxLength(picture)*opts.pixelSize;
	h = canvasBody.height = picture.length*opts.pixelSize;
	initArt()
}