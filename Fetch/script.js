//fetch('адрес, куда стучимся',) - для апи запросов

fetch('http://getpost.itgid.info/index2.php')
    .then(data => {
        console.log(data)
        // console.log(data.text())        //получим промис со статусом Pending
        // data.text().then(data2 => {      //длинная вложенность
        //     console.log(data2)
        // })
        return data.text()      //если стоит return, то данные попадут в следующий .then. Можно писать и без return
    })
    .then(data => {
        console.log(data)
    })

//пример с мозила девелопер + наш пример
fetch("http://getpost.itgid.info/index2.php", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
})
    .then(response => response.text()) // парсит JSON ответ в Javascript объект
    .then(response => {
        console.log(response)
    });