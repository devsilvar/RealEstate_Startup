import { Link } from 'react-router-dom';
import './map.scss';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import Pin from '../pin/Pin';
import 'leaflet/dist/leaflet.css';

const Map = ({ items }) => {
  console.log(items);
  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={5}
      scrollWheelZoom={false}
      className='map'
    >
      <TileLayer
        className='mapInner'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map((data, index) => {
        return <Pin data={data} key={index} />;
      })}
    </MapContainer>
  );
};

export default Map;
