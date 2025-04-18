import React from 'react'; 
import { GoogleMap, Marker } from '@react-google-maps/api';

type MapDisplayProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapDisplay: React.FC<MapDisplayProps> = ({ lat, lng, zoom = 14 }) => {
  const center = { lat, lng };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapDisplay;
