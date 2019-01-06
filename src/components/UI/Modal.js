import React from  'react'
import { connect } from 'react-redux'
import { setModal } from './../../store/actions/actions'
import SingleRequestInfo from './../Requests/SingleRequestInfo'
import MessageDialog from './../Messages/MessageDialog'

const Modal = (props) => {

  let modalContent;
  if (props.modal.type === 'singleRequest') {
    modalContent = <SingleRequestInfo request={props.modal.data} />
  } else if (props.modal.type === 'convo') {
     modalContent = <MessageDialog request={props.modal.data} />
  }

  return(
    <div>
    { props.modal.open ? 
      <section id="modal">
      <div onClick={() => props.setModal({open: false})} className="modal-backdrop">
      </div>

      <div className="inner-modal">
        <div className="pointer text-center pt-2 pb-3">
          <span onClick={() => props.setModal({open: false})} className="float-right wd-60 font-weight-bold txt-30">&times;</span>
        </div>
          <div className="p-3 m-auto pb-4" style={{ top: "100px", maxWidth: "100%" }}>
          { modalContent }
          </div>
        </div>
      </section>
       : null }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal)