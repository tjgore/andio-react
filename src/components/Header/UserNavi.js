import React from 'react'
import logo from '../../andio2.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import Loading from './../UI/Loading'
import Modal from './../UI/Modal'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { logout, getMessageAlerts, setCurrentLocation } from './../../store/actions/actions'



class HomeNavi extends React.Component {

	componentDidMount () {
		if(this.props.auth) {
			this.props.getMessageAlerts(true)
		}
		
		if (!this.props.currentLocation) { 
      this.getCurrentLocation()
    }
	}

	closeMobileMenu = () => {
		document.getElementById("navbarSupportedContent3").classList.remove("show");
	}

	getPosition = (position) => {
    let addressName = null
    const googleGeoCoding = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyCmP3RCryz-KS8mW8hiLVE_F1Dk8BJoxvA"
    axios.get(googleGeoCoding).then( response => {
      if (response.data.status === 'OK') {
        addressName = response.data.results[3].formatted_address
        this.props.setUsersLocation({ name: addressName, lat: position.coords.latitude, lng: position.coords.longitude })
      } else {
        console.log(response.data.status)
        this.props.setUsersLocation({ name: 'unknown', lat: 40.6976684, lng: -74.2605573 })
      }
    })
    .catch(error => {
      console.log('Geocoding error:', error)
    })
  }

  getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.getPosition)
    } else {
       toast.warning('Geolocation IS NOT available in your browser') 
    }
  }

	render (props) {
		return(
		<div>
		<Loading loading={this.props.loading} />
		<Modal/>
		<ToastContainer />
        
			 <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
		    <div className="container">
		      <NavLink to="/user/request" exact className="navbar-brand font-weight-bold"><img src={logo} alt="logo" className="img-fluid hg-40" /></NavLink>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>

		      <div className="collapse navbar-collapse" id="navbarSupportedContent3">
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item px-2">
		            <NavLink to="/user/myrequests" onClick={this.closeMobileMenu} activeClassName="txt-gray-900" className="nav-link">My Request</NavLink>
		          </li>
		          <li className="nav-item px-2">
		            <NavLink to="/user/request" onClick={this.closeMobileMenu} activeClassName="txt-gray-900" className="nav-link">Find Request</NavLink>
		          </li>
		          <li className="nav-item px-2">
		            <NavLink to="/user/messages" onClick={this.closeMobileMenu} activeClassName="txt-gray-900" className="nav-link">
		            	Messages
		            	{ (this.props.alerts.length > 0) ? (<span className="message-alert"></span>) : null }
		            </NavLink>
		          </li>
		          <li className="nav-item px-2">
		            <NavLink to="/user/profile" onClick={this.closeMobileMenu} activeClassName="txt-gray-900" className="nav-link">Profile</NavLink>
		          </li>
		        </ul>
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item px-2">
		            <button onClick={this.props.logout} className="txt-gray-900 btn btn-light btn-sm">Logout</button>
		          </li>
		        </ul>
		      </div>
		    </div>
		  </nav>
		</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => { dispatch(logout()) },
		getMessageAlerts: () => { dispatch(getMessageAlerts()) },
		setUsersLocation: (val) => { dispatch(setCurrentLocation(val)) }
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		currentLocation: state.currentLocation,
		auth: state.auth,
		alerts: state.messageAlerts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavi)