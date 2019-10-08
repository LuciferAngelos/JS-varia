let a = [5,6,7];
let b = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

let out = ''
// console.log(b)

// for (let i = 0; i < b.length; i++){
// 	let c = b[i]
// 	for (let k = 0; k < c.length; k++){
// 		console.log(c[k])
// 	}
// }

// for (let i = 0; i < b.length; i++){
// 	let d = b[i]
// 	for (let k = d.length - 1; k >= 0; k--){
// 		console.log(d[k])
// 	}
// }

for (let i = 0; i < b.length; i++){
	for(let k = 0; k < b[i].length; k++){
		// console.log(b[i][k])
		out += b[i][k] + ' ';
	}
	out += '<br>';
}

document.querySelector('.out').innerHTML = out;
out = '';

for (let i = 0; i < b.length; i++){
	for(let k = 0; k < b[i].length; k++){
		// console.log(b[i][k])
		if(b[i][k] > 4){
			out += b[i][k] + ' ';
		}
	}
	out += '<br>';
}

console.log(out)

let x = [1,0,0,0,0];
document.querySelector('.out2').innerHTML = x;
let k = 0;
document.querySelector('button').onclick = () => {
	if (k + 1 < x.length){
		x[k] = 0;
		x[k + 1] = 1;
		k++;
	}else{
		k = 0;
		x[x.length - 1] = 0;
		x[k] = 1;
	}

	document.querySelector('.out2').innerHTML = x;

}