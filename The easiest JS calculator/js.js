function plus(){
	let num1 = parseInt(document.getElementById('n1').value); 
	let num2 = parseInt(document.getElementById('n2').value);

	result = num1 + num2;

	let out = document.getElementById('out').innerHTML = result;

}

document.getElementById('minus').onclick = function(){
	let num1 = parseInt(document.getElementById('n1').value); 
	let num2 = parseInt(document.getElementById('n2').value);

	result = num1 - num2;

	let out = document.getElementById('out').innerHTML = result;
}