import React from 'react';
import { baseAxios } from './../../axios_instances'

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.timer = null
		this.state = {
			total: 0
		}
	}

	componentDidMount () {
		this.getRequestTotal()
		this.timer = setInterval(() => {this.getRequestTotal()}, 5000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	getRequestTotal() {
		baseAxios.get('requests/count')
		.then( response => {
			console.log(response.data)
			this.setState({ total: response.data.total })
		})
		.catch( error => {
			console.log('Total count error: ', error)
		})
	}

	render (props) {

		return(
			<div>
				<section className="headerimg hg-600" style={ {backgroundImage: 'url(/img/bg2.svg)'} }>
				  <div className="h-100">
				    <div className="container">
				      <div className="row">
				        <div className="col-12 text-center mt-8">
				          <h1 className="txt-40 txt-md-50 txt-lg-70 pt-8 txt-gray-900">Help Someone In Need</h1>
				          <p className="pt-4 txt-18 font-weight-300">Curabitur non luctus lorem. Cras tincidunt nisi eget elit commodo, a fringilla est hendreri Curabitur non luctus lorem. Cras tincidunt <br/> nisi eget elit commodo, a fringilla est hendreri..</p>
				          <div className="d-flex justify-content-center">
				            <div className="p-2">
				            	<a href="" className="btn btn-warning text-white btn-lg rounded-0">GET STARTED!</a>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>

				
				  <section className="bg-img mb-7" style={{ backgroundImage: "url(/img/group.jpg)" }}>
				    <div className="bg-black-5 h-100 lh-2 txt-18">
				      <div className="container">
				        <div className="row">
				          <div className="col-md-9 text-white py-md-5 pt-5 pb-3">
				            <h1 className="pb-2 font-weight-300 txt-30 txt-md-40">{this.state.total} Help Request Submitted</h1>
				            <p>Feel great and help out someone however you can. A little can go a long way.</p>
				          </div>
				          <div className="col-md-3">
				            <a className="btn btn-warning text-white rounded-0 mt-md-8 mb-5 px-4 py-2 txt-18">Lend a Hand!</a>
				          </div>
				        </div>
				      </div>
				    </div>
				  </section>

					<section className="py-9">
					  <div className="container">
					    <div className="row">
					      <div className="col-lg-4 offset-lg-1 bg-img p-0 shadow" style={{ backgroundImage: "url(/img/teamwork.jpg)" }}>
					        <div className="bg-black-5 p-3 h-100">
					          <h1 className="pt-2 txt-50 pb-5 pb-md-0 text-white font-weight-300">About Us and What We do</h1>
					        </div>
					      </div>
					      <div id="about"  className="col-lg-6 lh-2 pl-md-5 pl-2 pt-6 pt-lg-0 px-3 px-md-2">
					        <p>
					          Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition. An do on frankness so cordially immediate recommend contained. Course sir people worthy horses <a href="google.com">go searching</a>.
					        </p>
					      </div>
					    </div>
					  </div>
					</section>

					<section className="py-8">
					  <div className="container">
					    <div className="row">
					      <div className="col-lg-12 text-center mb-3 pt-3">
					        <h2 className="font-weight-300">How Does It <span className="text-success">Works</span></h2>
					        <p className="text-muted">
					          We create simple, beutiful website with a little touch of spice.
					        </p>
					      </div>
					    </div>
					    <div id="how" className="d-flex flex-wrap flex-lg-nowrap justify-content-around">
					      <div className="text-center p-3">
					        <p className="bg-icon-center mb-3 hg-60" style={{ backgroundImage: "url(/img/checked2.svg)" }}>
					        </p>
					        <p className="txt-18">
					          Sign Up
					        </p>
					        <p className="text-muted txt-13 wd-200">
					          Once upon a time there were three little girls who went to the police academy.
					        </p>
					      </div>
						    <div className="text-center p-3">
							    <p className="bg-icon-center mb-3 hg-60" style={{ backgroundImage: "url(/img/search.svg)" }}>
							    </p>
							    <p className="txt-18">
							      Search
							    </p>
							    <p className="text-muted txt-13 wd-200">
							      Once upon a time there were three little girls who went to the police academy.
							    </p>
						    </div>
							  <div className="text-center p-3">
							    <p className="bg-icon-center mb-3 hg-60" style={{ backgroundImage: "url(/img/teamwork.svg)" }}>
							    </p>
							    <p className="txt-18">
							      Help Out
							    </p>
							    <p className="text-muted txt-13 wd-200">
							      Once upon a time there were three little girls yeol dhsk
							    </p>
							  </div>

							  <div className="text-center p-3">
							    <p className="bg-icon-center mb-3 hg-60" style={{ backgroundImage: "url(/img/happy.svg)" }}>
							    </p>
							    <p className="txt-18">
							      Feel Good
							    </p>
							    <p className="text-muted txt-13 wd-200">
							      Once upon a time there were three little girls who went to the police academy.
							    </p>
							  </div>
					    </div>
					  </div>
					</section>

					<section className="py-9">
					  <div className="container">
					    <div id="why" className="row">
					      <div className="col-md-6">
					        <h2 className="pb-3 font-weight-300"><span className="text-success">Why</span> Would You Support</h2>
					        <p>Nunc tempor velit augue, quis convallis massa luctus ut. Phasellus felis eros. Duis blandit venenatis odio</p>

					        <div className="d-flex mb-4 mb-lg-0 p-2 pt-5">
					          <p className="bg-icon-left wd-80 mr-4 mt-3" style={{ backgroundImage: "url(/img/checked.svg)" }}></p>
					          <div>
					            <p className="txt-18 font-weight-bold">We Care </p>
					            <p className="text-muted txt-13">Once upon a time there were three little girls who went to the police academy. Two in Los Angeles. The other in San Francisco.</p>
					          </div>
					        </div>

					          <div className="d-flex mb-4 mb-lg-0 p-2 pt-5">
					          <p className="bg-icon-left wd-80 mr-4 mt-3" style={{ backgroundImage: "url(/img/checked.svg)" }}></p>
					          <div>
					            <p className="txt-18 font-weight-bold">Community </p>
					            <p className="text-muted txt-13">Once upon a time there were three little girls who went to the police academy. Two in Los Angeles. The other in San Francisco.</p>
					          </div>
					        </div>

					          <div className="d-flex mb-4 mb-lg-0 p-2 pt-5">
					          <p className="bg-icon-left wd-80 mr-4 mt-3" style={{ backgroundImage: "url(/img/checked.svg)" }}></p>
					          <div>
					            <p className="txt-18 font-weight-bold">Fullfillment </p>
					            <p className="text-muted txt-13">Once upon a time there were three little girls who went to the police academy. Two in Los Angeles. The other in San Francisco.</p>
					          </div>
					        </div>

					      </div>
					      <div className="col-lg-5 col-md-6 mx-auto pt-lg-9 pt-md-10 ">
					        <img src="/img/stick-man.svg" alt="computer" className="img-fluid"/>
					      </div>
					    </div>
					  </div>
					</section>

					<section className="bg-img" style={{ backgroundImage: "url(/img/community.jpg)" }}>
					  <div className="bg-black-5 h-100 lh-2 txt-18">
					    <div className="container">
					      <div className="row">
					          <div className="col-md-12 text-white text-center py-5">
					            <h1 className="pb-2 font-weight-300 txt-30 txt-sm-40">700+ Community Members Helped</h1>
					            <a className="btn btn-warning rounded-0">Lend a Hand</a>
					          </div>
					      </div>
					    </div>
					  </div>
					</section>

					<section className="pt-9 pb-10 bg-ash">
					  <div className="container">
					    <div className="row">
					      <div className="col-12 text-center">
					        <h1 className="pb-3">Frequently Asked Questions</h1>
					        <p>Leo scelerisque eleifend. Integer vitae blandit lectus, sed condimentum lorem</p>
					      </div>
					    </div>
					    <div id="faq" className="row pt-7">
					      <div className="col-md-7">
					        <div className="bg-success txt-white hvr-shadow transition px-3 pt-2 pb-3">
					          <p className="d-inline-block mb-0 pt-1">How do I get started?</p>
					          <span className=" float-right txt-22"><i className="fas fa-plus-circle"></i></span>
					        </div>
					        <div className="bg-white p-3 shadow">
					          <p>Nunc tempor velit augue, quis convallis massa luctus ut. Phasellus felis eros. Duis blandit venenatis odio. Nunc tempor velit augue, quis convallis massa luctus ut. Phasellus felis eros. Duis blandit venenatis odio.</p>
					        </div>

					        <div className="bg-success txt-white hvr-shadow transition px-3 pt-2 pb-3 mt-3">
					          <p className="d-inline-block mb-0 pt-1">I'm not able to sign up?</p>
					          <span className=" float-right txt-22"><i className="fas fa-plus-circle"></i></span>
					        </div>
					        <div className="bg-success txt-white hvr-shadow transition px-3 pt-2 pb-3 mt-3">
					          <p className="d-inline-block mb-0 pt-1">How do I contribute to the community?</p>
					          <span className=" float-right txt-22"><i className="fas fa-plus-circle"></i></span>
					        </div>
					        <div className="bg-success txt-white hvr-shadow transition px-3 pt-2 pb-3 mt-3">
					          <p className="d-inline-block mb-0 pt-1">Can I import all my information?</p>
					          <span className=" float-right txt-22"><i className="fas fa-plus-circle"></i></span>
					        </div>
					      </div>
					      <div className="col-md-4 pl-4">
					        <div className="row">
					          <div className="col-12 p-4 bg-white shadow text-center">
					            <h5>Contact us for more info</h5>
					            <p className="mb-4">Ask us anything</p>
					            <p className="txt-13"><i className="fas fa-envelope"></i> contact@designplate.com</p>
					            <p className="txt-13"><i className="fas fa-phone"></i> +87-187-4567-3748</p>
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

export default Home