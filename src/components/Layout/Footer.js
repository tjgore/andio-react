import React from 'react'

const Footer = (props) => {
	return(
		<div>
			<footer>
			  <div className="container-fluid bg-gray-300 pt-5">
			    <div className="row">
			      <div className="col-12 text-center pb-3">
			        <div className="pt-2 text-white">
			          <div className="bg-success d-inline-block hg-40 wd-40 text-white mx-auto rounded-circle hvr-bg-white hvr-green">
			            <i className="fab fa-facebook-f align-middle mt-2"></i>
			          </div>
			          <div className="bg-success d-inline-block hg-40 wd-40 text-white mx-auto rounded-circle hvr-bg-white hvr-green">
			            <i className="fab fa-twitter align-middle mt-2"></i>
			          </div>
			          <div className="bg-success d-inline-block hg-40 wd-40 text-white mx-auto rounded-circle hvr-bg-white hvr-green">
			            <i className="fab fa-linkedin-in align-middle mt-2"></i>
			          </div>
			        </div>
			      </div>
			      <div className="col-12 text-center">
			        <ul className="list-inline pt-2 pb-2">
			         
			            <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">About Us</a>
			            </li>

			             <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">Blog</a>
			            </li>

			             <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">Contact Us</a>
			            </li>
			           <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">Logn</a>
			            </li>
			             <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">Sign Up</a>
			            </li>
			            <li className="list-inline-item pr-2"> 
			              <a href="test" className="txt-gray-600 hvr-gray-dark hvr-nounderline">Privacy</a>
			            </li>
			        </ul>
			        <p>&copy; Andio 2018</p>
			      </div>
			    </div>
			  </div>
			</footer>
		</div>
		)
}

export default Footer