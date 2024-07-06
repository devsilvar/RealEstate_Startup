import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
const Pin = ({ data }) => {
  return (
    <Marker position={[data.latitude, data.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default Pin;
