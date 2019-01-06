import React from 'react'
import MessageCard from './../Messages/MessageCard'
import { connect } from 'react-redux'
import { getConversations, getMessages } from './../../store/actions/actions'


class Messages extends React.Component {

	componentDidMount () {
    this.props.viewConversations()
  }


  viewMessages = (convoId) => {
	  this.props.viewMessages(convoId)
  }

	render () {

		let messageCards = <h3 className="text-center">No Messages Yet</h3>

		if (this.props.conversations.length > 0) {
			messageCards = this.props.conversations.map(conversation => {
				let alert = this.props.alerts.find( alert =>  { 
					if (alert.conversation_id === conversation.id) { 
						return true 
					} 
					return null
				})
				return <MessageCard 
				alert={alert}
				key={conversation.id} 
				conversation={conversation} 
				messages={this.props.messages.filter( msg => msg.conversation_id === conversation.id)}
				showMessages={this.viewMessages.bind(this, conversation.id)} />
			})
		}
							
	return(
		<div>
		<section className="py-6">
			<div className="container">
				<div className="row">
					<div className="col-12 pb-3">
						<h1 className="font-weight-300 text-center pb-3">All Messages</h1>
					</div>
					<div className="col-12 col-md-8 offset-md-2 p-0 lh-1-5">
						
						{ messageCards }

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
		conversations: state.conversations,
		messages: state.messages,
		alerts: state.messageAlerts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		viewConversations: () => { dispatch(getConversations()) },
		viewMessages: (convoId) => { dispatch(getMessages(convoId)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)