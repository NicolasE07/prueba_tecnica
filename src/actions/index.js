import { SET_LOADING, SET_MODAL, SET_USERS, SET_INSERT } from './types';

export const setUsers = (payload) => ({
	type: SET_USERS,
	payload,
});

export const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,

});

export const setModal = (payload)=>({
	type: SET_MODAL,
	payload,
})
export const setInsert = (payload)=>({
	type: SET_INSERT,
	payload,
})