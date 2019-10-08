document.getElementById('r1').oninput = cssGenerator;

function cssGenerator(){
	let div = document.getElementById('test');
	let textarea = document.querySelector('#out');
	div.style.borderRadius = this.value + 'px';

	out.innerHTML = `-webkit-border-radius ${this.value}px; \n`;
	out.innerHTML += `border-radius ${this.value}px;`;
}