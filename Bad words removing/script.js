const abuse = ['Hi', 'Blin', 'Goose'];

document.querySelector('button').onclick = () => {
	let text = document.querySelector('textarea').value;
	console.log(text)

	for(let i = 0; i < abuse.length; i++){
		//abuse[i]
		while(text.indexOf(abuse[i]) != -1){
			text = text.replace(abuse[i], star(abuse[i].length))
		}
	}

	document.querySelector('#out').innerHTML += '<div class="commet">' + text + '</div>';
}

function star(n){
	let out = '';
	for(let i = 0; i < n; i++){
		out += '*';
	}

	return out;
}