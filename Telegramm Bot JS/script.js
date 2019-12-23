//1. Нам нужен телеграмм бот https://telegram.me/BotFather BotFather
//2. Следуем инструкциям - /newbot - создаём нового бота. Вводим ему имя js34bot, вводим ему юзернейм. Должно кончаться на бот js34bot_bot
//3. Нам дадут сгенерированный токен. Его не сообщать 1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y
//4. добавляем себе бота, ищем его по js34bot и js34bot_bot и пишем ему пару приветственных сообщений для теста
//5. подключаемся к апи телеграмма https://api.telegram.org/bot1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y/getUpdates

//6. пример отправки сообщения в личку
//https://api.telegram.org/bot1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y/sendMessage?chat_id=666960908&text=hi_i_am_answering_you

// https://api.telegram.org/ - адрес апи телеги
// bot1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y/ - ид и токен бота
// sendMessage - отправляем сообщение
// ?chat_id=666960908 - в чат с ид вот таким вот
// &text=hi_i_am_answering_you - и с вот таким от текстом

//7. Отправка сообщения в группу. Так же берём ИДшник группы. Он будет с МИНУСОМ -335375155
// https://api.telegram.org/bot1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y/sendMessage?chat_id=-335375155&text=hi_i_am-answering_you

document.querySelector('button').onclick = () => {
	
	const token = '1063372708:AAFV9iuBMreduR5cIXtLtsmcsDWTR1_dF3Y';
	const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-335375155&text=`;
	let messageTB = document.querySelector('.message').value;

	let xhttp = new XMLHttpRequest();;

	xhttp.open('GET',url+messageTB, true);
	xhttp.send();
}