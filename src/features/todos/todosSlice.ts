import {type PayloadAction, type Action} from '@reduxjs/toolkit';

type Todos = {
	id: number;
	text: string;
	completed: boolean;
	color?: string;
};

type InitialState = {
	todos: Todos[];
};

const initialState: InitialState = {
	todos: [
		{id: 0, text: 'Learn React', completed: true},
		{id: 1, text: 'Learn Redux', completed: false, color: 'purple'},
		{id: 2, text: 'Build something fun!', completed: false, color: 'blue'},
	],
};

function nextTodoId(todos: Todos[]) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function todosReducer(state: InitialState = initialState, action: PayloadAction<number>) {
	switch (action.type) {
		case 'todo/todoAdded':
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: nextTodoId(state.todos),
						text: action.payload,
						completed: false,
					},
				],
			};
		case 'todo/todoToggled':
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id !== action.payload) {
						return todo;
					}

					return {
						...todo,
						completed: !todo.completed,
					};
				}),
			};
		default:
			return state;
	}
}
