import React, { Component } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

export default class ResultMarker extends Component {
  state = {
    isOpen: false,
    activeMarker: this.props.activeMarker
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (!this.state.isOpen) {
        this.setState({ activeMarker: false}, () => {
          this.props.closeMarkers(null)
        })
      } else{
        this.props.closeMarkers(this.props.id)
      }
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({ activeMarker: nextProps.activeMarker })
  }

  render(){
    const result = this.props.result
    return(
      <div>
        <Marker onClick={this.toggleOpen}
                position={this.props.location}
        >
        { 
          this.state.isOpen && this.state.activeMarker ?
          <InfoWindow defaultPosition={this.props.location} onCloseClick={this.props.onToggleOpen}>
            <div>
              {result.name}
              <br />
              {result.bio_info}
            </div>
          </InfoWindow> : null
        }
        </Marker>
      </div>
    )
  }
}