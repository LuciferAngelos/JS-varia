//sptil - разбиваем строку на массив путём разделеням строки указанной подстрокой. Аргументом можно передать различный раздлитель

let a = 'hello, good day to everyone, yey!'

console.log(a.split(','))

//join - объединяет элементы массива в строку

let b = [8, 24, 10];
console.log(b.join('-'));

//forEach - применяет функцию 1 раз к каждому элементу.
//В отличие от map() и filter() не возвращает новый массив

b.forEach((elem, index) => {
    console.log("element - " + (elem) * 2);
    console.log('index of element - ' + (index))
})

console.log(b)      //массив не изменился