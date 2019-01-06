import React from 'react'
import MessageBox from './MessageBox'


const allMessages = (props) => {
  return(
    <div className="pt-3">
    {
     props.messages.length > 0  ? <MessageBox start={true} messages={props.messages} /> : null
    }
    {
      props.messages.map( msg => ( 
        <div key={msg.id}>
        <span className="font-weight-bold">{msg.from_full_name}:</span> <br/> <span className="txt-13">{msg.created_at.replace('T', ' ').substring(0, 19)}</span>
        <p className="pl-4 text-muted">{msg.body}</p>
        <hr/>
        </div>
      ))
    }
    
    </div>
    )
}

export default allMessages