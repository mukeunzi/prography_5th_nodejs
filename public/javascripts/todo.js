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

const addTodoList = () => {
	const todoContents = isNotEmptyTodo();
	if (!todoContents) {
		return false;
	}

	const todoElement = createTodoElement(todoContents);

	const todoArea = document.querySelector('#todoArea');
	todoArea.appendChild(todoElement);

	document.querySelector('#todo_contents').value = '';
};

const isNotEmptyTodo = () => {
	const todo_contents = document.querySelector('#todo_contents').value;

	if (!todo_contents) {
		alert('내용을 입력하세요!');
		return false;
	}

	return todo_contents;
};

const createTodoElement = contents => {
	const todoElement = document.createElement('div');
	const todoContents = document.createElement('span');
	const updateButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	todoElement.setAttribute('id', makeUniqueId());
	updateButton.classList.add('updateButton');
	deleteButton.classList.add('deleteButton');

	todoContents.innerHTML = contents;
	updateButton.innerHTML = '수정';
	deleteButton.innerHTML = '삭제';

	updateButton.addEventListener('click', function(event) {
		updateTodoList();
	});

	deleteButton.addEventListener('click', function(event) {
		deleteTodoList(event.currentTarget.parentNode);
	});

	todoElement.appendChild(todoContents);
	todoElement.appendChild(updateButton);
	todoElement.appendChild(deleteButton);

	return todoElement;
};

const makeUniqueId = () => {
	const minNumber = 100;
	const maxNumber = 999;

	const uniqueId = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	return uniqueId;
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
