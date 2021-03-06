import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import mapStyles from './styles/mapStyles.json'
import MainMarker from './images/main-marker.png'
import RideMarker from './images/rides-marker.png'
// import HoverMarker from './images/hover-marker.png'
/*
  ** TODO: figure out how to change marker icon on hover **
  ** TODO: figure out how to show infoWindow on marker hover **
*/


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
      ref={props.zoomToMarkers}
      defaultZoom={ 16 }
      defaultCenter={props.center}
      defaultOptions={{ styles: mapStyles, mapTypeControl: false }}
  >
    {/* *** Center/Main Marker *** */}
    {
      props.isMarkerShown &&
      <Marker
          icon={MainMarker}
          position={props.center}
          title='Happiest Place on Earth'
          onClick={props.toggleMainOpen}
      >
        {
          props.isMainOpen &&
          <InfoWindow
              onCloseClick={props.toggleMainOpen}
              options={{
                  closeBoxURL: ``,
                  enableEventPropagation: true,
                  alignBottom: true
              }}
          >
            <div onClick={props.toggleMainOpen} style={{ minWidth:`75px`, opacity: 0.5, padding: `12px` }}>
              <div style={{ fontFamily: `waltograph`, fontSize: `2.2em`, color: `#82C2BF`, marginBottom: `5px` }}>
                Happiest Place on Earth!
              </div>

              <div style={{ fontFamily: `Shadows Into Light Two` }}>
                <span>{`Today's date:  ${props.today}`}</span>
              </div>

              <hr />

              <div className="rons-thoughts">
                <h4>Ron Swanson Thought of the Moment</h4>
                <p id="quote">{props.quote}</p>
              </div>
            </div>
          </InfoWindow>
        }
    </Marker>
    }

    {/* *** Ride Markers *** */}
    {
      props.allRides.map((ride, index) => (
        <Marker
            key={index}
            icon={RideMarker}
            position={ride.location}
            title={ride.title}
            onClick={props.markerClicked.bind(this,ride)}
        >
          {
            props.isOpen &&
            <InfoWindow
                onCloseClick={props.clearQuery}
                options={{
                    closeBoxURL: ``,
                    enableEventPropagation: true,
                    alignBottom: true
                }}
            >
              <div aria-labelledby="ride title" style={{ maxWidth:`100%`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontFamily: `waltograph`, fontSize: `2em`, color: `#82C2BF`, opacity: 1, marginBottom: `5px` }}>
                  {ride.title}
                </div>
                <span style={{ fontFamily: `Shadows Into Light Two`, fontSize: `1em` }}><strong style={{ color: `#C29F82` }}>Current Wait Time:</strong> { props.apiFail ? 'no ride times available' : `${ride.waitTime} minutes` }</span>
                <br />
              </div>
            </InfoWindow>
          }
        </Marker>
      ))
    }
  </GoogleMap>
))


class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quote: null
    }
  }

  componentDidMount() {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then( results => {return results.json()} )
    .then( quote => this.setState({ quote }) )
    .catch(err => {
      console.log('there has been an error loading the quote')
      console.log(err)
    })
  }


  render() {
    const { rides, allRides, markerClicked, isOpen, clearQuery, isMainOpen, toggleMainOpen, zoomToMarkers, apiFail } = this.props
    const { quote } = this.state

    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    let today = year + `-` + month + `-` + day

    return (
      <MyMapComponent
          isMarkerShown
          center = {{ lat: 33.8091, lng: -117.918972 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
          loadingElement={<div aria-label="Loading map…" style={{ height: `100%`, fontSize:`3em`, lineHeight:`4em`, color: `rgb(130,194,191)` }}>Loading...</div>}
          containerElement={<div aria-label="map container" tabIndex={-1} style={{ height: `calc(100vh - 95px)` }} />}
          mapElement={<div aria-label="map" style={{ height: `100%` }} />}
          rides={rides}
          allRides={allRides}
          isOpen={isOpen}
          markerClicked={markerClicked}
          clearQuery={clearQuery}
          isMainOpen={isMainOpen}
          toggleMainOpen={toggleMainOpen}
          quote={quote}
          zoomToMarkers={zoomToMarkers}
          apiFail={apiFail}
          today={today}
      />
    )
  }
}

export default Map
