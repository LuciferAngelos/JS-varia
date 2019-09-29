// https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22

// https://samples.openweathermap.org/     адрес
// data/2.5/        версия апи
// weather      что запрашиваем
// ?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22      GET-запрос

fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&&appid=70e1ed322b02acbc57d443dd91065f3e')       //интерфейс работы с GET-запросам для JS

    .then(function (resp) { return resp.json })     //шлёт запрос после подключения к адресу. Получает результат ответа fetch и преобразует в джейсон формат, в массив
    .then(function (data) {     //получит данные и выведет в консоль
        console.log(data);
        document.querySelector('.packade-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
        document.querySelector('.disclamer').textContent = data.weather[0]['description'];
        // https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/' ${data.weather[0]['icon']}'02d@2x.png`
    })
    .catch(function () {
        //catch any errors.
    })