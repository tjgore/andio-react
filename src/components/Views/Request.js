import React from 'react'

import RequestCardContainer from './../Requests/RequestCardContainer'
import Map from './../Map/Map'

class Request extends React.Component {

	render() {
		
		return (
			<div>
			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-4 bg-success hg-700 p-0">
							<Map/>
						</div>
						<div className="col-12 col-md-8 p-0 map-request">
							<section className="map-request-container">
								<div className="container lh-1-5 p-1 pb-6 mb-7">
									<RequestCardContainer userRequest={false}/>
								</div>
							</section>
						</div>
					</div>
				</div>
			</section>
		</div>
		)
		}
}

export default Request