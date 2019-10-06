let a = [4, 5, 12, 2000, 1, 0, -2];
//метод map() создаёт новый массив с результами вызова функции для каждого элемента
//array.map(callback function(){}, arg)
//пример коллбэк функции - function(item, index, array){}
//удобен для последовательного перебора массива и возврата какого-то результата

let b = a.map((item, index) => {
    return item * 5
})

// let b = a.map((item, index) => item * 5)     более короткий синтаксис

console.log(b)

//метод filter() создаёт новый массив только с теми элементами, которые соответствуют определённому условию
//array.filter(callback function, arg)

let c = [1, 2, 34, 7, 12, 4, 5, -3, -4, 0, 23];

let d = c.filter(function (item, index) {
    if (item > 0) return true
})

console.log(d)