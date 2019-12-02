document.addEventListener('DOMContentLoaded', () => {

    //функция для склонения числительных
    //можно поискать склонение числительных js
    //n - число
    //t - массив из 3 вариантов склонения
    const declOfNum = (n, t) => t[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]];

    const data = [      //составляем данные для подсчёта в рейндже
        [[1, 6500, 2, 15000], [2, 12000, 4, 30000], [3, 18000, 7, 52500], [4, 24000, 12, 90000], [6, 35000, 16, 127500]],           //первые 5 массивов - верхний ряд. Массивы внутри массивов - второй ряд
        [[1, 7000, 2, 15000], [2, 13000, 5, 37500], [3, 19000, 10, 75000], [5, 30000, 13, 112500]],
        [[1, 7000, 3, 22500], [2, 13000, 8, 60000], [4, 24000, 11, 97500]],
        [[1, 7000, 5, 37500], [3, 18000, 10, 75000]],
        [[2, 12000, 5, 37500]],
    ];

    const start = document.querySelector('#start'),
        end = document.querySelector('#end'),
        dayThis = document.querySelector('.day_this'),
        moneyThis = document.querySelector('.money_this'),
        dayOther = document.querySelector('.day_other'),
        moneyOther = document.querySelector('.money_other'),
        compareRange = document.querySelector('.compare-range');


    //функция для склонения числительных
    //n - число
    //t - массив из 3 вариантов склонения
    //const declOfNum = (n,t) => t [ (n %1 00 > 4 && n % 100 < 20) ? 2 : [2,0,1,1,1,2] [(n % 10 < 5) ? n % 10 : 5]]


    const showResult = arr => {
        const [dayT, moneyT, dayO, moneyO] = arr;
        const month = ['месяц', 'месяца', 'месяцев']
        dayThis.textContent = dayT + ' ' + declOfNum(dayT, month);
        moneyThis.textContent = moneyT + 'RUB';
        dayOther.textContent = dayO + ' ' + declOfNum(dayO, month);
        moneyOther.textContent = moneyO + 'RUB';
    }

    const calcResult = () => {
        const startVal = parseInt(start.value);
        const endVal = parseInt(end.value);

        if (start.value === end.value) {
            // debugger;       //делаем программный брейк поинт и браузер автоматически перебросит нас на код в консоли
            showResult([0, 0, 0, 0])
        } else {
            showResult(data[startVal][endVal - startVal - 1])      //Вычитаем текущий индекс и минус 1. Избавляемся от пустых массивов в data
        };


    }

    function handler() {
        if (start.value > end.value) {       //проверяем, чтобы верхний ползунок не мог быть дальше нижнего
            start.value = end.value = this.value        //присваиваем this.value к nd.value и к start.value. Так нижнее значение никогда не будет меньше верхнего
            end.value = +   start.value + 1;       //таким образом мы можем реализовать, чтобы нижнее значение всегдн было на 1 больше верхнего. И переводим в числовой тип, потому что value всегда строка
        }

        calcResult();
    }

    const changeRange = e => {
        const target = e.target;
        if (target.classList.contains('change_range')) {
            const parents = target.closest('#started') || target.closest('#ended');        //ищем ближайших родителей с определённым ИД, т.к. в нас большая вложенность и записываем в переменную
            const range = parents.querySelector('.range');

            range.value = target.dataset.level;     //присваиваем к вэлью рэнджа значение дата атрибутов

            handler.apply(range)        //применяем метод .apply(), чтобы забиндить значение this в стрелочную функцию
        }
    }

    start.addEventListener('change', handler);
    end.addEventListener('change', handler);

    compareRange.addEventListener('click', changeRange);

    document.querySelectorAll('.change_range').forEach(elem => elem.style.cursor = 'pointer')

    calcResult()

})