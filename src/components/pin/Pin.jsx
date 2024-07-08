import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom';
const Pin = ({ data }) => {
  return (
    <Marker position={[data.latitude, data.longitude]}>
      <Popup>
        <div className='popContainer'>
          <img src={data.img} alt='' />
          <div className='textContainer'>
            <Link to={`/list/${data.id}`}>
              {data.title.length > 10
                ? String(data.title).substring(0, 25)
                : data.title}
            </Link>
            <span className='bed'>{data.bedroom} Bedroom</span>
            <span>
              {' '}
              <b> ${data.price} </b>
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
