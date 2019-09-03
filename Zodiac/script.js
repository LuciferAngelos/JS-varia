document.querySelector('button').onclick = function (){
	let day = +document.querySelector('#day').value;
	let month = +document.querySelector('#month').value;		//переводим в число, потому что из велью приодит строка, а не число

	// if((month == 12 && day >= 22) || (month == 1 && day <= 19)) alert('Козерог')

	// if(month == 12 && day >= 22) alert ('Козерог')
	// if(month == 1 && day <= 19) alert ('Козерог')

	if(month == 1){
		if(day <= 19) alert ('Козерог')
		else alert ('Водолей')
	}

}
