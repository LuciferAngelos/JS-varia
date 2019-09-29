//Объект Set позволяет сохрнять уникальные значения любого типа
let a = new Set();
a.add(1)        //добавляем данные в Сет индекс 0, значение 1
a.add(2)
a.add('Hello')
a.add(1)    //ничего не произошло. При добавлении элемента происходит строгая проверка и если такой элемент уже существует в Сете, то он не добавится.

// a.clear()       //очищает набор 

// a.delete('Hello')       //удаляет элемент из набора

console.log(a)
console.log(a[0])       //нельзя обратиться, как в массиве. Получится undefined
console.log(a.length);      //так же не сработает
console.log(a.size)     //а так сработает - длина Сета, количество элементов в Сете 
console.log(a.has(2))       //метод .has() проверяет на наличие элемента в коллекции
console.log(a.has('2'))        //такой нет, т.к. проверяется на строгое равенство


// for (let i = 0; i < a.size; i++ ) a[i]      //так же не сработает

// for (let i in a) {
//     console.log(i)
// }       // не сработает

// для перебора элементов необходимо использоваться цикл for key of arr

for (let item of a) {
    console.log(item)
}       //а вот этот способ сработал!

//где применять на практике

let arr = [1, 2, 3, 4, 5, 'hello', 5, 3, 6, 1];
let b = new Set(arr);       //к примеру, делаем выборку уникальных элементов
console.log(b)      //элементы не задублировались. Все элементы уникальные.

//преобразование Сета в массив

let bArr = Array.from(b)        //преобразование Сета в массив
console.log(bArr)