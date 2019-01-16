import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { baseAxios } from './../../axios_instances'
import Schema from 'form-schema-validation'
import { Form, TextField, TextareaField, SubmitField, SelectField } from 'react-components-form'
import './../UI/Form.css'

import { loading } from './../../store/actions/actions'
import { toast } from 'react-toastify'

import Script from 'react-load-script';

const SubmitRequest = (props) => {

	let coordinates = {
		lat: null,
		lng: null
	}

	const requestSchema = new Schema({
		title: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Title is required'
				}
			]
		},
		location: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Location is required'
				}
			]
		},
		description: {
			type: String,
		},
		category: {
			type: String,
			validators: [
				{
					validator: (value) => {
						if(value === undefined || value === '') {
							return false;
						}
					},
					errorMessage: 'Category is required'
				}
			]
		}
	})

	const loadingAddress = (load, display) => {
		let loadingMap = document.getElementsByClassName('loading')
		let submitBtn = document.querySelector('#submit>div button');
		for(let i=0; i<loadingMap.length; i++) {
			loadingMap[i].style.display = display
		}
		submitBtn.disabled = load
	}

	const getAddressLocations = () => {
		let formattedAddress = document.getElementById('formattedAddress')
		let address = document.querySelector('[name="location"]').value;

		if (address !== '') {
			loadingAddress(true, "block")
			let service = new window.google.maps.places.PlacesService(document.createElement('div'));
				service.textSearch({ 'query': address}, function(results, status) {
					if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				    //console.log(results)
				    formattedAddress.innerHTML = "<span style='color:blue;'>Preferred name:</span> " + results[0].formatted_address
						coordinates.lng = results[0].geometry.location.lng()
						coordinates.lat = results[0].geometry.location.lat()
						loadingAddress(false, "none")
				  } else if ( status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
						formattedAddress.innerHTML = "<span style='color:red;'>Not a valid address</span>"
						loadingAddress(true, "none")
					}
				})
		}
	}

	const submitMethod = (model) => {
		getAddressLocations();
		props.loading(true);
		let requestInfo = {
			request: {
				user_id: props.currentUser.id,
				title: model.title,
				location: model.location,
				latitude: coordinates.lat,
				longitude: coordinates.lng,
				description: model.description,
				category: model.category
			}
		}
		submitRequest(requestInfo)
	}

	const submitRequest = (requestInfo) => {
		baseAxios.post('requests/', requestInfo, {
			headers: { 
				'Authorization': props.currentUser.token
			}
		})
		.then( response => {
			props.loading(false)
			toast.warning("Request Submitted")
			props.history.push({pathname: '/user/myrequests'});

		})
		.catch( error => {
			props.loading(false)
			toast.warning("Request submission failed")
		})
	}

	const categoryOption = [
		{ label: "-- Select Category --", value: "" },
		{ label: "Material", value: "material" },
		{ label: "Service", value: "service" }
	]

	return(
		<div>
		<Script attributes={{ id: 'google'}} url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmP3RCryz-KS8mW8hiLVE_F1Dk8BJoxvA&libraries=places"/>
			<section className="bg-ash">
				<div className="container pt-9 pb-9">
					<div className="row">
						<div className="col-12 text-center">
							<h1 className="font-weight-300">Submit Your Request</h1>
							<p>Need some help. Get the help from the community!</p>
						</div>
						<div className="col-md-6 col-sm-10 col-12 mx-auto pt-3">
						<Form
						schema={requestSchema}
						onSubmit={submitMethod}
						className="border p-5 bg-white"
						>
							<div className="form-group">
								<label htmlFor="title">Request name <span className="text-danger">*</span></label>
								<TextField name="title" type="text" className="form-control" placeholder="Lifting Furniture"></TextField>
							</div>
							<div className="form-group" onBlur={ getAddressLocations } onFocus={ getAddressLocations }>
								<label htmlFor="location">Location <span className="text-danger">*</span></label>
								<TextField type="text" className="form-control" name="location" placeholder="Alien Ave, 1652 NY"></TextField>
								<img className="loading" src="/img/loading.gif" alt="loading" style={{ display: "none"}}/>
								<p id="formattedAddress" style={ {fontSize: 13 } }> </p>
							</div>
							<div className="form-group">
								<label htmlFor="description">Description</label>
								<TextareaField className="form-control" name="description" placeholder="Describe your request"></TextareaField>
							</div>
							<div className="form-group">
								<label htmlFor="category">Category <span className="text-danger">*</span></label>
								<SelectField name="category" id="category" className="form-control" options={categoryOption}></SelectField>
							</div>
							<div id="submit" className="text-center pt-4">
								<SubmitField className="btn btn-warning text-white rounded-0 px-5 py-2" value="Submit"/>
							</div>
						</Form>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
}

const mapDispatchToProps = (dispatch) => {
	return {
		loading: (val) => { dispatch(loading(val)) }
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.current_user,
		getLoading: loading
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitRequest))