document.querySelectorAll('.order').forEach((element) => {
	element.onclick = orderFunction;
});

function orderFunction(){
	let speed = document.querySelector('.order[value="speed"]');
	let quality = document.querySelector('.order[value="quality"]');
	let cheap = document.querySelector('.order[value="cheap"]');
	console.log(123);
	if(this.value == 'speed' && quality.checked){
		cheap.checked = false;		
		return true;		//если выполнили функцию и получили фолс, выходим из неё через return true. Замена else\else if
	}

	if(this.value == 'speed' && cheap.checked){
		quality.checked = false;		
		return true;		
	}
	if(this.value == 'cheap' && speed.checked){
		quality.checked = false;		
		return true;		
	}
	if(this.value == 'cheap' && quality.checked){
		speed.checked = false;		
		return true;		
	}
	if(this.value == 'quality' && speed.checked){
		cheap.checked = false;		
		return true;		
	}
	if(this.value == 'quality' && cheap.checked){
		speed.checked = false;		
		return true;		
	}
}