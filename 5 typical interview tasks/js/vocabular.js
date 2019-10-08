//Парсим словарь
let fileInput = document.querySelector('#file-input');

fileInput.addEventListener('change', function(event){
	//onchange

	let file = fileInput.files[0];
	let reader = new FileReader();
	reader.onload = function(event){
		// console.log(reader.result);
		palindrom(reader.result.split('\r\n'))
	}
	reader.readAsText(file);
});

function palindrom(arr){
	 for(let i = 0; i < arr.length; i++){
	 	console.log('.');
	 	str2 = arr[i].toLowerCase().split('').reverse().join('');
	 	if(str2 == arr[i]){
	 		console.log(arr[i]);
	 	}
	 }
}