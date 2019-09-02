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
	const todoContents = document.createElement('span');
	const updateButton = document.createElement('button');
	const deleteButton = document.createElement('button');

	todoContents.innerHTML = contents;
	updateButton.innerHTML = '수정';
	deleteButton.innerHTML = '삭제';

	updateButton.classList.add('updateButton');
	deleteButton.classList.add('deleteButton');

	todoElement.appendChild(todoContents);
	todoElement.appendChild(updateButton);
	todoElement.appendChild(deleteButton);

	return todoElement;
};

load();
