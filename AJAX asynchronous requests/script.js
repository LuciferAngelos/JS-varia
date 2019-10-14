//AJAX - asynchronus javascript and XML. Можно послать в фоновом режиме послать запрос на сервер, получить ответ и работать с ним.

//XMLHttpRequest - это специальное API для обмена данными между клиентом и сервером. Для начала работы создаётся новый экзепеляр класса - var myRequest = new XMLHttpRequest()

var xhttp = new XMLHttpRequest();		//может посылать запросы на различные ресурсы

//возможные состояния запроса:
//0 - клиент создан
//1 - метод open() вызван
//2 - вызван метод send() и получены заколовки и код ответа (200-399 - сервер ок, 404, 501 и т.д.)
//3 - загрузка, если значение responseType равно 'text' или пустой строка, то responseText содержит частичные данные
//4 - операция завершена

//кроме того, есть статус ответа на запрос

xhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200){
		myFunction(this.responseText)		//ответ на запрос в виде строки или нулл, в случае, если ответ не успешен или не получен
	}	
}

xhttp.open('GET', 'http://getpost.itgid.info//index2.php', true)		//формируем запрос. 1 параметр - вид метода, 2 параметр - куда отправляем, 3й параметр - синхронно\асинхронно 
xhttp.send();

function myFunction(data){
	console.log(data);
}

let xhttp2 = new XMLHttpRequest();	

xhttp2.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200){
		myFunction2(this.responseText)	
	}
}

xhttp2.open('POST', 'http://getpost.itgid.info//index2.php', true)		//формируем запрос. 1 параметр - вид метода, 2 параметр - куда отправляем, 3й параметр - синхронно\асинхронно 
xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')		//application/x-www-form-urlencoded - параметр, чтобы запрос обрабаывается, как обычная форма
xhttp2.send();

function myFunction2 (data){
	
	console.log(data);
	console.log('POST');
}