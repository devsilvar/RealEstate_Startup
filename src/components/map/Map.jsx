import { Link } from 'react-router-dom';
import './map.scss';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import Pin from '../pin/Pin';

const Map = ({ item }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className='map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {item.map((data) => (
        <Pin data={data} />
      ))}
    </MapContainer>
  );
};

export default Map;
