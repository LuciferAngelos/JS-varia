const images = document.querySelectorAll('img');
const options = {
	root: null,		//элемент, относительно которого мы отслеживаем
	rootMargin: '0px',		//доп. отступы
	treshold: 0.1		//порог срабатывания
}

function handleImg(myImg, observer){
	myImg.forEach(myImgSingle => {
		console.log(myImgSingle.intersectionRatio);
		if (myImgSingle.intersectionRatio > 0){
			loadImage(myImgSingle.target);
		}
	})
}

function loadImage(image){
	image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);		//специальный объект в джс, который позволяет отслеживать, когда что-то попадает в зону видимости

images.forEach(img => {
	observer.observe(img)
});