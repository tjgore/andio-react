import React from 'react';
import { baseAxios } from './../../axios_instances'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';
import './../UI/Form.css'

import { login, loading } from './../../store/actions/actions'

const Signin = (props) => {

	const loginSchema = new Schema({
		email:{
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Email is required'
				},
				{
					validator: (value) => {
          	var re = /\S+@\S+\.\S+/;
            if(!re.test(value)) {
              return false;
            }
          },
					errorMessage: 'This is not a valid email'
				}
			]
		},    
		password: {
      type: String,
      validators: [
	      {
	          validator: (value) => {
	            if(value === undefined || value === '') {
	                return false;
	            }
	          },
	          errorMessage: 'Password is required'
	      },
	      {
	          validator: (value) => {
	            if(value.length <= 3) {
	                return false;
	            }
	          },
	          errorMessage: 'Password is too short'
	      }
    	]
    }
	})

	const submitMethod = (model) => {
		props.loading(true);
	  console.log('valid form')
	  let formInfo = { 
			user: {
    	email: model.email,
    	password: model.password
			}
		}
		loginUser(formInfo)
	}

	const loginUser = (formInfo) => {
	let notification = document.getElementById('note')
	baseAxios.post('users/login', formInfo)
		.then(response => {
			notification.innerHTML = response.data.status
			props.login(response.data)
		})
		.catch(error => {
			notification.innerHTML = error.response.data.error
			props.loading(false)
		})
	}

	return( 
		<div>
		{ (props.getLoading) ? (<div className="signinLoading"></div>) : null }
			<section className="headerimg hg-700" style={{ backgroundImage: "url(/img/group.jpg)" }}>
				<div className="bg-black-5 h-100">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mt-4">
								<div className="row p-2">
									<div className="col-md-6 bg-white mt-9 shadow-lg rounded px-5 py-4">
										<p className="txt-30">Sign into your account</p>
										<Form
										schema={loginSchema}
										onSubmit={submitMethod} 
										className="text-left">
										<div>
										<p className="text-success" id="note"></p>
										</div>
											<div className="form-group">
												<label className="mb-0">Email address</label>
												<TextField name="email" className="form-control" placeholder="Enter your email" type="email"></TextField>
												<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
											</div>
											<div className="form-group">
												<label className="mb-0">Password</label>
												<TextField name="password" className="form-control" type="password" placeholder="Enter a strong password"></TextField>
											</div>
											<SubmitField className="btn btn-warning rounded-0 txt-white mt-2" value="Submit" />
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
}

const mapDispatchToProps = dispatch => {
	return {
		login: (user) => { dispatch(login(user)) },
		loading: (val) => { dispatch(loading(val)) }
	}
}

const mapStateToProps = state => {
	return {
		getLoading: state.loading
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin))