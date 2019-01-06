import React from 'react';

const SingleRequestInfo = (props) => {
  return (
          <div className="px-4">
            <div className="px-2">
              <h5 className="font-weight-bold mb-0 txt-30">{ props.request.title }</h5>
              <div className="mb-4 pt-1 txt-14">
                <span className="font-weight-bold">Location:</span>
                <span className="text-muted mr-2"> { props.request.location }</span>

                <span className="font-weight-bold">Category:</span>
                <span className="text-muted mr-2"> { props.request.category }</span>

                <span className="font-weight-bold">Status:</span>
                <span className="text-muted"> { props.request.status }</span> 
              </div>
              <p className="txt-18">
                { props.request.description }
              </p>
              <p className="pt-1 txt-14 mb-0">
                <span className="font-weight-bold">From:</span>
                <span className="text-muted mr-2"> { props.request.user_full_name }</span>
              </p>
            </div>
            <div className="py-3 px-2 text-right">
              
            </div>
          </div>
    )
}

export default SingleRequestInfo