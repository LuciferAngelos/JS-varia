document.querySelector('.one').onclick = function (event) {
    console.log(event)      //глобальный объект события 
    console.log('click!')
}

// document.querySelector('.two').onclick = function (event) {
//     console.log('click again!')
// }

document.querySelector('.two').ondblclick = (event) => {
    console.log('double')
}

document.querySelector('.two').oncontextmenu = (e) => {
    /* e.preventDefault() */      //можно так отключить контекстное меню при клике ПКМ
    console.log('right mouse button')
    return false        //либо так отключить
}


// let w = 100;

// document.querySelector('.three').onmousemove = () => {
//     document.querySelector('.three').style.width = w + 'px';
//     w++
// }        //увеличение ширины блока при движении мыши

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red'
}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green'
}

document.querySelector('.three').onmousedown = () => {      //нажал мышь
    document.querySelector('.three').style.background = 'orange'
}

document.querySelector('.three').onmouseup = () => {        //отпустил мышь
    document.querySelector('.three').style.background = 'blue'
}

let p = 10;

document.querySelector('button').onclick = () => {
    p++
    document.querySelector('progress').value = p;
}
