import * as actionTypes from './actions/actionTypes'

const initialState = {
	auth: false,
	current_user: { id: null, email: null, firstName: null, lastName:null, token: null },
	requests:[],
	currentUserRequests:[],
	messages:[],
	conversations:[],
	loading: true,
	modal: { open: false, type: null, data: null },
	currentLocation: null,
	messageAlerts: []
} 

const reducer = (state = initialState, action ) => {
	switch (action.type) {
		case actionTypes.ON_INIT:
		return state

		case actionTypes.SET_AUTH: // LOGIN
		return {
			...state,
			auth: true,
			current_user: { id: action.payload.id, email: action.payload.email, firstName: action.payload.first_name, lastName: action.payload.last_name, token: action.payload.auth_token },
			loading: false
		}

		case actionTypes.LOADING:
		return {
			...state,
			loading: action.payload
		}

		case actionTypes.LOGOUT:
		return {
			...state,
			auth: false,
			current_user: { id: null, email: null, token: null },
			loading: false
		}

		case actionTypes.SET_CURRENT_LOCATION:
		return {
			...state,
			currentLocation: action.payload
		}

		case actionTypes.GET_REQUEST:
		return{
			...state,
			requests: action.payload
		}

		case actionTypes.GET_USER_REQUEST:
		return{
			...state,
			currentUserRequests: action.payload
		}

		case actionTypes.SET_MODAL:
		return{
			...state,
			modal: { open: action.payload.open, type: action.payload.type, data: action.payload.data }
		}

		case actionTypes.UPDATE_CONVERSATIONS:
		return {
			...state,
			conversations: action.payload
		}

		case actionTypes.UPDATE_MESSAGES:
		return {
			...state,
			messages: action.payload
		}

		case actionTypes.ADD_MESSAGE:
		return {
			...state,
			messages: [...state.messages, action.payload] 
		}

		case actionTypes.SET_MESSAGE_ALERT:
		return {
			...state,
			messageAlerts: action.payload 
		}

		default:
		return state
	}
}

export default reducer