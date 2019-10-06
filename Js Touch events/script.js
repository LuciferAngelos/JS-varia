document.querySelector('.block-1').addEventListener('touchstart', myTouch)      //touchstart - событие тапа по экрану мобильного. Начало тапа
document.querySelector('.block-1').addEventListener('touchend', myTouchEnd)      //touchend - событие тапа по экрану мобильного. Конец тапа
document.querySelector('.block-2').addEventListener('touchmove', myTouchMove)      //touchmove- событие тапа по экрану мобильного. Двигаем пальцем по экрану

function myTouch(event) {
    console.log(event)
    console.log('touch')
    document.querySelector('.out-2').innerHTML = event.touches.length;      //количество тапнутых пальцев
    document.querySelector('.out-1').innerHTML += 'work'
}

function myTouchEnd(event) {

    document.querySelector('.out-3').innerHTML += 'end'
}

function myTouchMove(event) {
    event.preventDefault()      //предотвращаем движене блока при таче
    document.querySelector('.out-3').innerHTML += 'move '
    return false        //предотвращаем движене блока при таче
}