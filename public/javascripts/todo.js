const load = () => {
	window.addEventListener('load', function() {
		const addContents = document.querySelector('#addContents');
		const addButton = document.querySelector('#addButton');

		addContents.addEventListener('keypress', function(event) {
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

	document.querySelector('#addContents').value = '';
};

const isNotEmptyTodo = () => {
	const addContents = document.querySelector('#addContents').value;

	if (!addContents) {
		alert('내용을 입력하세요!');
		return false;
	}

	return addContents;
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
		deleteTodoList();
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

load();
