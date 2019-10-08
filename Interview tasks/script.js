let a = [1,2,346,457,234,123];
let b = ['sdf',123,123,532,2,3,3];
let c = [42,2,6,2,,2,6,2,23,4,2,34,23,4];
let d = [2,3,4,6,2,1,6,7,3,5,345,34,5,1]

console.log(a.reverse());		//самый простой способ. Собсна, и я его знал...

function reverse(arr){
	return arr.reverse()
}

console.log(reverse(b))		//второй способ

function rev1(arr){
	res = [];
	arr.forEach( element => {		//мы берём первый элемент из начального массива и пихаем его в пустой массив. Каждый раз элементы будут сдвигаться вперёд и получим перевернутый массив
		res.unshift(element);

	})

	return res;
}

console.log(rev1(c))

function rev2(arr){
	let res = [];
	for(let i = 0; i < arr.length; i++){
		res.unshift(arr[i])
	}
	return res
}

console.log(rev2(d))