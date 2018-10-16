import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import mapStyles from './mapStyles.json'
import MainMarker from './images/main-marker.png'
import RideMarker from './images/rides-marker.png'
// import HoverMarker from './images/hover-marker.png'
/*
  ** TODO: figure out how to change marker icon on hover **
  ** TODO: figure out how to show infoWindow on marker hover **
*/


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
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
            <div onClick={props.toggleMainOpen} style={{ width:`75px`, opacity: 0.5, padding: `12px` }}>
              <div style={{ fontFamily: `waltograph`, fontSize: `2em`, color: `#82C2BF`  }}>
                Happiest Place on Earth!
              </div>
            </div>
          </InfoWindow>
        }
    </Marker>
    }

    {/* *** Ride Markers, filtered by title *** */}
    {
      props.filteredRides.map((ride, index) => (
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
                onCloseClick={props.toggleOpen}
                options={{
                  closeBoxURL: ``,
                  enableEventPropagation: true,
                  alignBottom: true
                }}
            >
              <div style={{ maxWidth:`100%`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontFamily: `waltograph`, fontSize: `2em`, color: `#82C2BF`, opacity: 1 }}>
                  {ride.title}
                </div>
              </div>
            </InfoWindow>
          }
        </Marker>
      ))
    }

    {/* *** Ride Markers, filtered by ride type *** */}
    {
      props.filteredRideTypes.map((ride, index) => (
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
                onCloseClick={props.toggleOpen}
                options={{
                  closeBoxURL: ``,
                  enableEventPropagation: true,
                  alignBottom: true
                }}
            >
              <div style={{ maxWidth:`100%`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontFamily: `waltograph`, fontSize: `2em`, color: `#82C2BF`, opacity: 1 }}>
                  {ride.title}
                </div>
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
      isMainOpen: false,
      data: null
    }
    this.toggleMainOpen = this.toggleMainOpen.bind(this)
  }

  toggleMainOpen = () => {
    this.setState(prevState => ({
      isMainOpen: !prevState.isMainOpen
    }));
  }

  render() {
    const { rides, filteredRides, filteredRideTypes, markerClicked, isOpen } = this.props
    let quote


    return (
      <MyMapComponent
        isMarkerShown
        center = {{ lat: 33.8091, lng: -117.918972 }}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyA8HDeuxQegHPX6FU5jN-_LU75rDIXSfhM"
        loadingElement={<div style={{ height: `100%`, fontSize:`3em`, lineHeight:`4em`, color: `rgb(130,194,191)` }}>Loading...</div>}
        containerElement={<div style={{ height: `calc(100vh - 95px)` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        rides={rides}
        filteredRides={filteredRides}
        filteredRideTypes={filteredRideTypes}
        markerClicked={markerClicked}
        isMainOpen={this.state.isMainOpen}
        toggleMainOpen={this.toggleMainOpen}
        isOpen={isOpen}
      />
    )
  }
}

export default Map
