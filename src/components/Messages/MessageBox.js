import React from 'react'
import Schema from 'form-schema-validation'
import { Form, TextareaField, SubmitField } from 'react-components-form'
import { baseAxios } from './../../axios_instances'
import './../UI/Form.css'
import { connect } from 'react-redux'
import { loading, setModal, submitMessage, updateRequest } from './../../store/actions/actions'
import { toast } from 'react-toastify';

const MessageBox = (props) => {


  const messageSchema = new Schema({
    message: {
      type: String,
      validators: [
        {
          validator: (value) => {
            if(value === undefined || value === '') {
              return false;
            }
          },
          errorMessage: 'Message is required'
        }
      ]
    },
  })

  const submitMethod = (model) => {
    props.loading(true)
    if (props.start) {
      let messageInfo = {
        message: {
          conversation_id: props.messages[0].conversation_id,
          from_id: props.currentUser.id,
          to_id: (props.messages[0].to_id === props.currentUser.id) ? props.messages[0].from_id : props.messages[0].to_id ,
          body: model.message
        }
      }
      clearFormData()
      props.submitMessage(messageInfo)
    } else {
      let conversationInfo = {
        conversation: {
          request_id: props.request.id,
          to_id: props.request.user_id,
          subject: props.request.title,
          body: model.message
        }
      }
      clearFormData()
      submitConversation(conversationInfo)
    }
    props.loading(false)
  }

  const clearFormData = () => {
    document.getElementById('form').reset()
    document.querySelector('textarea[name="message"]').innerHTML = ''
    let event = new Event('change', { bubbles: true })
    document.querySelector('textarea[name="message"]').dispatchEvent(event)
  }

  const submitConversation = (conversationInfo) => {
    baseAxios.post('conversations/', conversationInfo, {
      headers: { 
        'Authorization': props.currentUser.token
      }
    })
    .then( response => {
      props.loading(false)
      toast.warning("Conversation has been started")
      props.setModal({open: false})
      let requests = props.requests.filter( request => {
        if(conversationInfo.conversation.request_id === request.id && request.start_count === 4) {
          return null
        }
        return request  
      })
      props.updateMapRequest(requests)
    })
    .catch( error => {
      props.loading(false)
      console.log(error)
    })
  }

  return (
    <div id="messageBox"> 
      <Form
      schema={messageSchema}
      onSubmit={submitMethod}
      >
        <div id="messageTextarea" className="form-group">
          <TextareaField className="form-control" name="message" placeholder="Write your message here"></TextareaField>
        </div>
        <div id="submit" className="text-center pt-2">
          <SubmitField className="btn btn-warning text-white rounded-0 px-5 py-2" value="Send Message"/>
        </div>
      </Form>
    </div>

    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loading: (val) => { dispatch(loading(val)) },
    setModal: (val) => { dispatch(setModal(val)) },
    submitMessage: (val) => { dispatch(submitMessage(val)) },
    updateMapRequest: (requests) => { dispatch(updateRequest(requests)) }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.current_user,
    requests: state.requests
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)