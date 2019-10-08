document.addEventListener('DOMContentLoaded',function(){

	let colors = document.querySelectorAll('.color');
	let arrow = document.getElementsByClassName('img-arrow')[0];
	let colorsField = document.querySelector('.drop');
	let body = document.getElementsByTagName('body')[0];
	let menu = document.querySelector('.menu>p');

	menu.onclick = function(){
		body.style.backgroundColor = 'initial';
	}


	for(let i = 0; i < colors.length; i++){
		colors[i].style.backgroundColor = colors[i].dataset.color;
		colors[i].style.display = 'none';
	}

	arrow.addEventListener('click', function(){
		if(!this.classList.contains('active')){

			this.classList.add('active');
			colors.forEach((el) => {
				el.style.display = 'block';
			})
		}else{
			this.classList.remove('active');
			colors.forEach((el) => {
				el.style.display = 'none';
			})
		}
	});

	colorsField.addEventListener('click', function(event){
		for(let i = 0; i < colors.length; i++){
			if(event.target.classList.contains('color') && event.target == colors[i]){
				body.style.backgroundColor = colors[i].dataset.color;
			}
	}
		
	})





})