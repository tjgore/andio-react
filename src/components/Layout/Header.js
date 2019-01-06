import React from 'react'
import HomeNavi from './../Header/HomeNavi'
import UserNavi from './../Header/UserNavi'
import { Route } from 'react-router-dom'

const Header = (props) => {
	// state user 
	// check if user is logged in
	// if logged in change Route not needed
	return (
		<div>
			<Route path="/(|sign-in|sign-up)" exact component={HomeNavi} />
			<Route path="/user/" component={UserNavi} />
		</div>
		)
}

export default Header