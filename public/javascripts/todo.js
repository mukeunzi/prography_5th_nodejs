const load = () => {
	window.addEventListener('load', function() {
		const addTodoContents = document.querySelector('#addTodoContents');
		const addTodoButton = document.querySelector('#addTodoButton');

		addTodoContents.addEventListener('keypress', function(event) {
			if (event.keyCode === 13) {
				isValidTodo();
			}
		});

		addTodoButton.addEventListener('click', function(event) {
			isValidTodo();
		});
	});
};

const isValidTodo = () => {
	const addTodoContents = document.querySelector('#addTodoContents').value;

	if (!addTodoContents) {
		alert('내용을 입력하세요!');
		return;
	}

	addTodoList(addTodoContents);
};

const addTodoList = contents => {
	const todoElement = createTodoElement(contents);

	const todoArea = document.querySelector('#todoArea');
	todoArea.appendChild(todoElement);

	document.querySelector('#addTodoContents').value = '';
};

const createTodoElement = contents => {
	const todoElement = document.createElement('div');
	todoElement.innerHTML = contents;

	return todoElement;
};

load();
