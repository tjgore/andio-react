import React from 'react';
import { baseAxios } from './../../axios_instances';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';
import './../UI/Form.css'
	
	const Signup = (props) => {

		const loginSchema = new Schema({
		first_name:{
			type: String,
			validators: [
        {
            validator: (value) => {
              if(value === undefined || value === '') {
                  return false;
              }
            },
            errorMessage: 'First name is required'
        },
        {
            validator: (value) => {
              if(value.length >= 50) {
                  return false;
              }
            },
            errorMessage: 'First name is too long'
        }
      ]
		},
		last_name:{
			type: String,
			validators: [
        {
            validator: (value) => {
              if(value === undefined || value === '') {
                  return false;
              }
            },
            errorMessage: 'Last name is required'
        },
        {
            validator: (value) => {
              if(value.length >= 50) {
                  return false;
              }
            },
            errorMessage: 'Last name is too long'
        }
      ]
		},
    email:{
        type: String,
        validators: [
            {
                validator: (value) => {
                	var re = /\S+@\S+\.\S+/;
                  if(!re.test(value)) {
                      return false;
                  }
                },
                errorMessage: 'This is not a vaild email'
            },
            {
                validator: (value) => {
                    if(value === undefined || value === '') {
                        return false;
                    }
                },
                errorMessage: 'Email is required'
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
	});

	const submitMethod = (model) => {
    const image = document.querySelector("#image");
    let imageError = document.getElementById('imageError')
    imageError.innerHTML = '';
    if(!image.files[0]) {
       imageError.innerHTML = 'Government picture ID is required'
      return
    }

    let formData = new FormData();
    formData.append("image", image.files[0], 'imageId')
    formData.append("first_name", model.first_name)
    formData.append("last_name", model.last_name)
    formData.append("email", model.email)
    formData.append("password", model.password)
		createUser(formData)
	}

	const createUser = (formInfo) => {
	props.loading(true)	
	let notification = document.getElementById('note')
	baseAxios.post('users', formInfo)
		.then(response => {
			notification.innerHTML = response.data.message
			props.login(response.data)
		})
		.catch(error => {
			console.log('Error Sign up: ', JSON.stringify(error))
			//console.log(error)
			notification.innerHTML = error.response.data.errors
			props.loading(false)	
		})
	}

	const errorMethod = (errors, model) => {
	}

		return(
		<div>
			<section className="headerimg h-100" style={{ backgroundImage: "url(/img/group.jpg)" }}>
				<div className="bg-black-5 h-100">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mt-4">
								<div className="row p-2">
									<div className="col-md-6 bg-white mt-9 shadow-lg rounded px-5 py-4 mb-7">
										<p className="txt-30">Create an Account</p>
										<Form 
											className="text-left" 
											schema={loginSchema} 
											onError={errorMethod}
											onSubmit={submitMethod}
											>
										<div>
										<p className="text-danger" id="note"></p>
										</div>
										<div className="form-group">
												<label className="mb-0">First name<span className="text-danger">*</span></label>
												<TextField name="first_name" className="form-control" value="" type="text"></TextField>
											</div>
											<div className="form-group">
												<label className="mb-0">Last name<span className="text-danger">*</span></label>
												<TextField name="last_name" className="form-control" type="text"></TextField>
											</div>
                      <div className="form-group">
                        <label className="mb-0">Govt. picture ID<span className="text-danger">*</span></label>
                        <input id="image" type="file" name="image" className="form-control" required/>
                        <p className="text-danger" id="imageError"></p>
                      </div>
											<div className="form-group">
												<label className="mb-0">Email address<span className="text-danger">*</span></label>
												<TextField name="email" className="form-control" type="email"></TextField>
												<small className="form-text text-muted">We'll never share your email with anyone else.</small>
											</div>
											<div className="form-group">
												<label className="mb-0">Password<span className="text-danger">*</span></label>
												<TextField name="password" className="form-control" type="password"></TextField>
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
		login: (user) => { dispatch({ type: 'SET_AUTH', payload: user }) },
		loading: (val) => { dispatch({ type: 'LOADING', payload: val })}
	}
}

export default withRouter(connect(null, mapDispatchToProps)(Signup))