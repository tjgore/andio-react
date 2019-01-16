import React from 'react'
import { Link } from 'react-router-dom'

import RequestCardContainer from './../Requests/RequestCardContainer'

class MyRequest extends React.Component {


	render (props) 
	{
		return (
		<div>
			<section className="py-9">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className="font-weight-300 text-center pb-3">All My Requests</h1>
							<div className="text-center">
								<Link to="/user/myrequests/submit" className="btn btn-success mx-3">Add Request</Link>
							</div>
							<div className="container lh-1-5 p-1 pb-6">
							<RequestCardContainer userRequest={true}/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
	}
}

export default MyRequest