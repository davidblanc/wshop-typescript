import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

import { FetchUsersAction, User, DeleteUserAction } from '../interfaces';

const url = 'http://localhost:3001/api/user';

export const fetchUsers = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<User[]>(url);
		dispatch<FetchUsersAction>({
			type: ActionTypes.fetchUsers,
			payload: response.data
		});
	};
};

export const deleteUser = (userId: number) => {
	return async (dispatch: Dispatch) => {
		try {
			await axios.delete<number>(url, {
				data: { userId: userId }
			});
			dispatch<DeleteUserAction>({
				type: ActionTypes.deleteUser,
				payload: userId
			});
		} catch (err) {
			alert('no se pudo eliminar usuario');
		}
	};
};
