import React from 'react';
import './singlepage.scss';
import Slider from '../../components/sliderimage/Slider';
import { singlePostData, userData } from '../../api/fakeData';
import Map from '../../components/map/Map';

const Singlepage = () => {
  let Data = [singlePostData];
  console.log(Data);
  return (
    <section className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={singlePostData.images} />
          <div className='info'>
            <div className='top'>
              <div className='post'>
                <h1>{singlePostData.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{singlePostData.address}</span>
                </div>
                <div className='price'>${singlePostData.price}</div>
              </div>
              <div className='user'>
                <div className='user-content'>
                  <img src={userData.img} alt='' />
                  <span>{userData.name}</span>
                </div>
              </div>
            </div>
            <div className='bottom'>
              <p> {singlePostData.description} </p>
            </div>
          </div>
        </div>
      </div>
      <div className='feutures'>
        <div className='wrapper'>
          <p className='title'>General</p>
          <div className='list-vertical'>
            <div className='feuture'>
              <img src='/utility.png' alt='' />
              <div className='fetured-text'>
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className='feuture'>
              <img src='/pet.png' alt='' />
              <div className='fetured-text'>
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className='feuture'>
              <img src='/fee.png' alt='' />
              <div className='fetured-text'>
                <span>Poperty Fee</span>
                <p>Must have 3x the rest in Total Household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className='sizes'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>80 sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>2 Beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='list-horizontal'>
            <div className='feuture'>
              <img src='/school.png' alt='' />
              <div className='fetured-text'>
                <span>School</span>
                <p>250m Away</p>
              </div>
            </div>
            <div className='feuture'>
              <img src='/pet.png' alt='' />
              <div className='fetured-text'>
                <span>Bus Stop</span>
                <p>100m Away</p>
              </div>
            </div>
            <div className='feuture'>
              <img src='/fee.png' alt='' />
              <div className='fetured-text'>
                <span>Resataurant</span>
                <p>200m Away</p>
              </div>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className='mapContainer'>
            <Map items={Data} />
          </div>
          <div className='buttons'>
            <button>
              {' '}
              <img src='/chat.png' alt='' /> Send a Message
            </button>
            <button>
              <img src='/save.png' alt='' /> Save the Place
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singlepage;
