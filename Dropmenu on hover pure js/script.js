let el = document.getElementsByClassName('menu-item');

for (let i = 0; i < el.length; i++){
	el[i].addEventListener('mouseenter', showSub, false);
	el[i].addEventListener('mouseleave', hideSub, false);
}

function showSub(){
	if (this.children.length > 1) {		//функция проверяет, есть ли у данного элемента потомки больше 1
		this.children[1].style.height = 'auto';		//добавляем стили для элемента с индексом 1
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	}else{
		return false
	}
}

function hideSub(){
	if (this.children.length > 1) {		//функция проверяет, есть ли у данного элемента потомки больше 1
		this.children[1].style.height = '0';		//добавляем стили для элемента с индексом 1
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	}else{
		return false
	}
}