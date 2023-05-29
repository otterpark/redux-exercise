import {type AnyAction, type PayloadAction} from '@reduxjs/toolkit';

type Filters = {
	status: string;
	colors: string[];
};

type InitialState = {
	filters: Filters;
};

const initialState: InitialState = {
	filters: {
		status: 'All',
		colors: [],
	},
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function filtersReducer(state: InitialState = initialState, action: PayloadAction<AnyAction>) {
	switch (action.type) {
		case 'filters/statusFilterChanged':
			return {
				...state,
				filters: {
					...state.filters,
					filters: action.payload,
				},
			};

		case 'filters/colorFilterChanged':
			return {
				...state,
				filters: {
					...state.filters,
					colors: action.payload,
				},
			};
		default:
			return state;
	}
}
