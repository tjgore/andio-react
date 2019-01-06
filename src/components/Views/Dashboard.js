import React from 'react'
import RequestCard from './../Requests/RequestCard'
import { connect } from 'react-redux';
import { setRequest } from './../../store/actions/actions'

class Dashboard extends React.Component {

	componentDidMount () {
		this.props.getRequest()
	}

	render(props) {
		
	return (
		<div>
			<section>
				<div className="container pt-9">
					<div className="d-flex flex-wrap justify-content-center">
						<div className="bg-success text-white p-3 mx-3 d-flex mb-4">
							<p className="pt-2"><i className="fas fa-check-square fa-3x"></i></p>
							<h3 className="pl-3 font-weight-300">
								20 <br/> Completed
							</h3>
						</div>
						<div className="bg-success text-white p-3 mx-3 d-flex mb-4">
							<p className="pt-2"><i className="far fa-handshake fa-3x"></i></p>
							<h3 className="pl-3 font-weight-300">
								12 <br/> Submitted
							</h3>
						</div>
						<div className="bg-success text-white p-3 mx-3 d-flex mb-4">
							<p className="pt-2"><i className="fas fa-clipboard-check fa-3x"></i></p>
							<h3 className="pl-3 font-weight-300">
								7 <br/> Helped You
							</h3>
						</div>
						<div className="bg-success text-white p-3 mx-3 d-flex mb-4">
							<p className="pt-2"><i className="fas fa-comment fa-3x"></i></p>
							<h3 className="pl-3 font-weight-300">
								20 <br/> Messages
							</h3>
						</div>
					</div>
				</div>
			</section>

			<section className="py-9">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="font-weight-300 text-center pb-3">Most Recent Request</h1>
							<div className="container lh-1-5 p-1 pb-6">
								<div className="row">
							{this.props.requests.map((request) => {
								return (
									<div key={request.id} className="col-md-6 col-12 pt-4 pt-md-0">
									<RequestCard request={request} />
									</div>
									)
							})}
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		requests: state.requests
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRequest: () => { dispatch(setRequest()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)