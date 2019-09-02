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

const addTodoList = addTodoContents => {
	const addTodo = createTodoElement(addTodoContents);
};

const createTodoElement = addTodoContents => {
	const addTodo = document.createElement('div');
	addTodo.innerHTML = addTodoContents;

	return addTodo;
};

load();
