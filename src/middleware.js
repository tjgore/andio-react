import { baseAxios } from './axios_instances';
import { saveState, loadState, deleteState } from './localStorage'

import * as actionTypes from './store/actions/actionTypes'
import { loading, login, logout } from './store/actions/actions'

export const persistToken = store => next => action => {
	switch(action.type) {
		case actionTypes.ON_INIT:
		let localData = loadState();
		if (!localData) {
			localData = store.getState().current_user;
		}
		if (!localData.id) {
			next(loading(false))
			break;
		}
		let formInfo = {
			user: {
				email: localData.email,
				token: localData.auth_token
			}
		}
		baseAxios.post('users/verify_token', formInfo, {
			headers: { 
				'Authorization': localData.auth_token
			}
		})
		.then(response => {
			next(login(response.data))
		}).catch(err => {
			next(logout())
			deleteState();
			console.log('On init errors: ' + err)
		})
		break;

		case actionTypes.LOGOUT:
		next(logout())
		deleteState();
		break;

		case actionTypes.SET_AUTH:
		saveState(action.payload)
		break;

		default:
		break;
	}
	return next(action);
}