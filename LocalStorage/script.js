window.addEventListener('storage', function(){
	console.log('Local storage changed')
	document.querySelector('.out').textContent = localStorage.getItem('b1')
})		//событие отслеживает изменение в локал сторейдж на других страницах в данном хосте

//В Local Storage данные записываются в виде строки, соответственно, перед выводом нужно пропарсивать её через JSON

localStorage.setItem('data', 5);		//Записываем в локал сторейдж. Параметры - ключи и значение
console.log(localStorage.getItem('data'));		//получаем значение по ключу из локал сторейдж

let a = [3,4,5];

localStorage.setItem('a', a);		//записали массив в локал сторейдж
//В Local Storage данные записываются в виде строки, соответственно, перед выводом нужно пропарсивать её через JSON

let b = localStorage.getItem('a');		//присвоили переменной значение из локал сторейдж

console.log(b)		//получили массив из ЛС
console.log(b[0])		//получили первый элемент из ЛС
console.log(b[1])		//получим ',' запятую - первый элемент строки
console.log(typeof b)		//получили STRING


localStorage.setItem('b', JSON.stringify(a));		//записали массив в локал сторейдж

let c = localStorage.getItem('b');		//присвоили переменной значение из локал сторейдж
c = JSON.parse(c)		//перед выводом спарсиваем данные из локал сторейдж
console.log(c)		//получили массив из ЛС
console.log(c[0])		//получили первый элемент из ЛС
console.log(c[1])		//получим ',' запятую, если не будем применять методы stringify перед записью в ЛС и при выводе делать JSON.parse()! Т.е., второй элемент строки
console.log(typeof c)		//получили STRING в случае, когда мы не применим stringify, а затем parse. И получим Object, если это сделали

const d = {
	hello: 5,
	k: 2,
	4: 'hi'
};

localStorage.setItem('c', JSON.stringify(d));		//записали массив в локал сторейдж

let e = localStorage.getItem('c');		//присвоили переменной значение из локал сторейдж
e = JSON.parse(e)		//перед выводом спарсиваем данные из локал сторейдж
console.log(e)		//получили массив из ЛС
console.log(typeof d)	


//localStorate.removeItem() - удаление элемента из ЛС
//localStorate.clear() - очищение ЛС

document.querySelector('.clear').onclick = () => {
	localStorage.clear()
}
