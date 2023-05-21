import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filterSlice';
import {combineReducers, type PayloadAction} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	todos: todosReducer,
	filters: filtersReducer,
});

export default rootReducer;
