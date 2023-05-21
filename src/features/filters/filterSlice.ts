
type Filters = {
	status: string;
	colors: string[];
};

const initialState = {
	filters: {
		status: 'All',
		colors: [],
	},
};

export default function filtersReducer(state = initialState, action) {
	switch (action.type) {
		case 'filters/statusFilterChanged':
			return {
				...state,
				filters: {
					...state.filters,
					filters: action.payload,
				},
			};
		default:
			return state;
	}
}
