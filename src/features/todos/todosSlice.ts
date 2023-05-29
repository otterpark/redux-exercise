import {type PayloadAction, type AnyAction} from '@reduxjs/toolkit';
import type Todos from '../../types/todo';

type InitialState = {
	todos: Todos[];
};

const initialState: InitialState = {
	todos: [],
};

function nextTodoId(todos: Todos[]) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function todosReducer(state = initialState, action: PayloadAction) {
	switch (action.type) {
		case 'todos/todoAdded':
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
		case 'todos/todoToggled':
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
