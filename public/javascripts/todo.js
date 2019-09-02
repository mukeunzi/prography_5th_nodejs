const load = () => {
	window.addEventListener('load', function() {
		const addTodoContents = document.querySelector('#addTodoContents');
		const addTodoButton = document.querySelector('#addTodoButton');

		addTodoContents.addEventListener('keypress', function(event) {
			if (event.keyCode === 13) {
				addTodoList();
			}
		});

		addTodoButton.addEventListener('click', function(event) {
			addTodoList();
		});
	});
};

const addTodoList = () => {
	const todoContents = isNotEmptyTodo();
	if (!todoContents) {
		return false;
	}

	const todoElement = createTodoElement(todoContents);

	const todoArea = document.querySelector('#todoArea');
	todoArea.appendChild(todoElement);

	document.querySelector('#addTodoContents').value = '';
};

const isNotEmptyTodo = () => {
	const addTodoContents = document.querySelector('#addTodoContents').value;

	if (!addTodoContents) {
		alert('내용을 입력하세요!');
		return false;
	}

	return addTodoContents;
};

const createTodoElement = contents => {
	const todoElement = document.createElement('div');
	todoElement.innerHTML = contents;

	return todoElement;
};

load();
