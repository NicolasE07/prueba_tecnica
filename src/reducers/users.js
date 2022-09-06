import { SET_INSERT, SET_LOADING, SET_MODAL, SET_USERS } from '../actions/types';

const inicialState = {
	users: [],
	loading: true,
	modal: false,
	insert: {
		name: '',
		email: '',
		gender: '',
		status: ''
	}
};

export const usersReducer = (state = inicialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_LOADING:
			return{
				...state, loading: action.payload
			}
		case SET_MODAL: 
			return {
				...state,
				modal: action.payload
			}
		case SET_INSERT:
			return {
				...state,
				insert: action.payload

			}
		default:
			return state;
	}
};
