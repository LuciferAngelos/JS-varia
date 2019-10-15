//promise - довольно похожий аналог fetch

let a = new Promise ((resolve, reject) => {
	fetch('http://getpost.itgid.info/index2.php')
		.then(data => {
			resolve(data.text());
		})
});


let b = new Promise ((resolve, reject) => {
	fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=world')
		.then(data => {
			resolve(data.text());
		})
});

Promise.all([a,b]).then(value => {		//дожидается наступления обоих промисов и потом выполняет оба
	console.log(value)
	console.log(value[0])
	console.log(value[1])
})

// a.then(data => {
// 	console.log(data)
// 	//действия с кодом
// })

// b.then(data => {
// 	console.log(data)
// 	//действия с кодом
// })