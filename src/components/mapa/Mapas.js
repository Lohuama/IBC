import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Mapa extends Component {
  render() {
    const isMobile = window.innerWidth <= 768;

    const mapStyles = {
      width: '100%',
      height: '400px',
      marginTop: isMobile ? '60%' : '15%'
    };

    const initialPosition = {
      lat: -7.1996810325619425,
      lng: -34.85967507534239
    };

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={initialPosition}
        >
          <Marker position={initialPosition} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCIguWNVLK--yFLqs1h9c6WSMTY2cpdPzY',
})(Mapa);
