
window.onscroll = function(){

	let scrollElem = document.getElementById('scrollTop');
	if(document.body.scrollTop > document.documentElement.clientHeight){
		scrollElem.style.opacity = '0';
	}else{
		scrollElem.style.opacity = '1';

	}
};

let timeOut;
function goUp(){
	let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop)		//получаем максимальное значение из двух значений
	if(top > 0){
		window.scrollBy(0, -100);
		timeOut = setTimeout('goUp()', 20);
	}else{
		clearTimeout(timeOut);
	}
}

console.log(document.querySelector('#color').value)