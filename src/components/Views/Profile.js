import React from 'react';
import { connect } from 'react-redux'

const Profile = (props) => {
	return (
		<div>
		<section>
			<div className="container pt-9 pb-9">
				<div className="row">
					<div className="col-md-4">
						<img src="/img/happy.svg" alt="userimage" className="img-fluid mb-4"/>
						<hr/>
						<p className="txt-30 mb-0">About</p>
						<p>Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe.</p>
					</div>
					<div className="col-md-8 pl-3 pl-md-6 pt-4 pt-md-0">
						<h3>{props.currentUser.firstName} {props.currentUser.lastName}</h3>
						<p className="small"><i className="fas fa-map-marker-alt"></i> {(typeof props.address.name === 'undefined') ? 'unkown location' : props.address.name }</p>
						
						

						<p className="mb-0 pt-7 border-bottom mb-4"><i className="fas fa-user"></i> <span className="txt-20">Profile</span></p>
						<div className="d-flex align-items-center">
							<p className="wd-200 txt-gray-900">First name:</p>
							<p>{props.currentUser.firstName}</p>
						</div>
						<div className="d-flex align-items-center">
							<p className="wd-200 txt-gray-900">Last name:</p>
							<p>{props.currentUser.lastName}</p>
						</div>
						<div className="d-flex align-items-center">
							<p className="wd-200 txt-gray-900">Email:</p>
							<p>{props.currentUser.email}</p>
						</div>
						<div className="d-flex align-items-center">
							<p className="wd-200 txt-gray-900">Phone:</p>
							<p>+86-198-3678-2274</p>
						</div>
						<div className="d-flex align-items-center">
							<p className="wd-200 txt-gray-900">Current Address:</p>
							<p>{(typeof props.address.name === 'undefined') ? 'unkown location' : props.address.name }</p>
						</div>
						<a className="btn btn-outline-dark hvr-white mt-3 rounded-0 btn-sm float-right">Update Profile</a>
					</div>
				</div>
			</div>
		</section>
		</div>
	)
} 

const mapStateToProps = (state) => {
	return {
		currentUser: state.current_user,
		address: state.currentLocation 
	}
}

export default connect(mapStateToProps)(Profile)