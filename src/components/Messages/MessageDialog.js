import React from 'react'
import { connect } from 'react-redux'
import MessageBox from './MessageBox'

const MessageDialog = (props) => {

  return (
    <div>  
      <div className="bg-white p-4 w-100 rounded">
        <h4>Subject: { props.request.title }</h4>
        <p>
          <span className="font-weight-bold">From:</span> { props.currentUser.firstName } {props.currentUser.lastName}
          <br/>
          <span className="font-weight-bold">To:</span> { props.request.user_full_name }
        </p>
       <MessageBox request={props.request} message={false}/>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.current_user
  }
}

export default connect(mapStateToProps)(MessageDialog)