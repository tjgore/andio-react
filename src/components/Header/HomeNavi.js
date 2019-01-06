import React from 'react'
import logo from '../../andio2.svg'
import { NavLink } from 'react-router-dom'
import { HashLink as ScrollLink } from 'react-router-hash-link'

const HomeNavi = (props) => {

	const closeMobileMenu = () => {
		document.getElementById("navbarSupportedContent3").classList.remove("show");
	}

	return(
		<div>
			 <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
		    <div className="container">
		      <NavLink to="/" onClick={closeMobileMenu} exact className="navbar-brand font-weight-bold"><img src={logo} alt="logo" className="img-fluid hg-40" /></NavLink>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>

		      <div className="collapse navbar-collapse" id="navbarSupportedContent3">
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item px-2 pt-3 pt-lg-0">
		            <NavLink to="/" activeClassName="txt-gray-900" onClick={closeMobileMenu} exact className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
		          </li>
		          <li className="nav-item px-2">
		            <ScrollLink smooth to="/#about" onClick={closeMobileMenu} className="nav-link">About</ScrollLink>
		          </li>
		          <li className="nav-item px-2">
		            <ScrollLink smooth to="/#how" onClick={closeMobileMenu} className="nav-link">How</ScrollLink>
		          </li>
		          <li className="nav-item px-2">
		            <ScrollLink smooth to ="/#why" onClick={closeMobileMenu} className="nav-link">Why</ScrollLink>
		          </li>
		          <li className="nav-item px-2">
		            <ScrollLink smooth to="/#faq" onClick={closeMobileMenu} className="nav-link">FAQ</ScrollLink>
		          </li>
		        </ul>
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item px-2">
		            <NavLink to="/sign-in" onClick={closeMobileMenu} activeClassName="txt-gray-900" className="nav-link">Login</NavLink>
		          </li>
		          <li className="nav-item px-2">
		            <NavLink to="/sign-up" onClick={closeMobileMenu} exact activeClassName="bg-warning text-white" className="txt-14 btn btn-warning text-white py-1 px-3 mt-1">Sign Up</NavLink>
		          </li>
		        </ul>
		      </div>
		    </div>
		  </nav>
		</div>
		)
}

export default HomeNavi