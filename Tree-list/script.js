let tree = document.querySelector('#tree');		//получаем коллекцию из ul с ИД tree

for (let li of tree.querySelectorAll('li')){		//из выбранного ul с id tree мы получаем все элементы li и проходимся циклом по каждому элементу.
	let span = document.createElement('span'); //создали элемент span
	span.classList.add('show'); //добавили элементу класс
	li.prepend(span);		//добавили элемент перед текстом в ли
	span.append(span.nextSibling)		//добавили элемент после текста в ли
}

tree.onclick = e => {
	if (event.target.tagName != 'SPAN') return;

	let childrenContainer = e.target.parentNode.querySelector('ul');		//получаем родителя цели клика и вложенные элементы в цель клика

	if(!childrenContainer) return		//если нет вложенный детей, то просто ретёрн

	childrenContainer.hidden = !childrenContainer.hidden;

	if (childrenContainer.hidden){
		e.target.classList.add('hide');
		e.target.classList.remove('show')

	}else{
		e.target.classList.add('show');
		e.target.classList.remove('hide')
	}
}