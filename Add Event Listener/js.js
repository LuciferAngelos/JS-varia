document.querySelector('#h3').onclick = () => console.log('You`ve pressed H3 ');		//ещё один способ повесить событие
//большим недостатком onclick является практически невозможность повесить несколько событий на элемент

document.querySelector('#h3_1').onclick = helloFunction; //вызываем без круглых скобок. Если поставим скобки - функция выполнится моментально и событие запишется в онклин. Функция при клике работать не будет потом

function helloFunction(){
	console.log(this)
	console.log('hi');
}

function byeFunction(){
	console.log(this)
	console.log('bye!');
}

document.getElementById('h1').addEventListener('click', helloFunction);
document.getElementById('h1').addEventListener('click', byeFunction);
document.getElementById('h1').removeEventListener('click', byeFunction);		//удаляем событие

//на addEventListener можно повесить несколько событий сразу/ Кроме того, это намного меньше нагружает память компьютера