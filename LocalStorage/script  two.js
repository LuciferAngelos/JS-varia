let count = 0;
document.querySelector('.ls').onclick = () => {
	count++
	localStorage.setItem('b1', count)
}		//кликаем на кнопку, локалсторейдж изменяется, при этом на первой странице появляется сообщение в консоли Local storage changed