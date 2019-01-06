import React from 'react';

const Loading = (props) => {
	if(!props.loading) {
		return null
	}
	
	return (
		<div>
			<div className="w-100 h-100" style={{ position: "fixed", top: 0, zIndex: 1000, background: "rgba(0, 0, 0, 0.8)" }}>
				<div className="position-relative text-center p-3 bg-white m-auto" style={{ top: "100px", width: "200px" }}>
					<img src="/img/loading.svg" alt="loading" className="img-fluid"/>
				<p>Loading</p>
				</div>
			</div>
		</div>
		)
}

export default Loading