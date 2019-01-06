import React from 'react'
import { connect } from 'react-redux'
import { setRequest, 
         deleteRequest, 
         setModal, 
         updateRequestActive, 
         updateRequestStatus, } from './../../store/actions/actions'
import RequestCard from './RequestCard'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class RequestCardContainer extends React.Component {

  componentDidMount = () => {
    if (this.props.userRequest) { 
      this.props.getRequest() 
    }
  }

  viewRequest = (id) => {
    let request = this.props.userRequest ? this.props.currentUserRequests.filter( request => request.id === id) : this.props.requests.filter( request => request.id === id)
    this.props.setModal({open: true, type: 'singleRequest', data: request[0]})
  }

  deleteRequest = (arrayIndex) => {
    let requests = [...this.props.currentUserRequests]
    let requestId = requests[arrayIndex].id
    requests.splice(arrayIndex, 1)
    this.props.deleteRequest(requests, requestId)
    toast.warning("Request Deleted")
  } 

  lend = (id) => {
    let request = this.props.requests.filter( request => request.id === id)
    this.props.setModal({open: true, type: 'convo', data: request[0]})
  }

  activeHandler = (id) => {
    let active

    let requests = this.props.currentUserRequests.filter( request => { 
     if (request.id === id) {
      request.active = active = (request.active === 1) ? 0 : 1
     } 
     return request
   }) 
    this.props.switchActive({id: id, requests: requests, active: active })
  } 

  statusHandler = (id) => {
    let status
    let requests = this.props.userRequest ? this.props.currentUserRequests : this.props.requests

    requests = requests.filter( request => { 
     if (request.id === id) {
      request.status = status = (request.status === 'not fullfilled') ? 'fullfilled' : 'not fullfilled'
     } 
     if (!this.props.userRequest && request.status === 'fullfilled') {
      return null
     }
     return request
   }) 
    this.props.switchStatus({id: id, requests: requests, status: status, user: this.props.userRequest })
  }
  

  render(props) {
    let requests
    requests = (this.props.userRequest) ? this.props.currentUserRequests : this.props.requests
  
    requests = requests.map((request, index) => {
          if (this.props.userRequest) {
            return (
            <div key={request.id} className="col-md-6 col-12 pt-4 pt-md-0">
              <RequestCard 
              status={ this.statusHandler.bind(this, request.id) } 
              showActive={true}
              active={ this.activeHandler.bind(this, request.id) }  
              deleteButton={this.props.userRequest}
              delete={ this.deleteRequest.bind(this, index) }
              viewRequest={ this.viewRequest.bind(this, request.id) }  
              request={request} />
            </div>
            )
          } else {
            return (
            <div key={request.id} className="col-md-6 col-12 pt-4 pt-md-0">
              <RequestCard 
              status={ this.statusHandler.bind(this, request.id) }
              lendButton={!this.props.userRequest}
              lend={ this.lend.bind(this, request.id) }
              viewRequest={ this.viewRequest.bind(this, request.id) }  
              request={request} />
            </div>
            )
          }  
        })

    if(requests.length === 0 && this.props.userRequest) {
      requests = (
        <div className=" col-12 text-center pt-5">
        <p className="txt-30">You haven't added any requests as yet.</p>
        </div>
        )
    } else if(requests.length === 0 && !this.props.userRequest) {
      requests = (
        <div className=" col-12 text-center pt-5">
        <p className="txt-30">There aren't any requests in your area. <br/> Drag your map around to find requests near you</p>
        </div>
        )
    }

    return(
      <div className="row">
        {requests}
      </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    currentUserRequests: state.currentUserRequests,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) },
    getRequest: (val) => { dispatch(setRequest(val)) },
    deleteRequest: (requests, requestId) => { dispatch(deleteRequest(requests, requestId)) },
    switchActive: (requestActive) => { dispatch(updateRequestActive(requestActive)) },
    switchStatus: (requestStatus) => { dispatch(updateRequestStatus(requestStatus)) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestCardContainer)