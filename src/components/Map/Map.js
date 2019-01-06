import React from 'react'
import MapWithAMarkerClusterer from './MapWithAMarkerClusterer'
import { connect } from 'react-redux'
import { setMapRequest } from './../../store/actions/actions'

class Map extends React.PureComponent {

  handleMapChanged = () => {
    //console.log('Map Dragged')
    this.getMapBounds()
  }

  handleMapMounted = (map) => {
    this.map = map
  }

  getMapBounds = () => {
    let mapNEBoundsLat = this.map.getBounds().getNorthEast().lat()
    let mapNEBoundsLng = this.map.getBounds().getNorthEast().lng()
    let mapSWBoundsLat = this.map.getBounds().getSouthWest().lat()
    let mapSWBoundsLng = this.map.getBounds().getSouthWest().lng()

    this.props.getMapRequest({ 
      northEastLng: mapNEBoundsLng,
      southWestLng: mapSWBoundsLng,
      northEastLat: mapNEBoundsLat,
      southWestLat: mapSWBoundsLat,
    })
  }

  render(props) {
    if (this.props.currentLocation) {
      return (
        <MapWithAMarkerClusterer
        onMapMounted={this.handleMapMounted.bind(this)} 
        handleMapChanged={this.handleMapChanged.bind(this)} 
        currentPosition={this.props.currentLocation} 
        markers={this.props.requests}/>
        )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMapRequest: (coordinates) => { dispatch(setMapRequest(coordinates)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)