import React from 'react';

const RequestCard = (props) => {
	let activeButton
	if (props.showActive) {
		let requestTimeUp = new Date(new Date(props.request.start_date).getTime() + 2*60*1000)
		let now = new Date()
		if (props.request.start_count === 5 && now <= requestTimeUp) {
			activeButton = <span className="badge badge-light pointer">{ (props.request.active) ? 'active' : 'work in progress for 24hrs' }
			</span> 
		} else { 
			activeButton = <span className="badge badge-light pointer" 
				onClick={props.active}>{ (props.request.active) ? 'active' : 'inactive' }
			</span> 
		}
	}

	return (
		<div className="shadow px-4 pt-4 m-2">
			<p className="d-inline-block bg-snow hg-50 wd-50 rounded-circle text-center pt-2 txt-20 font-weight-bold">{ props.request.id }</p>
			<button onClick={ props.viewRequest } className="float-right d-inline-block btn mr-2 btn-sm btn-light mt-2 txt-gray-700">More Details</button>
			<div  className="bg-grad-outreach p-4 text-white rounded">
				<h5 className="font-weight-bold mb-0">{ props.request.title }</h5>
				<div className="pb-3">
					<span className="badge badge-light mr-2">{ props.request.category }</span>
					<span className="badge badge-light mr-2 pointer" onClick={props.status}>{ props.request.status }</span>
					{
						activeButton
					}	 
				</div>
				<p>{ props.request.description.substring(0, 50) }</p>
			</div>
			<div className="py-3">
			{ props.deleteButton ? 
				<button type="button" onClick={props.delete} className="btn btn-light">Delete</button>
				: null }
				{ props.lendButton ? 
				<button onClick={props.lend} className="btn btn-light">Lend a Hand</button>
				: null }
			</div>
		</div>
		)
}

export default RequestCard