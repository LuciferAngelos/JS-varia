document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('.c-hamburger').addEventListener('click', function(e){		//передаём объект события
		e.preventDefault();
		// this.classList.toggle('is-active');
		if(this.classList.contains('is-active')){
			this.classList.remove('is-active');
			document.querySelector('#menu').classList.remove('nav-active');
			document.body.classList.remove('body-active');
		}else{
			this.classList.add('is-active');
			document.querySelector('#menu').classList.add('nav-active');
			document.body.classList.add('body-active');
		}
	});
});

//если без DOMContentLoaded (мой личный костыль), то скрипт не выполняется, если забит в шапке документа
//если поставить в конец body, то можно без указания загрузки контента сразу писать