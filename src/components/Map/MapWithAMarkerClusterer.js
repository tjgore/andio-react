import React from "react"
import { compose, withProps, withHandlers, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { MarkerClusterer } from  'react-google-maps/lib/components/addons/MarkerClusterer';

import { connect } from 'react-redux'
import { setModal } from './../../store/actions/actions'
// 40.6976684 -74.2605573
const MapWithAMarkerClusterer = compose(
  withStateHandlers(() => ({
   isOpen: false,
 }),
  {
    onToggleOpen: ({isOpen}) => () => ({
      isOpen: !isOpen
    }),
    showInfo: ({isOpen}) => (i) => ({
      isOpen: true, 
      showInfoIndex: i
    })
  }),
  withProps({
    isMarkerShown: true,
    // dev  https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8FgNi3T6OUefCGh9pSjm3CkxkwhKGFew",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
   withHandlers({
    onMarkerClustererClick: (props) => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    ref={props.onMapMounted}
    onIdle={props.handleMapChanged}
    defaultZoom={10}
    defaultCenter={{ lat: props.currentPosition.lat, lng: props.currentPosition.lng  }}
  >
    <MarkerClusterer
  onClick={props.onMarkerClustererClick}
  averageCenter
  enableRetinaIcons
  gridSize={60}
  >
  {props.markers.map((marker, i) => (
    <Marker
    onClick={() => {props.showInfo(marker.id )}}
    key={marker.id}
    position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
    icon= {(marker.category === 'service') ? { url: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png' } : { url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
    >
    { props.showInfoIndex === marker.id && props.isOpen
      && <InfoWindow onCloseClick={() => props.onToggleOpen()} 
      >
    <div style={ {padding: "10px"} }>
    <h5 style={{ margin: "0px" }}>{ marker.title }</h5>
    <div className="mb-4 pt-1 txt-14">
      <span className="font-weight-bold">Location:</span>
      <span className="text-muted mr-2"> { marker.location }</span>

      <span className="font-weight-bold">Category:</span>
      <span className="text-muted mr-2"> { marker.category }</span>

      <span className="font-weight-bold">Status:</span>
      <span className="text-muted"> { marker.status }</span> 
    </div>
    <p>{marker.description}</p>
    <button onClick={() => props.setModal({open: true, type: 'convo', data:marker})} className="btn btn-warning lend">Lend a Hand</button>
    </div>
    </InfoWindow>}
    </Marker>
    ))}
  </MarkerClusterer>
  </GoogleMap>
);

const mapDispatchToProps = (dispatch) => {
  return {
    setModal: (val) => { dispatch(setModal(val)) },
  }
}


export default connect(null, mapDispatchToProps)(MapWithAMarkerClusterer)

