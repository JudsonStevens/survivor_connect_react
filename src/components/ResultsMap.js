import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import ResultMarker from './ResultMarker'

const ResultsMap = withScriptjs(withGoogleMap((props) => {
    const markers = props.results.map((result, index) => {
      let marker =  <ResultMarker
                      key={index}
                      closeMarkers={props.closeOtherMarkers}
                      id={index}
                      result={result}
                      location={{ lat: result.latitude, lng: result.longitude }}
                      activeMarker={ index === props.activeMarker ? true : false }
                    />
      return marker
    })
    return (
      <GoogleMap
        defaultZoom={ 10 }
        center={ props.location }
      >
        {markers}
      </GoogleMap>
    )
  }
))

export default ResultsMap