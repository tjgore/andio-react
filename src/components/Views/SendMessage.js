import React from 'react';

const SendMessage = () => {
	return(
		<div>
			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 pt-3">
							<p className="txt-30 pl-3 d-inline-block">Sara Williams</p>
							<div className="d-inline-block float-right">
								<a href="reply" className="btn btn-success">Reply</a>
							</div>
							<div className="row">
								<div className="d-none d-md-block col-md-3 border-top border-right pb-3 pt-4 text-center">
									<div className="bg-img hg-120 wd-120 rounded-circle mb-3 mx-auto" style={{ backgroundImage: "url('/img/mary.jpg')" }}></div>

									<p className="txt-30 font-weight-bold mb-0">Sara Williams</p>
									<p className="border-bottom p-0 pb-2">New York</p>
									<div className="text-left pt-3 pl-md-2">
										<p>Mobile: 187289345</p>
										<p>Gender: Female</p>
										<p>Language: English</p>
									</div>
									<p className="txt-20 font-weight-bold mb-0 pt-3">Requests</p>
									<div className="text-left pt-3 pl-md-2 pb-5">
										<p><span className="txt-20 font-weight-bold">23</span> Completed</p>
										<p><span className="txt-20 font-weight-bold">19</span> Submitted</p>
										<p><span className="txt-20 font-weight-bold">5x</span> Got Helped</p>
									</div>
								</div>
								<div className="col-md-9 border-top p-3 p-sm-5 bg-snow">
									<div className="d-flex flex-nowrap">
										
										<div className="bg-white p-4 w-100 rounded">
											<h4>Subject: Community Service</h4>
											<p>
												<span className="font-weight-bold">From:</span> Sara Williams, sara@gmail.com
												<br/>
												<span className="font-weight-bold">Date:</span> Nov 12, 2018
											</p>
											<p>
												hello, How are you doing? I'm interested in working with you. How can I help out Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe.
											</p>
											<p>
												Regards,<br/>
												Sara
											</p>
										</div>
									</div>

								</div>
							</div>

						</div>
						
						<div className="col-12 col-md-2 border-left p-0">
							<p className="txt-20 font-weight-bold mb-0 pt-3 text-center pb-4">Inbox</p>
							
								<div className="pb-2 border-top p-2">
									<p className="mb-0 txt-16 font-weight-bold">Message me soon</p>
									<p className="small mb-0"><span className="font-weight-bold">Mary:</span> Mar 15, 2018</p>
									<p className="txt-13">Fat new smallness few supposing </p>
								</div>

								<div className="pb-2 border-top p-2">
									<p className="mb-0 txt-16 font-weight-bold">Message me soon</p>
									<p className="small mb-0"><span className="font-weight-bold">Paul:</span> Apr 30, 2018</p>
									<p className="txt-13">Fat new smallness few supposing </p>
								</div>
								
						</div>
					</div>
				</div>
			</section>
		</div>
		)
} 

export default SendMessage 