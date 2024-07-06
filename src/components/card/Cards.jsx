import { Link } from 'react-router-dom';
import './cards.scss';

const Cards = ({ item }) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt={item.title} />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src='/pin.png' alt='' />
          <span>{item.address}</span>
        </p>
        <p className='price'> $ {item.price}</p>
        <div className='bottom'>
          <div className='feutures'>
            <div className='feuture'>
              <img src='/bed.png' alt='' />
              <p>{item.bedroom} bedroom</p>
            </div>
            <div className='feuture'>
              <img src='/bath.png' alt='' />
              <p>{item.bathroom} bathroom</p>
            </div>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src='/save.png' alt='' />
            </div>
            <div className='icon'>
              <img src='/chat.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
