let a = 9;

function f1(param) {
    // document.querySelector('.out-1').textContent = param;
    return 100 * param
};

document.querySelector('.task').onclick = function () {      //используется функция-обёртка для обработки события онклик. Если её не будет, то функция выполнится сразу.
    console.log(f1(12));
    document.querySelector('.out-1').textContent = f1(234) / 2
}
