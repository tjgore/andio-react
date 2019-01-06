import axios from 'axios'

export const baseAxios = axios.create({
	//baseURL: 'http://localhost:3001/',
  baseURL: '/',
	headers: {
		'Content-Type': 'application/json'
	}
})


