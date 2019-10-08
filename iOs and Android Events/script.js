let a1 = 0
document.querySelector('.one').onclick = function(){
	a1++
	document.querySelector('.out-1').innerHTML = 'click ' + a1;
}

let a2 = 0
document.querySelector('.two').ondblclick = function(){
	a2++
	document.querySelector('.out-2').innerHTML = 'dblclick ' + a2;
}

let a3 = 0
document.querySelector('.three').onmousemove = function(){
	a3++
	document.querySelector('.out-3').innerHTML = 'mousemove ' + a3;
}

let a4 = 0
document.querySelector('.four').onmouseenter = function(){
	a4++
	document.querySelector('.out-4').innerHTML = 'mouseenter ' + a4;
}

let a5 = 0
document.querySelector('.five').onmouseleave = function(){
	a5++
	document.querySelector('.out-5').innerHTML = 'mouseleave ' + a5;
}