import React from 'react'
import AllMessages from './../Messages/allMessages'


const MessageCard = (props) => {

	return (
		<div>
			<div className="col-12 my-3 p-4 txt-gray-700 shadow-sm border">
			{ props.alert ? (<span onClick={props.showMessages} className="message-alert"></span>) : null }
				<div onClick={props.showMessages} className="d-flex flex-wrap">
					<img src="../img/chat.svg" alt="message" className="img-fluid hg-60 wd-60 mr-3"/>
					<div>
						<p className="txt-22 m-0 txt-gray-900">{props.conversation.subject}</p>
						<p className="small m-0 txt-gray-600 mb-3">
							<span className="font-weight-bold">Started:</span> {props.conversation.created_at.replace('T', ' ').substring(0, 19)}
						</p>
					</div>
					<button type="button" className="btn btn-link hvr-nounderline p-0 ml-auto">Messages</button>
				</div>
				<AllMessages messages={props.messages} />
			</div>
		</div>
		)
}


export default MessageCard