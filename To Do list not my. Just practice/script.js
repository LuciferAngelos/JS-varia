let addMessage = document.querySelector('.message'),
	addButton = document.querySelector('.add'),
	todo = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')){		//получаем данные из локал сторейджа
	todoList = JSON.parse(localStorage.getItem('todo'))		//получаем данные из локалсторейджа и преобразовываем в массив
	displayMessages();
}

addButton.addEventListener('click', function(){
	if(!addMessage.value) return;
	let newTodo = {
		todo: addMessage.value,
		checked: false,
		important: false
	}

	todoList.push(newTodo)
	displayMessages();
	localStorage.setItem('todo', JSON.stringify(todoList))		//записываем в локал сторейдж. Локал сторейдж принимает только строку, поэтому объектом джейсон и методом стрингифай переводим массив тудулист в строку
	addMessage.value = '';
});



function displayMessages (){
	let displayMessage = '';
	if(todoList.length === 0) todo.innerHTML = '';
	todoList.forEach(function(item, i){
		displayMessage += `<li>
		<input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
		<label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
		</li>`;
		todo.innerHTML = displayMessage
	})

};

todo.addEventListener('change', function(event){
	let idInput = event.target.getAttribute('id');
	let forLabel = todo.querySelector('[for=' + idInput + ']');
	let valueLabel = forLabel.innerHTML;

	// let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML; //можно записать в одну строку

	todoList.forEach(function(item){
		if(item.todo === valueLabel){
			item.checked = !item.checked;
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	})
});

todo.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	todoList.forEach((item, i) => {
		if(item.todo === event.target.innerHTML){
			if(event.ctrlKey || event.metaKey){
				todoList.splice(i, 1);
			}else{
				item.important = !item.important;
			}
			
			displayMessages()
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	})
})