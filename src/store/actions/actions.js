import { baseAxios } from './../../axios_instances'

export const initiate = () => {
	return { 
		type: 'ON_INIT'
	}
}

export const login = (user) => {
	return { 
		type: 'SET_AUTH', payload: user 
	}
}

export const loading = (val) => {
	return { 
		type: 'LOADING', payload: val 
	}
}

export const logout = () => {
	if (getAlertTimer !== null) { 
		clearInterval(getAlertTimer)
	}
	return {
		type: 'LOGOUT',
	}
}

export const setCurrentLocation = (locationCoordinates) => {
	return {
		type: 'SET_CURRENT_LOCATION',
		payload: locationCoordinates
	}
}

export const updateRequest = (requests) => {
	return {
		type: 'GET_REQUEST',
		payload: requests
	}
}

export const updateUserRequest = (requests) => {
	return {
		type: 'GET_USER_REQUEST',
		payload: requests
	}
}


export const setMapRequest = (coordinates) => {
	return function (dispatch, getState) {
		baseAxios.post('requests/map_requests', { request: coordinates }, {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(updateRequest(response.data))
		})
		.catch( error => {
			console.log('Request error ', error)
			dispatch(logout())
		})
	}
}


export const setRequest = () => {
	return function (dispatch, getState) {
		baseAxios.get('requests/user_requests', {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(updateUserRequest(response.data))
		})
		.catch( error => {
			console.log('User Request error ', error)
			dispatch(logout())
		})
	}
}

export const deleteRequest = (requests, id) => {
	return function (dispatch, getState) {
		baseAxios.delete('requests/' + id, {
			headers: { 
				'Authorization': getState().current_user.token
			}
		}).then( response => {
			dispatch(updateUserRequest(requests))
		}).catch( error => {
			console.log('delete request error: ', error)
			dispatch(logout())
		})
	}
}

export const setModal = (val) => {
	return {
		type: 'SET_MODAL',
		payload: val
	}
}

export const updateConversations = (conversations) => {
	return {
		type: 'UPDATE_CONVERSATIONS',
		payload: conversations
	}
}

export const getConversations = () => {
	return function (dispatch, getState) {
		baseAxios.get('conversations', {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(updateConversations(response.data))
		})
		.catch( error => {
			console.log('Conversations ', error)
			dispatch(logout())
		})
	}
}

export const updateMessageRead = (convoId) => {
	return function (dispatch, getState) {
		baseAxios.get('messages/update_read/' + convoId, {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(updateMessageAlertState(convoId))
		})
		.catch( error => {
			console.log('update read error:', error)
		})
	}
}

export const updateMessages = (messages) => {
	return {
		type: 'UPDATE_MESSAGES',
		payload: messages
	}
}

export const getMessages = (convoId) => {
	return function (dispatch, getState) {
		baseAxios.get('conversation/' + convoId + '/messages/', {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			let messages = response.data
			messages = messages.filter( msg => {
				if (msg.read === 0) {
					msg.read = 1
				} 
				return msg
			})
			dispatch(updateMessages(messages))
			dispatch(updateMessageRead(convoId))
		})
		.catch( error => {
			console.log('Messages ', error)
			dispatch(logout())
		})
	}
}

export const addMessage = (message) => {
	return {
		type: 'ADD_MESSAGE',
		payload: message
	}
}

export const submitMessage = (messageInfo) => {
	return function (dispatch, getState) {
		baseAxios.post('messages/', messageInfo, {
      headers: { 
        'Authorization': getState().current_user.token
      }
    })
		.then( response => {
			dispatch(addMessage({...response.data, from_full_name: getState().current_user.firstName + ' ' + getState().current_user.lastName }))
			dispatch(loading(false))
		})
		.catch( error => {
			console.log('Messages ', error)
			dispatch(loading(false))
			dispatch(logout())
		})
	}
}


export const updateRequestActive = (requestActive) => {
	return function (dispatch, getState) {
		baseAxios.put('requests/' + requestActive.id, { request: { active: requestActive.active, start_count: 0 } }, {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(updateUserRequest(requestActive.requests))
		})
		.catch( error => {
			console.log('Update request active error ', error)
			dispatch(logout())
		})
	}
}

export const updateRequestStatus = (requestStatus) => {
	return function (dispatch, getState) {
		baseAxios.put('requests/' + requestStatus.id, { request: { status: requestStatus.status } }, {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			if (requestStatus.user) {
				dispatch(updateUserRequest(requestStatus.requests))
			} else {
				dispatch(updateRequest(requestStatus.requests))
			}
		})
		.catch( error => {
			console.log('Update request status error ', error)
			dispatch(logout())
		})
	}
}

export const setMessageAlertState = (alerts) => {
	return {
		type: 'SET_MESSAGE_ALERT',
		payload: alerts
	}
}

let getAlertTimer = null
export const getMessageAlerts = (start = true) => {
	return function (dispatch, getState) {
		if (!start) {
			clearInterval(getAlertTimer)
			return
		}
		getAlertTimer = setInterval(() => {
			baseAxios.get('messages/unread/' , {
			headers: { 
				'Authorization': getState().current_user.token
			}
		})
		.then( response => {
			dispatch(setMessageAlertState(response.data))
		})
		.catch( error => {
			console.log('Message alert error ', error)
			dispatch(logout())
		})
		}, 5000)
	}
}

export const updateMessageAlertState = (convoId) => {
	return function (dispatch, getState) {
		let alerts = getState().messageAlerts.filter( alert => 
			alert.conversation_id !== convoId
		)
		dispatch(setMessageAlertState(alerts))
	}
}