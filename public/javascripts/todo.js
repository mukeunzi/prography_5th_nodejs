const load = () => {
	window.addEventListener('load', function() {
		const todo_contents = document.querySelector('#todo_contents');
		const addButton = document.querySelector('#addButton');

		todo_contents.addEventListener('keypress', function(event) {
			if (event.keyCode === 13) {
				addTodoList();
			}
		});

		addButton.addEventListener('click', function(event) {
			addTodoList();
		});
	});
};

const addTodoList = async () => {
	const todo_contents = isNotEmptyTodo();

	if (!todo_contents) {
		document.querySelector('#todo_contents').focus();
		return false;
	}

	try {
		const response = await fetch(`/todo`, {
			method: 'POST',
			body: JSON.stringify({ todo_contents }),
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			const newTodoText = await response.text();

			const todoArea = document.querySelector('#todoArea');
			todoArea.insertAdjacentHTML('beforeend', newTodoText);

			document.querySelector('#todo_contents').value = '';
		}
	} catch (error) {
		console.log(error);
	}
};

const isNotEmptyTodo = () => {
	const todo_contents = document.querySelector('#todo_contents').value;

	if (!todo_contents) {
		alert('내용을 입력하세요!');
		return false;
	}

	return todo_contents;
};

const deleteTodoList = async deleteElement => {
	const todo_id = deleteElement.id;
	try {
		const response = await fetch(`/todo/${todo_id}`, { method: 'DELETE' });
		if (response.ok) {
			const todoArea = document.querySelector('#todoArea');
			todoArea.removeChild(deleteElement);
		}
	} catch (error) {
		console.log(error);
	}
};

load();
