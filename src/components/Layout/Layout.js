import React from 'react'
//Layout
import Header from './Header'
import Footer from './Footer'

//Front Pages
import Body from './Body'
import Home from './../Views/Home'
import Signin from './../Views/Signin'
import Signup from './../Views/Signup'
import NotFound from './../Views/NotFound'

//User Pages
import Request from './../Views/Request'
import Profile from './../Views/Profile'
import SendMessage from './../Views/SendMessage'
import Messages from './../Views/Messages'
import SubmitRequest from './../Views/SubmitRequest'
import MyRequest from './../Views/MyRequest'

import AuthenticatedRoute from './AuthenticateRoute'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Layout extends React.Component {

	render() {
		let footer = null
		if (!this.props.getLoading) {
			footer = this.props.auth ? '' : <Footer/>
		}
		return (
				<div>
					<Header/>
						<Body>
							<Switch>
								<Route path="/" exact component={Home} />
								<AuthenticatedRoute auth={this.props.auth} path="/sign-in" component={Signin}/>
								<AuthenticatedRoute auth={this.props.auth} path="/sign-up" exact component={Signup}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/request" component={Request}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/profile" component={Profile}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/send-message" component={SendMessage}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/messages" component={Messages}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/myrequests" exact component={MyRequest}/>
								<AuthenticatedRoute auth={this.props.auth} path="/user/myrequests/submit" exact component={SubmitRequest}/>
								<Route component={NotFound} />
							</Switch>
						</Body>
						{ footer }
				</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		getLoading: state.loading
	}
}


export default withRouter(connect(mapStateToProps)(Layout))