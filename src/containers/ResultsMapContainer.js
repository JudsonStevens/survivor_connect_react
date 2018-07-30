import React, { Component } from 'react'
import ResultsMap from '../components/ResultsMap'

export default class ResultsMapContainer extends Component {
  state = {
    results: [],
    location: this.props.location,
    activeMarker: null
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.results !== this.props.results){
      this.setState({
        results: nextProps.results,
        location: nextProps.location
      })
    }
  }

  closeOtherMarkers = (id) => {
    this.setState({activeMarker: id})
  }

  render() {
    return(
      <ResultsMap
        results={this.props.results}
        location={this.state.location}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwH0sosPJE1OHIKV4QSHJjpP4vhH8B1KM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div id="map-container" style={{ height: `400px` }} />}
        mapElement={<div id="map-element" style={{ height: `100%` }} />}
        activeMarker={this.state.activeMarker}
        closeOtherMarkers={this.closeOtherMarkers}
      />
    );
  }
}