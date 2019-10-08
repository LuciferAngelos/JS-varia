// вариант 1

// let flag = false;		//флаг? Техническая переменная?
// document.onkeydown = function(event){		//событие по нажатии клавиши. Опускании её
// 	if (event.code == 'AltLeft') flag = true;
// 	if (event.code == 'KeyN' && flag){ 
// 		flag = false;		//отключаем, чтобы не было залипания клавиш при удерживании
// 		console.log('work')
// 	}
// }


//вариант 2
document.onkeydown = function(event){		//ещё один способ
	if (event.code == 'AltLeft'){
		document.onkeyup = function (event){
			// console.log (event);
			if(event.code == 'KeyN'){
				console.log('hihi')
			}else{
				document.onkeyup = null;
			}
		}
	}
}