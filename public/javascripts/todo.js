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

const isValidTodo = () => {};

load();
