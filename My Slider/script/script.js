window.addEventListener('DOMContentLoaded', function(){
	let slideIndex = 1,
		slide = document.querySelectorAll('.slider-image'),
		prev = document.querySelector('.button-backward'),
		next = document.querySelector('.button-forward'),
		dotsWrap = document.querySelector('.slider-dots-wrapper'),
		dots = document.querySelectorAll('.slider-dots');

	showSlides(slideIndex);

	function showSlides(n){
		if(n > slide.length){
			slideIndex = 1;
		};
		if (n < 1){
			slideIndex = slide.length;
		}

		for(let i = 0; i < slide.length; i++){
			slide[i].style.display = 'none';
		}

		for(let i = 0; i < dots.length; i++){
			dots[i].classList.remove('slider-dots-active');
		}

		slide[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('slider-dots-active');
	}

	function plusSlide(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	next.addEventListener('click', function(){
		plusSlide(1)
	})

	prev.addEventListener('click', function(){
		plusSlide(-1)
	});

	dotsWrap.addEventListener('click', function(event){		//делегирование через родителя
			for(let i = 0; i < dots.length + 1; i++){
				if(event.target.classList.contains('slider-dots') && event.target == dots[i-1])		//если цель клика содержит класс dot и цель совпадает с оопределённой точкой
					currentSlide(i);		//переходим к текущему слайду
			}
		});






});