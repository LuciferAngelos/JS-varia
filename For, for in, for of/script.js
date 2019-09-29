let arr = [4, 5, 6]
let pars = document.getElementsByTagName('p');
console.log(pars)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }        //стандартный цикл

// for (let i in arr) {
//     console.log('ключ - ' + i)    //выводит ключи
//     console.log('значение - ' + arr[i])     //выводит значения ключей 
// }

// console.log('hello')

// for (let item of arr) {
//     console.log(item)      //выводит значения ключей
//     console.log(arr[item])      //не сработает  
// }


// for (let i = 0; i < pars.length; i++) {
//     console.log(pars[i])
// }   

for (let i in pars) {
    console.log('ключ - ' + i)    //выводит странное при переборе коллекции
    console.log('значение - ' + pars[i])     //выводит странное при переборе коллекции
}

console.log('hello')

for (let item of pars) {
    console.log(item)      //выводит значения ключей
    console.log(pars[item])      //не сработает  
}