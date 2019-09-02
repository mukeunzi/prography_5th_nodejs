const load = () => {
	window.addEventListener('load', function() {
		const addTodoInput = document.querySelector('#addTodoInput');
		const addTodoButton = document.querySelector('#addTodoButton');

		addTodoInput.addEventListener('keypress', function(event) {
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
	const addTodoInput = document.querySelector('#addTodoInput').value;

	if (!addTodoInput) {
		alert('내용을 입력하세요!');
		return;
	}

	addTodoList(addTodoInput);
};

const addTodoList = () => {};

load();
